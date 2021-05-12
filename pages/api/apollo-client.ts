import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://pokemon-gql.netlify.app/.netlify/functions/graphql',
  cache: new InMemoryCache(),
});
