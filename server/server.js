const { GraphQLServer, PubSub } = require("graphql-yoga");

const moves = [];

const typeDefs = `
  type Move {
    id: ID!
    player: String!
    result: Int!
    calcString: String! 
    moveNumber: Int!
  }


  type Query {
    moves: [Move!]
  }

  type Mutation {
    makeMove(player: String!, result: Int!, calcString: String!, moveNumber: Int!): ID!
    deleteMoves(input: String): Boolean
  }

  type Subscription {
    moves: [Move!]
  }
`;

const subscribers = [];
const onMovesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
  Query: {
    moves: () => moves,
  },

  Mutation: {
    makeMove: (parent, { player, result, calcString, moveNumber }) => {
      const id = moves.length;
      moves.push({ id, player, result, calcString, moveNumber });
      subscribers.forEach((fn) => fn());
      return id;
    },

    deleteMoves: () => {
      moves.splice(0, moves.length);
      subscribers.forEach((fn) => fn());
      return true;
    },
  },

  Subscription: {
    moves: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2, 15);

        onMovesUpdates(() => pubsub.publish(channel, { moves }));

        setTimeout(() => pubsub.publish(channel, { moves }), 0);

        return pubsub.asyncIterator(channel);
      },
    },
  },
};

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(({ port }) => {
  console.log(`server running at http://localhost:${port}`);
});
