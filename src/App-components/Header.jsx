import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="navbar">
        <a href="/react-pokedex/">Home</a>
        <a href="/react-pokedex/random">Random Pokémon</a>
      </div>
    </div>
  );
}

export default Header;
