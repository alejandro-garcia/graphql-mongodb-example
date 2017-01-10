import mongoose from 'mongoose';

var RankSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  rankId: { type: Number, index: true },
  nombre: String,
  orden: { type: Number},
  category: String, 
  abbreviation: String
});

let Rank = mongoose.model('Rank', RankSchema);

module.exports = Rank;

module.exports.getRankByPosition = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Rank.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res[id]);
    });
  });
};

module.exports.getListOfRanks = () => {
  return new Promise((resolve, reject) => {
    Rank.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};