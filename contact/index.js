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
    {id: 08, firstname: 'Petyr' , lastname: 'Baelish', Email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', note: 'Do not trust anyone.'},
    {id: 09, firstname: 'Samwell', lastname:  'Tarly', Email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', note: 'Loyal brother of the watch.'},
    {id: 10, firstname: 'Stannis' , lastname: 'Baratheon', Email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', note: 'Nobody expects the Stannish inquisition.'},
    {id: 11, firstname: 'Theon' , lastname: 'Greyjoy', Email: ' tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', note: 'Reluctant to pay iron price.'},
    {id: 12, firstname: 'Tyrion' , lastname: 'Lannister', Email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', note: 'Currently drunk.'}

    
]


//req(request), res(respond)
router.get('/contactList', (req, res) =>{
    res.json(contactList)
})

router.get('/contactList/id/:id', (req, res)=> {
    res.json(contactList.find(contactList => contactList.id === req.params.id));
})

router.get('/contactList/firstname/:firstname', (req, res)=> {
    res.json(contactList.find(contactList => contactList.firstname === req.params.firstname));
 })

 router.get('/contactList/lastname/:lastname', (req, res)=> {
    res.json(contactList.find(contactList => contactList.lastname === req.params.lastname));
 })

router.post('/contactList', (req, res) =>{
    let newContact = req.body
    contactList.push(newContact)
//    newContact.created = '2017-11-17'
    res.json(newContact)
})

 router.post('/contactList/newContact',(req,res)=>{
    let newContact = req.body
    contactList.push(newContact)
    
    req.checkBody('firstname', 'firstname is required.').notEmpty();
    req.checkBody('lastname', 'lastname is required.').notEmpty();
    req.checkBody('email', 'email is required.').notEmpty();
    var errors = req.validationErrors();
    
        if(errors){
           res.send(errors);
           return;
        } else{
            res.json({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                newContact
            });
        }
      
})
router.put('/contactList/:id', (req, res) => {
    const updateIndex = contactList.findIndex(contactList => contactList.id === req.params.id)
    res.json(Object.assign(contactList[updateIndex], req.body))
})

router.delete('/contactList/:id', (req, res) => {
    const deletedIndex = contactList.findIndex(contactList => contactList.id === req.params.id)
    contactList.splice(deletedIndex, 1)
 })
module.exports = router