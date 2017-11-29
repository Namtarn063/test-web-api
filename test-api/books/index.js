const express = require('express')
const router = express.Router()

let book = [
    { title: 'Basic Javascript', isbn:'746532' }, 
    { title: 'Ruby', isbn: '3223332' }
]

router.get('/book', (req, res) => {
    res.json(book)
})

module.exports = router