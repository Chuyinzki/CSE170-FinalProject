var Mongoose = require('mongoose');


var RatingSchema = new Mongoose.Schema({
  // fields are defined here
  "course": String,
  "difficulty": Number,
  "enjoyability": Number,
  "usefulness": Number,
  "review": String
});

exports.Rating = Mongoose.model('Rating', RatingSchema);


