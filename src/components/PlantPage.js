import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(getPlants, []);

  function getPlants() {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then(setPlants);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList allPlants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
