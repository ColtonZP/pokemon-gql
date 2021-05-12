import { gql } from '@apollo/client';

export const POKEMON_QUERY = gql`
  {
    pokemons {
      id
      number
      name
      image
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      maxHP
      evolutions {
        name
      }
      evolutionRequirements {
        name
        amount
      }

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
