import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Nav from "./components/Nav";
import Pokemons from "./components/Pokemons";
import Types from "./components/Types";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <code>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokemons" component={Pokemons} />
            <Route path="/types" component={Types} />
            <Route path="/details" component={Details} />
          </Switch>
        </code>
      </div>
    </Router>
  );
}

export default App;
