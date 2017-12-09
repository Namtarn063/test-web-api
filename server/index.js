const express = require('express')
const bodyParser = require('body-parser')
const validator = require('express-validator');
const contactListRouter = require('../contact')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(validator());
app.use('/',contactListRouter)

exports.showdata = function (req,res){
    req.checkBody('email', 'email is required.').notEmpty();
    req.checkBody('firstname', 'firstname is required.').notEmpty();
    req.checkBody('lastname', 'lastname is required.').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.send(errors);
        return;
    } else{
        res.json({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
    }
};

module.exports = app