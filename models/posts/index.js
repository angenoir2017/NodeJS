var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  body: String,
  author:String,
  postImage:String

});

module.exports = mongoose.model('Post', PostSchema);
