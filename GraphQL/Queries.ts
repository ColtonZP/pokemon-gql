import { gql } from '@apollo/client';

export const POKEMON_QUERY = gql`
  query pokemon {
    pokemons(first: 10) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;
