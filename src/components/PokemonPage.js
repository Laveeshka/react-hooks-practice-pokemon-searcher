import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(pokemonData => setPokemons(pokemonData))
      .catch(err => console.warn(err.message))
  }, [])

  const filteredPokemons = pokemons.filter(pokemon => {
    if(search !== "" ){
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    }
    else {
      return pokemon;
    }
  });

  function handleAddPokemon(newPokemon){
    const updatedPokemons = [...pokemons, newPokemon];
    setPokemons(updatedPokemons);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;
