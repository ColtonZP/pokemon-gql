import Head from 'next/head';

import { Pokedex } from '../components/Pokedex';
import { client } from './api/apollo-client';
import { POKEMON_QUERY } from '../GraphQL/Queries';

export default function Home({ pokemon }) {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Pokedex pokemon={pokemon} />
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
