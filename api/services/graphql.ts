import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Apollo Client Setup
const client = new ApolloClient({
  uri: "https://staging.api.constellation.academy/api/graphql",
  cache: new InMemoryCache(),
});

// GraphQL Login Mutation
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    Auth {
      loginJwt(input: { email: $email, password: $password }) {
        loginResult {
          jwtTokens {
            accessToken
            refreshToken
          }
          firstLogin
        }
        clientMutationId
      }
    }
  }
`;

// GraphQL ContentNodes Query
export const GET_CONTENT_NODES = gql`
  query {
    Admin {
      Tree {
        GetContentNodes {
          edges {
            node {
              structureDefinition {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export default client;
