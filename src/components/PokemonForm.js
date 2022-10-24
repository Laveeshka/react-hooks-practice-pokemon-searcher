import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  //set up controlled form
  const [name, setName] = useState("");
  const [hp, setHp] = useState(0);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    switch(name){
      case "name":
        setName(value);
        break;
      case "hp":
        setHp(parseInt(value, 10));
        break;
      case "frontUrl":
        setFront(value);
        break;
      case "backUrl":
        setBack(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    const newPokemon = {
      name,
      hp,
      sprites: {
        front,
        back
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(postedPokemon => onAddPokemon(postedPokemon))
      .catch(err => console.warn(err.message))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
