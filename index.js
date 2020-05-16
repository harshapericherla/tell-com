const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const graphlHTTP = require("express-graphql");

mongoose.connect("mongodb+srv://harsha:harsha@cluster0-fanfm.mongodb.net/test?retryWrites=true&w=majority", { dbName: 'tell' })
require('./models/office');

const schema = require('./schema');
const app = express();
const PORT = process.env.PORT || 4300;

app.use(cors());
app.use(express.static(__dirname+"/client_build"));
app.use("/graphql",graphlHTTP({
      schema:schema,
      graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});