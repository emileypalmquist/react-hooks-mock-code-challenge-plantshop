import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const renderPlants = plants.map((onePlant) => (
    <PlantCard key={onePlant.id} plant={onePlant} />
  ));
  return <ul className="cards">{renderPlants}</ul>;
}

export default PlantList;
