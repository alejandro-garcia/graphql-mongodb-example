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
  ranks: {
    type: new GraphQLList(RankType),
    resolve: Rank.getListOfRanks
  },
  rank: {
    type: RankType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Rank.getRankByPosition
  }
};
