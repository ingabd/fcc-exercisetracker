require('dotenv').config()

const express = require('express')
const cors = require('cors')
const Controller = require('./controllers')

const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})


app.post('/api/users', Controller.postUser)

app.get('/api/users', Controller.getUsers)

app.post('/api/users/:_id/exercises', Controller.postExercise)

app.get('/api/users/:_id/logs', Controller.getLogsCount)

app.get('/api/users/:id/logs', Controller.getLogsArray)


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
