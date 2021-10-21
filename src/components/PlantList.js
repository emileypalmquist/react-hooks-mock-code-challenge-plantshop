import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allPlants }) {
  const renderPlants = allPlants.map((plant) => (
    <PlantCard
      key={plant.id}
      name={plant.name}
      price={plant.price}
      image={plant.image}
      id={plant.id}
    />
  ));

  return <ul className="cards">{renderPlants}</ul>;
}

export default PlantList;
