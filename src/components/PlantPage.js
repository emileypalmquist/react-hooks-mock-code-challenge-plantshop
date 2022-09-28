import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function fetchPlants() {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantsData) => setPlants(plantsData));
  }

  useEffect(fetchPlants, []);

  function updatePlants(newPlant) {
    // const newPlantsArry = [...plants, newPlant]
    // setPlants(newPlantsArry);
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  }

  function updateSearchTerm(newSearch) {
    setSearchTerm(newSearch);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm updatePlants={updatePlants} />
      <Search updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
