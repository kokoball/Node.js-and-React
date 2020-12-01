const express = require('express') //express 모듈 불러오기
const { Mongoose } = require('mongoose')
const app = express()
const port = 5000  // 3000 or 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://koko:123456a@boilerplater.hhnv0.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect..')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})