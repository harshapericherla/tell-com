import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import 'jquery/dist/jquery.min.js';
import './polyfills';
import "./index.css";
import App from "./App";

const httpLink = createHttpLink({ uri: "/graphql" });
const link = ApolloLink.from([httpLink]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById("root")
);