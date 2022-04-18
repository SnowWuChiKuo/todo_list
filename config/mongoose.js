const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://root:texttiger891@cluster0.rntyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db