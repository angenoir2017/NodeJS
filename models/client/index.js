var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  nom:String,
  prenom:String,
  password: String,
  username:String,
  type: String,
  solde:Number
});

module.exports = mongoose.model('Client', ClientSchema);
