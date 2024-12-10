import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function RandomPokémonGenerator() {
  async function randomPokemon() {
    const randomNumber = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
    );
    const data = await response.json();

    document.getElementById("random-name").innerHTML = "Name: " + data.name;
    document.getElementById("random-id").innerHTML = "Number: " + data.id;
    document.getElementById("random-hp").innerHTML =
      "HP: " + data.stats["0"].base_stat;
    document.getElementById("random-attack").innerHTML =
      "Attack: " + data.stats["1"].base_stat;
    document.getElementById("random-defense").innerHTML =
      "Defense: " + data.stats["3"].base_stat;

    document
      .getElementById("random-image")
      .setAttribute(
        "src",
        data.sprites.other["official-artwork"].front_default
      );
    document
      .getElementById("random-info")
      .setAttribute("href", `/react-pokedex/pokemon/:${data.id}`);
  }

  randomPokemon();

  return (
    <div className="random-container">
      <h1 className="random-title">Random Pokémon Generator</h1>
      <div className="random-card">
        <div className="random-top-container">
          <img id="random-image"></img>
          <div className="random-info-container">
            <p id="random-id"></p>
            <p id="random-name"></p>
            <p id="random-hp"></p>
            <p id="random-attack"></p>
            <p id="random-defense"></p>
          </div>
        </div>
        <div className="random-bottom-container">
          <button
            onClick={async () => {
              randomPokemon();
            }}
            className="new-random random-button"
          >
            <AddCircleOutlineIcon />{" "}
            <p className="random-button-text">New Pokémon</p>
          </button>
          <a id="random-info" className="random-info random-button">
            <InfoIcon /> <p className="random-button-text">Info</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RandomPokémonGenerator;
