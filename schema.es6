// schema.js
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import mongoose from 'mongoose';
import User from './Models/User/UserSchema.es6';
import Hobby from './Models/Hobby/HobbySchema.es6';
import Rank from './Models/Rank/RankSchema.es6';

import {
  UserQueries,
  UserMutations,
  UserType
  } from './Models/User/UserQL.es6';

import {
  HobbyType,
  HobbyQueries,
  HobbyMutations,
  } from './Models/Hobby/HobbyQL.es6';

import {
  RankType,
  RankQueries,
  RankMutations
} from './Models/Rank/RankQL.es6';


let RootQuery = new GraphQLObjectType({
  name: 'Query',      //Return this type of object
  fields: () => ({
    user: UserQueries.user,
    users: UserQueries.users,
    hobby: HobbyQueries.hobby,
    hobbies: HobbyQueries.hobbies,
    rank: RankQueries.rank,
    ranks: RankQueries.ranks
  })
});


let RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addUser: UserMutations.addUser,
    addHobby: HobbyMutations.addHobby,
    addRank: RankMutations.addRank
  })
});


let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
