import Head from 'next/head';
import { useContext } from 'react';
import { StateContext } from '../components/Context';

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
          <h1>{user}</h1>
        )}
      </main>
    </div>
  );
}
