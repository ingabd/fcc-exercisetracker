// const { } = require('../models')

class Controller{
  static async postUser(req, res) {
    console.log('di post /api/users')
  }
  static async getUsers(req, res) {
    console.log('di get /api/users')
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