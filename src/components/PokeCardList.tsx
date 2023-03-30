import React from "react";
import PokeCard from "./PokeCard";

const PokeCardList = ({ pokemons, handleGetDetail }) => {
  return (
    <div className="card-list">
      {pokemons.map((pokemon, key) => (
        <PokeCard
          key={key}
          pokemon={pokemon}
          handleGetDetail={handleGetDetail}
        />
      ))}
    </div>
  );
};

export default PokeCardList;
