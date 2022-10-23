import React from "react";
import PokemonPage from "./PokemonPage";

//draw out the component hierarchy
//-App
//--PokemonPage
//----PokemonForm
//----Search
//----PokemonContainer
//------PokemonCard
function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
