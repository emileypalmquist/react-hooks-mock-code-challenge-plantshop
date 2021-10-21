import React, { useState } from "react";

const initialValue = {
  name: "",
  image: "",
  price: 0,
};

function NewPlantForm({ setPlants }) {
  const [newPlant, setNewPlant] = useState(initialValue);

  function handleChange(e) {
    setNewPlant((currentNewPlant) => {
      return {
        ...currentNewPlant,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((resp) => resp.json())
      .then(handleNewPlant);
  }

  function handleNewPlant(data) {
    setNewPlant(initialValue);
    setPlants((currentPlants) => [...currentPlants, data]);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newPlant.name}
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={newPlant.image}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          value={newPlant.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
