import express from "express";
import { connectDb } from "./db/index.js";
import { graphQlServer } from "./graphql/index.js";
import { startStandaloneServer } from "@apollo/server/standalone";
import helmet from "helmet";
const app = express();
app.use(helmet());
const port = 4000;
connectDb();
const { url } = startStandaloneServer(graphQlServer, {
  listen: { path: "/graphql", port: 4001 },
});
app.listen(port, () => {
  console.log("server is listening to port ", port);
});
