const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

//Import Routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

// Middlewares
app.use('/posts', (req, res, next) => {
    console.log("hello this is a posts middleware");
    next()
});


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/posts', (req, res) => {
    res.send('We are on post')
})

//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION, 
{ useUnifiedTopology: true }, 
() => console.log('connected to DB!'))

//start
app.listen(3000)