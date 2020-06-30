const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World DDDDDDDDDDD')
})

app.get('/authachai', (req, res) => {
  res.send('Hello World authachai')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})