const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: {
    type: Date,
    default: Date.now
  }
})

const userSchema = new mongoose.Schema({
  username: String
})

module.exports = {
  exerciseSchema,
  userSchema
}

const Exercise = new mongoose.model('Exercise', exerciseSchema)
const User = new mongoose.model('User', userSchema)

module.exports = {
  Exercise,
  User
}
