const express = require('express')
const router = express.Router()

let friends = [
    {
        id: '1',
        username: 'goldroger',
        name: 'Gol D. Roger',
        position: 'Pirate King'
    },
    {
        id: '2',
        username:'mrzero',
        name: 'Sir Crocodile',
        position: 'Former-Shichibukai'
    },
    {
        id: '3',
        username: 'luffy',
        name: 'Monkey D. Luffy',
        position: 'Captain'
    },
    {
        id: '4',
        username: 'kuzan',
        name: 'Aokiji',
        position: 'Former Marine Admiral'
    },
    {
        id: '5',
        username: 'shanks',
        name: 'Red-Haired Shanks',
        position: 'The 4 Emperors'
    }
];


//req(request), res(respond)
router.get('/friends',(req, res) =>{
    res.json(friends)
})
 
router.get('/friends/:id', (req, res)=> {
    res.json(friends.find(friends => friends.id === req.params.id));
})

router.get('/friends/:name', (req, res)=> {
    res.json(friends.find(friends => friends.name === req.params.name));
})


router.post('/friends', (req, res) =>{
    let newFriend = req.body
    friends.push(newFriend)
    //newFriend.created = Date.now
    res.json(newFriend)
})

router.put('/friends/:id', (req, res) => {
    const updateIndex = friends.findIndex(friends => friends.id === req.params.id)
    res.json(Object.assign(friends[updateIndex], req.body))
  })

router.delete('/friends/:id', (req, res) => {
    const deletedIndex = friends.findIndex(friends => friends.id === req.params.id)
    friends.splice(deletedIndex, 1)
   // res.status(204).send()
 })


module.exports = router