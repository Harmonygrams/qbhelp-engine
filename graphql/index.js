import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema.js";

//import controllers
import {
  addPRogram,
  removeProgram,
  fetchAllPrograms,
  fetchProgram,
} from "../controllers/programs.controller.js";

const resolvers = {
  Query: {
    programs: (_, args) => fetchAllPrograms(args),
    program: (_, args) => fetchProgram(args),
  },
  Mutation: {
    addProgram: (_, args) => addPRogram(args),
    removeProgram: (_, args) => removeProgram(args),
  },
};

export const graphQlServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
