const { Exercise, User, Log } = require('../models')

class Controller{
  static async postUser(req, res) {
    const { username } = req.body
    try {
      const created = await User.create({ username })
      if (!created) throw { msg: 'FailedPostUser' }
      res.status(201).json({
        username: created.username,
        _id: created._id
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
    console.log('di post exercises')
  }
  static async getLogsCount(req, res) {
    console.log('di get exercises logs count')
  }
  static async getLogsArray(req, res) {
    console.log('di get exercise logs array')
  }
}

module.exports = Controller