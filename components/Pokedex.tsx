export const Pokedex = ({ pokemon }) => {
  const pages = [];

  for (let i = 0; i < pokemon.length; i += 10) {
    const chunk = pokemon.slice(i, i + 10);
    pages.push(chunk);
  }

  return <div></div>;
};
