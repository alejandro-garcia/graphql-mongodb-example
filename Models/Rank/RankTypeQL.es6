import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Rank from './RankSchema.es6';
//import HobbyType from '../Hobby/HobbyTypeQL.es6';

export default new GraphQLObjectType({
  name: 'Rank',
  description: 'A rank',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    rankId: {
      type: GraphQLInt,
      description: 'Rank id'
    },
    nombre: {
      type: GraphQLString,
      description: 'Rank description'
    }, 
    orden: {
      type: GraphQLInt,
      description: 'order of record'
    },
    category: {
      type: GraphQLString,
      description: 'rank category'
    },
    abbreviation: {
      type: GraphQLString,
      description: 'rank abbreviation'
    }
  })
});
