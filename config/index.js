const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

const connect = () => {
  return mongoose.connect(uri)
    .catch(err => {
      console.log(err)
      throw err
    })
}

module.exports = connect