var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  profilePic: String,
  authId: String
}, { timestamps: true });

mongoose.model('User', UserSchema);