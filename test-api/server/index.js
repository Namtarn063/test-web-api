const express = require('express')
const bodyParser = require('body-parser')
const booksRouter = require('../books')
const friendsRouter = require('../friends')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/',booksRouter)
app.use('/',friendsRouter)



module.exports = app