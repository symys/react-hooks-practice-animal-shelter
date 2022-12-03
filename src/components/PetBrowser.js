import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, filters}) {
  return (
  <div className="ui cards">
  {pets.map((pet) => {
    if(pet.type === filters){
      const {name, type, age, weight, gender} = pet
      return <Pet name={name} type={type} weight={weight} age={age} gender={gender}/>
    }
    else if(filters === "All"){
      const {name, type, age, weight, gender} = pet
      return <Pet name={name} type={type} weight={weight} age={age} gender={gender}/>
    }}
  
  )}</div>)
 
}

export default PetBrowser;
