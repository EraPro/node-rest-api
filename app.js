const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// Middleware
app.use(bodyParser())
app.use(cors())

// import routes
const santriRoutes = require('./routes/santri')
const userRoutes = require('./routes/auth')

// ruoutes example
app.use('/api/santri', santriRoutes)
app.use('/api/user', userRoutes)

// connect to DB
mongoose.connect('mongodb+srv://admin:admin@cluster0.yur1ore.mongodb.net/?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

// listen
app.listen('8080', () => {
    console.log(`Server running in 8080`)
})
