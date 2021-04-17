import { useContext } from 'react';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

import { StateContext } from '../components/Context';
import { Pokedex } from '../components/Pokedex';
import { client } from './api/apollo-client';

export default function Home() {
  const { user, changeUser, isLoggedIn } = useContext(StateContext);
  return (
    <div>
      <Head>
        <title>Front-end Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pokedex</h1>
        {!isLoggedIn ? (
          <button onClick={() => changeUser('admin', true)}>Log In</button>
        ) : (
          <ApolloProvider client={client}>
            <Pokedex />
          </ApolloProvider>
        )}
      </main>
    </div>
  );
}
