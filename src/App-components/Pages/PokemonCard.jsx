import React from "react";

function Pokemon(props) {
  return (
    <a
      className="pokemon-card-link"
      href={"/react-pokedex/pokemon/" + props.id}
    >
      <div className="pokemon-card">
        <img src={props.pic} />
        <p className="pokemon-name">{props.text}</p>
      </div>
    </a>
  );
}
 
export default Pokemon;
