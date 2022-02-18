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
    const checkDate = new Date(date)
    if (!date || checkDate.toString() === 'Invalid Date') date = undefined
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
      user.description = exercise.description
      user.duration = exercise.duration
      user.date = exercise.date.toDateString()
      delete user.__v
      res.status(201).json(user)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async getLogs(req, res) {
    const { _id } = req.params
    if (!_id) this.getLogsArray
    try {
      let user = await User.findById(_id).lean()
      if (!user) throw {msg: 'UserNotFound'}
      const logs = await Exercise.find({
        username: user.username
      }).lean()
      delete user.__v
      user.count = logs.length
      logs.forEach(el => {
        delete el.username
        delete el._id
        delete el.__v
        el.date = el.date.toDateString()
      })
      user.log = logs
      res.status(200).json(user)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
  static async getLogsArray(req, res) {
    const { id } = req.params
    console.log(id)
    try {
      let user = await User.findById(id).lean()
      if (!user) throw {msg: 'UserNotFound'}
      const logs = await Exercise.find({
        username: user.username
      }).lean()
      console.log(logs)
      user.count = logs.length
      user.log = logs
      console.log(user)
      res.status(200).json(user)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}

module.exports = Controller