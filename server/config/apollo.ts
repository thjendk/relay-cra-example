import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    user: User
  }
`;

const resolvers = {
  Query: {
    user: () => {
      return {
        id: 1,
        name: 'Thomas',
      };
    },
  },
};

export default new ApolloServer({
  typeDefs,
  resolvers,
});
