import React, { useState } from "react";

const initialPlant = {
  name: "",
  image: "",
  price: "",
};

function NewPlantForm({ addPlant }) {
  const [newPlant, setNewPlant] = useState(initialPlant);

  function handleChange(event) {
    setNewPlant({
      ...newPlant,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const sanitizedPlant = {
      ...newPlant,
      price: parseInt(newPlant.price),
    };
    addPlant(sanitizedPlant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newPlant.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={newPlant.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={newPlant.price}
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
