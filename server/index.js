const express = require('express')
const bodyParser = require('body-parser')
const contactListRouter = require('../contact')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/',contactListRouter)



module.exports = app