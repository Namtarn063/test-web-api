const express = require('express')
const router = express.Router()

let contactList = [
    {id: 01, firstname: 'Arya', lastname: 'Stark', Email: ' waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 02, firstname: 'Brienne', lastname: 'Tarth', Email: 'oathkeeper@gmail.com',phone: '123-456-7890', url: ' www.google.com', note: 'Do not cross her.'},
    {id: 03, firstname: 'Hodor', lastname: 'John', Email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', note: 'Hodor? Hodor... Hodor!'},
    {id: 04, firstname: 'Jon' , lastname: 'Snow', Email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', note: 'Knows nothing.'},
    {id: 05, firstname: 'Jora' , lastname: 'Mormont', Email: ' khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com',  note: 'Lost in the friend-zone.'},
    {id: 06, firstname: 'Ned' , lastname: 'Stark', Email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', note: 'Winter is coming.'},
    {id: 07, firstname: 'Margaery' , lastname: 'Tyrell', Email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', note: 'Keeper of kings.'},
    {id: 09, firstname: 'Petyr' , lastname: 'Baelish', Email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', note: 'Do not trust anyone.'},
    {id: 10, firstname: 'Samwell', lastname:  'Tarly', Email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', note: 'Loyal brother of the watch.'},
    {id: 11, firstname: 'Stannis' , lastname: 'Baratheon', Email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', note: 'Nobody expects the Stannish inquisition.'},
    {id: 12, firstname: 'Theon' , lastname: 'Greyjoy', Email: ' tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', note: 'Reluctant to pay iron price.'},
    {id: 13, firstname: 'Tyrion' , lastname: 'Lannister', Email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', note: 'Currently drunk.'}

    
]

//req(request), res(respond)
router.get('/contactList', (req, res) =>{
    res.json(contactList)
})

router.post('/contactList', (req, res) =>{
    let newContact = req.body
    contactList.push(newContact)
//    newContact.created = '2017-11-17'
    res.json(newContact)
})



module.exports = router