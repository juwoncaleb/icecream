import { useState } from "react";
import Image from "next/image";
import Header from "./component/header";

// Ice cream data with image paths
const iceCreamData = [
  { id: 1, name: "Vanilla", price: 3.5, image: "/p1.jpeg" },
  { id: 2, name: "Chocolate", price: 4.0, image: "/p2.jpeg" },
  { id: 3, name: "Strawberry", price: 4.5, image: "/p4.jpeg" },
  { id: 4, name: "Mint", price: 3.8, image: "/whole.jpeg" },
  { id: 5, name: "Cookie Dough", price: 5.0, image: "/p2.jpeg" },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (iceCream) => {
    setCart([...cart, iceCream]);
  };

  return (
    <div>
        <Header/>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {iceCreamData.map((iceCream) => (
            <div
              key={iceCream.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {/* Center Image within its container */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={iceCream.image}
                  alt={iceCream.name}
                  width={400}
                  height={500}
                  objectFit="cover"
                />
              </div>
              <div className="flex justify-around pricing">
                <div className="flex">
                  <h3>{iceCream.name}</h3>
                  <p>${iceCream.price.toFixed(2)}</p>
                </div>

                <button className="btn_cart" onClick={() => addToCart(iceCream)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
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
