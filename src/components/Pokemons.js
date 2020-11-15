import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pokemons() {
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`;
    setIsLoading(true);
    axios.get(url).then((res) => {
      setIsLoading(false);
      setLoadedPokemons(res.data.results);
    });
  }, []);

  const textToDisplay = isLoading
    ? "pokemons are loading..."
    : loadedPokemons.map((pokemon) => (
        <div className="card" key={pokemon.name}>
          <Link
            to={{ pathname: "/details", url: pokemon.url }}
            className="pokemon-link"
          >
            <div>{pokemon.name}</div>
          </Link>
          {/* <Form formUrl={pokemon.forms} /> */}
          {/* <img
              src="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Not available"
            /> */}
        </div>
      ));

  return (
    <div>
      <div className="cards">{textToDisplay}</div>
    </div>
  );
}

export default Pokemons;
