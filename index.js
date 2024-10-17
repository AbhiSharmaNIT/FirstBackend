//importing dot env
require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req, res) => {
  res.send('Abhishek Sharma')
})

app.get('/welcome', (req, res) => {
  res.send('<h1> Welcome to my server </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})