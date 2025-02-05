import cors from "cors";
import gql from "graphql-tag";
import express from "express";
import { readFileSync } from "fs";
import resolvers from "./src/resolvers.js";
import records from "./src/routes/record.js";
import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { expressMiddleware } from '@apollo/server/express4';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());


const typeDefs = gql(
    readFileSync("schema.graphql", {
      encoding: "utf-8",
    })
  );

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

await server.start();


app.use("/record", records);
app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server),
  );


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});