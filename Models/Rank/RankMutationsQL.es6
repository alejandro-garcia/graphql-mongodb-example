import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import RankType from './RankTypeQL.es6';
import Rank from './RankSchema.es6';

export default {
  addRank:{
    type:RankType,
    args: {
      rankId:{
        name:'rankId',
        type:new GraphQLNonNull(GraphQLInt)
      },
      nombre:{
        name:'nombre',
        type: new GraphQLNonNull(GraphQLString)
      },
      orden:{
          name:'orden',
          type: GraphQLString
      },
      category:{
          name:'category',
          type: GraphQLString
      },
      abbreviation: {
          name:'category',
          type: GraphQLString
      }
    },
    resolve: (root, {rankId, nombre, orden, category, abbreviation}) => {
      var newRank = new Rank({rankId: rankId, nombre:nombre, orden:orden, category:category, abbreviation:abbreviation});

      return new Promise((resolve, reject) => {
        newRank.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
