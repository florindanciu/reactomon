import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      pokemonDetail: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get(this.props.location.url).then((res) =>
      this.setState({
        loading: false,
        pokemonDetail: res.data,
      })
    );
  }

  render() {
    const textToDisplay = this.state.loading ? (
      "loading..."
    ) : (
      <div>
        <div className="details-card" key={this.state.pokemonDetail.id}>
          <h4>{this.state.pokemonDetail.name}</h4>
        </div>
        <div className="details-card" key={this.state.pokemonDetail.id}>
          <ul>
            <li>Base experience: {this.state.pokemonDetail.base_experience}</li>
            <li>Height: {this.state.pokemonDetail.height}</li>
            <li>Weight: {this.state.pokemonDetail.weight}</li>
            <li>{}</li>
          </ul>
        </div>
      </div>
    );

    return (
      <div>
        <div>{textToDisplay}</div>
      </div>
    );
  }
}

export default Details;
