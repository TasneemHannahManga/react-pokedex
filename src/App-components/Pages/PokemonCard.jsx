import React from "react";
import { Link } from "react-router-dom";

function Pokemon(props) {
  return (
    <Link
      className="pokemon-card-link"
      href={"/react-pokedex/pokemon/" + props.id}
    >
      <div className="pokemon-card">
        <img src={props.pic} />
        <p className="pokemon-name">{props.text}</p>
      </div>
    </Link>
  );
}
 
export default Pokemon;
