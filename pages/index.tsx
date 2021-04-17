import { useContext } from 'react';
import Head from 'next/head';

import { StateContext } from '../components/Context';
import { Pokedex } from '../components/Pokedex';
import { client } from './api/apollo-client';
import { POKEMON_QUERY } from '../GraphQL/Queries';
import { Login } from '../components/Login';

export default function Home({ pokemon }) {
  const { changeUser, isLoggedIn } = useContext(StateContext);
  return (
    <div>
      <Head>
        <title>Front-end Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!isLoggedIn ? (
          <Login changeUser={changeUser} />
        ) : (
          <Pokedex pokemon={pokemon} />
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({ query: POKEMON_QUERY });

  return {
    props: {
      pokemon: data.pokemons,
    },
  };
}
