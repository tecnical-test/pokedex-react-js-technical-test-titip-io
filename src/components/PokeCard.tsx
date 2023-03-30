import React from "react";

const PokeCard = ({ pokemon, handleGetDetail }) => {
  let card;

  switch (pokemon.types[0].type.name) {
    case "grass":
    case "bug":
      card = "card-green";
      break;

    case "fire":
      card = "card-red";
      break;

    case "water":
      card = "card-blue";
      break;

    case "normal":
      card = "card-gray";
      break;

    default:
      card = "card";
      break;
  }

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div onClick={() => handleGetDetail(pokemon)} className={card}>
        <div className="card-column">
          <p>{capitalize(pokemon.name)}</p>
          {pokemon.types.map((type) => (
            <button key={type.slot} className="btn-type-block">
              {type.type.name}
            </button>
          ))}
        </div>
        <div className="card-column">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt="pokemon"
          />
        </div>
      </div>
    </>
  );
};

export default PokeCard;
