const mongoose = require('mongoose');

const episodeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  releaseDate: String
});

module.exports = mongoose.model('Episode', episodeSchema);