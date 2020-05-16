const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
 type Office {
  _id: ID!
  title: String!,
  email: String!,
  address: String!,
  image_url: String!
 }
type Query {
  allOffices: [Office]
 }
`;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
module.exports = schema;