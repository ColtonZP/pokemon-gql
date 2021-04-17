import { useState } from 'react';

export const Pokedex = ({ pokemon }) => {
  const [currentPage, changeCurrentPage] = useState(0);
  const [currentPokemon, changeCurrentPokemon] = useState(pokemon[0]);
  const pages = [];

  for (let i = 0; i < pokemon.length; i += 10) {
    const chunk = pokemon.slice(i, i + 10);
    pages.push(chunk);
  }

  return (
    <div>
      {pages[currentPage].map(pokemon => (
        <button key={pokemon.id} onClick={() => changeCurrentPokemon(pokemon)}>
          <img src={pokemon.image} alt=""/>
          <span>{pokemon.number}</span>
          <h2>{pokemon.name}</h2>
        </button>
      ))}

      {pages.map((page, index) => (
        <button key={index} onClick={() => changeCurrentPage(index)}>
          {index + 1}
        </button>
      ))}

      <div>
        <h1>{currentPokemon.name}</h1>
        <span>{currentPokemon.number}</span>
      </div>
    </div>
  );
};
