import PokemonCard from "PokemonCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${
          offset > 1019 ? "5" : "20"
        }#`
      )
      .then((response) => {
        const { results } = response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index + offset,
            url: pokemon.url,
            pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + offset
            }.png`,
            name: pokemon.name,
          };
          console.log(offset);
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      });
  }, [offset, setOffset]);
  return (
    <div className="home-container">
      {offset > 0 ? (
        <button
          onClick={() => {
            setOffset((offset) => offset - 20);
            console.log(offset);
          }}
          className="previous page"
        >
          <ArrowBackIosNewIcon />
        </button>
      ) : null}
      <div
        style={{
          marginLeft: offset < 1 ? "40px" : null,
          marginRight: offset > 1019 ? "40px" : null,
        }}
        className="pokemon-container"
      >
        {pokemonData.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              text={pokemon.name}
              pic={pokemon.pic}
            />
          );
        })}
      </div>
      {offset < 1019 ? (
        <button
          onClick={() => {
            setOffset((offset) => offset + 20);
            console.log(offset);
          }}
          className="next page"
        >
          <ArrowForwardIosIcon />
        </button>
      ) : null}
    </div>
  );
}

export default Home;
