import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  const [inStock, setInStock] = useState(true);

  function handleNotInStock() {
    setInStock(false);
  }

  function handleInStock() {
    setInStock(true);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleNotInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
