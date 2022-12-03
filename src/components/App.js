import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";


function App() {

  const API_URL = "http://localhost:3001/pets"
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    const fetchData = async() => {
      const data = await fetch(API_URL);
      const finalData = await data.json();
      setPets(finalData)
      console.log(finalData)
    }
    fetchData()
  }, [])

  function handleType(e){
    setFilters(e.target.value)
  }
  

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters handleType={handleType}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser filters={filters} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
