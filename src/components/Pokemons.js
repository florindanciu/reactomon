import React, { Component } from "react";
import axios from "axios";

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
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) =>
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
            <div>{pokemon.name}</div>
          </div>
        ));
    return <div className="cards">{textToDisplay}</div>;
  }
}

export default Pokemons;
