const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
  console.log('Connected to mongodb')
})

mongoose.connection.on('reconnected', () => {
  console.log('Reconnected to mongodb')
})

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from mongodb')
})

mongoose.connection.on('close', () => {
  console.log('Connection to mongodb closed')
})

mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})

const dbConnect = async () => {
  await mongoose.connect('mongodb://mongo:27017/docker-node-mongo-r2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = dbConnect;