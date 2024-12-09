import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="navbar">
        <Link to="/react-pokedex/">Home</Link>
        <Link to="/react-pokedex/random">Random Pokémon</Link>
      </div>
    </div>
  );
}

export default Header;
