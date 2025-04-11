import { useState } from "react";
import Image from "next/image";
import Header from "./component/header";
import client from "@/lib/contentful";

// Fetching data from Contentful
export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "icecream", // Ensure this matches your Contentful content type ID
  });

  return {
    props: {
      content: entries.items,
    },
    revalidate: 60,
  };
}

export default function Shop({ content }) {
  const [cart, setCart] = useState([]);
  console.log(content); // Log the content for debugging

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <Header />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {content.map((item) => {
          const { name, price, image } = item.fields;

          // Extract image URL
          const imageUrl = image && image[0]?.fields?.file?.url
            ? "https:" + image[0].fields.file.url
            : "/placeholder.png"; // Fallback image

          return (
            <div
              key={item.sys.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              {/* Image */}
              {imageUrl && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={300}
                    height={300}
                    style={{
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}

              {/* Name + Price and Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 5px 0" }}>{name}</h3>
                  <p style={{ margin: 0 }}>${price.toFixed(2)}</p>
                </div>
                <button
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => addToCart({ name, price })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Section */}
      <div style={{ padding: "20px" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
