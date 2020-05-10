import { ApolloServer, gql } from 'apollo-server-express';
import { toGlobalId, fromGlobalId } from 'graphql-relay';

const typeDefs = gql`
  interface Node {
    id: ID!
  }

  type User implements Node {
    id: ID!
    name: String
  }

  type Query {
    user: User
    node(id: ID!): Node
  }
`;

const resolvers = {
  Query: {
    user: () => {
      return {
        id: toGlobalId('user', '1'),
        name: 'Thomas',
      };
    },
    node: (root, { id }) => {
      const { type, id: typeId } = fromGlobalId(id);
      return { __typename: type, id: typeId };
    },
  },

  Node: () => {
    return 'node';
  },
};

export default new ApolloServer({
  typeDefs,
  resolvers,
});
