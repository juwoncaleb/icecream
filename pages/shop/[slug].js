import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import client from "@/lib/contentful";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"; // Importing icons
import Header from "../component/header";
import Footer from "../component/footer";

export default function IceCreamDetail({ iceCream }) {
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // State to manage the quantity
  const { id } = useRouter().query; // Get the ID from the URL

  useEffect(() => {
    if (iceCream) {
      setIsLoading(false); // Set loading to false once ice cream details are loaded
    }
  }, [iceCream]);

  // Display loading screen until data is fetched
  if (isLoading) {
    return (
      <div className="loading_image">
        <center>
          <img className="logo_height" src="../../lg.png" alt="logo" />
        </center>
      </div>
    );
  }

  // Extract details from the fetched ice cream data
  const { name, description, price, image } = iceCream.fields;
  const imageUrl = image && image[0]?.fields?.file?.url
    ? "https:" + image[0].fields.file.url
    : "/placeholder.png";

  // Function to handle increase and decrease of quantity
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
   <div>
    <Header/>
     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
        
        {imageUrl && (
          <div className="flex justify-center mb-4">
            <Image
              src={imageUrl}
              alt={name}
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <h1 className="text-3xl font-bold mb-4 text-center">{name}</h1>

        
        <p className="font-bold text-xl mb-4">${(price * quantity).toFixed(2)}</p>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            className="bg-gray-200 p-2 rounded-full"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
          >
            <AiOutlineMinus size={20} />
          </button>
          <span className="text-xl font-semibold">{quantity}</span>
          <button
            className="bg-gray-200 p-2 rounded-full"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
          >
            <AiOutlinePlus size={20} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          className="bg-black text-white py-3 px-8 rounded-lg w-full mt-4"
          onClick={() => alert(`${quantity} ${name} added to cart`)}
        >
          Add {quantity} to Cart
        </button>
        <p className="text-gray-700 mb-4 mt-6 text-center">{description}</p>

      </div>
    </div>
    <Footer/>
   </div>
  );
}

// Fetch data for the dynamic page
export async function getStaticPaths() {
  const entries = await client.getEntries({
    content_type: "icecream",
  });

  // Create paths for each ice cream item
  const paths = entries.items.map((entry) => ({
    params: { id: entry.sys.id },
  }));

  return {
    paths,
    fallback: false, // Set to false for 404 page if the ID is not found
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const entries = await client.getEntries({
    content_type: "icecream",
    "sys.id": id, // Filter by the specific ID
  });

  const iceCream = entries.items[0] || null;

  return {
    props: {
      iceCream,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
