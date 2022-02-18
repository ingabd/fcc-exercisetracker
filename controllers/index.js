const { Exercise, User } = require('../models')

class Controller{
  static async postUser(req, res) {
    const { username } = req.body
    try {
      const user = await User.create({ username })
      if (!user) throw { msg: 'FailedPostUser' }
      res.status(201).json(user)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async getUsers(req, res) {
    try {
      const users = await User.find().lean()
      res.status(200).json(users)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async postExercise(req, res) {
    const { _id } = req.params
    const { description, duration } = req.body
    let { date } = req.body
    if (!date) date = undefined
    try {
      const user = await User.findById(_id).lean()
      if (!user) throw {msg: 'UserNotFound'}
      const exercise = await Exercise.create({
        username: user.username,
        description,
        duration,
        date
      })
      if (!exercise) throw { msg: 'FailedPostExercise' }
      const output = { ...user, ...exercise._doc }
      output.date = output.date.toDateString()
      res.status(201).json(output)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async getLogsCount(req, res) {
    const { _id } = req.params
    try {
      let user = await User.findById(_id).lean()
      if (!user) throw {msg: 'UserNotFound'}
      const logs = await Exercise.find({
        username: user.username
      }).lean()
      user.count = logs.length
      console.log(user)
      res.status(200).json(user)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async getLogsArray(req, res) {
    console.log('di get exercise logs array')
  }
}

module.exports = Controller