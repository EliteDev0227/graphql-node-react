const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

//connect to db
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.djmg0.mongodb.net/elite-db?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("Connected to DB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server is listening to 4000");
});
