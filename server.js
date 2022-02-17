require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connect = require('./config')
const Controller = require('./controllers')

const app = express()
const PORT = Number(process.env.PORT) || 3000

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// ===========================================================
app.post('/api/users', Controller.postUser)

app.get('/api/users', Controller.getUsers)

app.post('/api/users/:_id/exercises', Controller.postExercise)

app.get('/api/users/:_id/logs', Controller.getLogsCount)

app.get('/api/users/:id/logs', Controller.getLogsArray)
// ===========================================================

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`)
    })
  })
  .catch(err => {
  console.log(err)
  })
