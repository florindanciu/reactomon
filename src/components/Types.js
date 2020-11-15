import React, { Component } from "react";
import axios from "axios";

class Types extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      types: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get(`https://pokeapi.co/api/v2/type`).then((res) => {
      this.setState({
        loading: false,
        types: res.data.results,
      });
    });
  }

  render() {
    const textToDisplay = this.state.loading
      ? "loading..."
      : this.state.types.map((type) => (
          <div className="card" key={type.name}>
            <div>{type.name}</div>
          </div>
        ));
    return <div className="cards">{textToDisplay}</div>;
  }
}

export default Types;
