const { Exercise, User, Log } = require('../models')

class Controller{
  static async postUser(req, res) {
    const { username } = req.body
    try {
      const user = await User.create({ username })
      if (!user) throw { msg: 'FailedPostUser' }
      res.status(201).json({
        username: user.username,
        _id: user._id
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async getUsers(req, res) {
    try {
      const users = await User.find()
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
      const user = await User.findById(_id)
      if (!user) throw {msg: 'UserNotFound'}
      const exercise = await Exercise.create({
        username: user.username,
        description,
        duration,
        date
      })
      if (!exercise) throw { msg: 'FailedPostExercise' }
      console.log(exercise)
      res.status(201).json(exercise)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async getLogsCount(req, res) {
    console.log('di get exercises logs count')
  }
  static async getLogsArray(req, res) {
    console.log('di get exercise logs array')
  }
}

module.exports = Controller