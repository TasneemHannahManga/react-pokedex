import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function PokePage() {
  const { id } = useParams();
  const [pokeInfo, setPokeInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [spriteType, setSpriteType] = useState("default");

  function handleDefaultClick() {
    setSpriteType("default");
  }

  function handleFemaleClick() {
    setSpriteType("female");
  }

  function handleShinyClick() {
    setSpriteType("shiny");
  }

  function handleFemaleShinyClick() {
    setSpriteType("shiny-female");
  }

  const getPokemonInfo = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  const getPokemon = async (id) => {
    const details = await getPokemonInfo(id);
    setPokeInfo(details.data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon(id);
    console.log(pokeInfo);
  }, [pokeInfo, setPokeInfo]);

  return (
    <>
      {loading ? (
        <p>....loading</p>
      ) : (
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`pokemon/${pokeInfo.id}`}
        >
          <div className="poke-page">
            <h1 className="poke-name">{pokeInfo.name}</h1>
            <hr style={{ width: "60dvw" }} />
            <div className="poke-info">
              <p className="poke-type">Type: {pokeInfo.types[0].type.name}</p>

              <p className="poke-hp">Hp: {pokeInfo.stats[0].base_stat}</p>
              <p className="poke-species">Species: {pokeInfo.species.name}</p>
            </div>
            <div className="poke-sprites-container">
              <ul className="poke-types">
                <li onClick={handleDefaultClick}>Default</li>
                <li onClick={handleFemaleClick}>Female</li>
                <li onClick={handleShinyClick}>Shiny</li>
                <li onClick={handleFemaleShinyClick}>Shiny-female</li>
              </ul>

              <img
                className="poke-sprite-front"
                src={
                  spriteType === "default"
                    ? pokeInfo.sprites.front_default
                    : spriteType === "female"
                    ? pokeInfo.sprites.front_female
                    : spriteType === "shiny"
                    ? pokeInfo.sprites.front_shiny
                    : spriteType === "shiny-female"
                    ? pokeInfo.sprites.front_shiny_female
                    : pokeInfo.sprites.front_default
                }
              />
              <img
                className="poke-sprite-back"
                src={
                  spriteType === "default"
                    ? pokeInfo.sprites.back_default
                    : spriteType === "female"
                    ? pokeInfo.sprites.back_female
                    : spriteType === "shiny"
                    ? pokeInfo.sprites.back_shiny
                    : spriteType === "shiny-female"
                    ? pokeInfo.sprites.back_shiny_female
                    : pokeInfo.sprites.back_default
                }
              />
            </div>

            <div className="poke-stats">
              <p className="poke-height">Height: {pokeInfo.height}</p>
              <p className="poke-weight">Weight: {pokeInfo.weight}</p>
              <p className="poke-attack">
                Attack: {pokeInfo.stats[1].base_stat}
              </p>
              <p className="poke-defense">
                Defense: {pokeInfo.stats[2].base_stat}
              </p>
              <p className="poke-special-attack">
                Special-Attack: {pokeInfo.stats[3].base_stat}
              </p>
              <p className="poke-special-defense">
                Special-Defense: {pokeInfo.stats[4].base_stat}
              </p>
              <p className="poke-speed">Speed: {pokeInfo.stats[5].base_stat}</p>
              <p className="poke-abilities">
                Ability: {pokeInfo.abilities[0].ability.name},{" "}
                {pokeInfo.abilities[1]
                  ? pokeInfo.abilities[1].ability.name
                  : null}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default PokePage;
