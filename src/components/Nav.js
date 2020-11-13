import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Reactomon</h3>
      <ul className="nav-links">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/pokemons" className="link">
          <li>Pokemons</li>
        </Link>
        <Link to="/types" className="link">
          <li>Types</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
