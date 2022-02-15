require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')



const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})


app.post('/api/users', function (req, res) {
  console.log('di post /api/users')
})

app.get('/api/users', function (req, res) {
  console.log('di get /api/users')
})

app.post('/api/users/:_id/exercises', function (req, res) {
  console.log('di post exercises')
})

app.get('/api/users/:_id/logs', function (req, res) {
  console.log('di get exercises logs count')
})

app.get('/api/users/:id/logs', function (req, res) {
  console.log('di get exercise logs array')
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
