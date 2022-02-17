const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: Date
})

const userSchema = new mongoose.Schema({
  username: String
})

const logSchema = new mongoose.Schema({
  username: String,
  count: Number,
  log: [{
    description: String,
    duration: Number,
    date: Date
  }]
})

module.exports = {
  exerciseSchema,
  userSchema,
  logSchema
}

const Exercise = new mongoose.model('Exercise', exerciseSchema)
const User = new mongoose.model('User', userSchema)
const Log = new mongoose.model('Log', logSchema)

module.exports = {
  Exercise,
  User,
  Log
}
