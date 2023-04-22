const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Location {
    _id: ID
    name: String
  }

  type Lodging {
    _id: ID
    name: String
    description: String
    image: String
    rating: Float
    location: Location
  }

  type Attraction {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    location: Location
  }

  type Eatery {
    _id: ID
    name: String
    description: String
    image: String
    rating: Float
    price: Float
    location: Location
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    locations: [Location]
    lodgings(Location: ID, name: String): [Lodging]
    lodging(_id: ID!): Lodging
    attractions(Location: ID, name: String): [Attraction]
    attraction(_id: ID!): Attraction
    eateries(Location: ID, name: String): [Eatery]
    eatery(_id: ID!): Eatery
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addLodging(name: String!, description: String!, image: String!, locationId: ID!, price: Float!, occupancy: Int!): Lodging
    addAttraction(name: String!, description: String!, image: String!, locationId: ID!, price: Float!, start_time: String!, end_time: String!): Attraction
    addEatery(name: String!, description: String!, image: String!, locationId: ID!, price: Float!, cuisine: String!): Eatery
    updateLodging(_id: ID!, input: UpdateLodgingInput!): Lodging
    updateAttraction(_id: ID!, input: UpdateAttractionInput!): Attraction
    updateEatery(_id: ID!, input: UpdateEateryInput!): Eatery
    deleteLodging(_id: ID!): Lodging
    deleteAttraction(_id: ID!): Attraction
    deleteEatery(_id: ID!): Eatery
  }
`;

module.exports = typeDefs;
