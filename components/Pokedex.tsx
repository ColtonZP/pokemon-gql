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
    <div className="pokedex page">
      <div className="container">
        <div className="selector">
          <div className="pokemon-list">
            {pages[currentPage].map(pokemon => (
              <button
                key={pokemon.id}
                onClick={() => changeCurrentPokemon(pokemon)}
                className="pokemon"
              >
                <img src={pokemon.image} alt="" />
                <span className="number">{pokemon.number}</span>
                <h2 className="name">{pokemon.name}</h2>
              </button>
            ))}
          </div>

          <div className="page-nav">
            <div className="pages">
              {pages.map((page, index) => (
                <button
                  className={`page-number ${index === currentPage && 'active'}`}
                  key={index}
                  onClick={() => changeCurrentPage(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="quick-nav">
              <button
                onClick={() =>
                  currentPage > 0 && changeCurrentPage(currentPage - 1)
                }
              >
                Prev
              </button>
              <button
                onClick={() =>
                  currentPage < pages.length - 1 &&
                  changeCurrentPage(currentPage + 1)
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="current-pokemon">
          <div className="header">
            <h1 className="name">{currentPokemon.name}</h1>
            <span className="number">#{currentPokemon.number}</span>
          </div>
          <div className="body">
            <img src={currentPokemon.image} alt="" />
            <p>
              Type:{' '}
              {currentPokemon.types.map(type => (
                <span className="tag" key="type">
                  {type}
                </span>
              ))}
            </p>

            <p>
              MaxHP: <span>{currentPokemon.maxHP}</span>
            </p>

            <p>
              Weakness:{' '}
              {currentPokemon.weaknesses.map(weakness => (
                <span className="tag" key="type">
                  {weakness}
                </span>
              ))}
            </p>

            <p>
              Resistance:{' '}
              {currentPokemon.resistant.map(resist => (
                <span className="tag" key="type">
                  {resist}
                </span>
              ))}
            </p>

            <p>
              MaxCP: <span>{currentPokemon.maxCP}</span>
            </p>

            <p className="long-tags">
              Attacks:{' '}
              {currentPokemon.attacks.fast.map(attack => (
                <span className="tag" key="type">
                  {`Fast - ${attack.name} - ${attack.damage} damage - ${attack.type}`}
                </span>
              ))}
              {currentPokemon.attacks.special.map(attack => (
                <span className="tag" key="type">
                  {`Special - ${attack.name} - ${attack.damage} - ${attack.type}`}
                </span>
              ))}
            </p>

            <p>
              Classification: <span>{currentPokemon.classification}</span>
            </p>

            <p>
              Weight:{' '}
              <span>{`${currentPokemon.weight.minimum} - ${currentPokemon.weight.maximum}`}</span>
            </p>

            <p>
              Height:{' '}
              <span>{`${currentPokemon.height.minimum} - ${currentPokemon.height.maximum}`}</span>
            </p>

            <p>
              Flee Rate:{' '}
              <span>{`${currentPokemon.height.minimum} - ${currentPokemon.height.maximum}`}</span>
            </p>

            <p>
              Evolution:{' '}
              {currentPokemon.evolutions.map(evo => (
                <span className="tag" key="type">
                  {evo.name}
                </span>
              ))}
            </p>

            <p>
              Evolution Requirements:{' '}
              <span>{`${currentPokemon.evolutionRequirements.amount} ${currentPokemon.evolutionRequirements.name}`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
