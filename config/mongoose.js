const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://root:texttiger891@cluster0.rntyw.mongodb.net/todo-list?retryWrites=true&w=majority"

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db