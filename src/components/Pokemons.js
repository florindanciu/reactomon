import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Pokemons extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      pokemons: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then((res) =>
        this.setState({
          loading: false,
          pokemons: res.data.results,
        })
      );
  }

  render() {
    const textToDisplay = this.state.loading
      ? "loading..."
      : this.state.pokemons.map((pokemon) => (
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
}

export default Pokemons;
