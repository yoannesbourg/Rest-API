const express = require('express')
const router = express.Router()
const Posts = require('../models/Post')

router.get('/posts', (req, res) => {
    res.send('We are on home')
})

router.get('/specific', (req, res) => {
    res.send('Specific post')
})


module.exports = router