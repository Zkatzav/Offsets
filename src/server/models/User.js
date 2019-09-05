const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  fbID: String,
  party: {myParty: String, offsetsParties: [String]}, 
  offset: String,
})

const User = mongoose.model("User", userSchema)

module.exports = User