import { useQuery } from '@apollo/client';
import { POKEMON_QUERY } from '../GraphQL/Queries';

export const Pokedex = () => {
  const { data, error, loading } = useQuery(POKEMON_QUERY);
  if (error) return <div>errors</div>;
  if (loading || !data) return <div>loading</div>;

  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        data.pokemons.map(pokemon => <h1 key={pokemon.id}>{pokemon.name}</h1>)
      )}
    </div>
  );
};
