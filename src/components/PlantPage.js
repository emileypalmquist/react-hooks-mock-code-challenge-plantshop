import React, { useEffect, useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const BASE_URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(BASE_URL)
      .then((resp) => resp.json())
      .then(setPlants);
    // .then(allPlants => setPlants(allPlants));
  }, []);

  const filteredPlants = plants.filter((plant) => {
    const nameIncludesSearch = plant.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const priceInSearch = plant.price.toString().includes(search);

    return nameIncludesSearch || priceInSearch;
  });

  // setSearch("hello");
  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
