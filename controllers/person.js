const router = require('express').Router()
const Person = require('../models/person')

//get all people from database
router.get('/', async (req,res)=>{
    const people = await Person.find()
    res.json(people)
})

module.exports = router