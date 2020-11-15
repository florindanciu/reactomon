import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Nav from "./components/Nav";
import Pokemons from "./components/Pokemons";
import Types from "./components/Types";

function App() {
  return (
    <Router>
      <div className="App">
        <code>
          <Nav />
          {/* <Switch> */}
          <Route path="/" exact component={Pokemons} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/types" component={Types} />
          <Route path="/details" component={Details} />
          {/* </Switch> */}
        </code>
      </div>
    </Router>
  );
}

export default App;
