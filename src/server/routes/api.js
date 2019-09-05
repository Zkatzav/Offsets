const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.get('/user/:fbID', async function(req, res){
  let fbID = req.params.fbID
  let user = await User.find({fbID: fbID})
  user ? res.send(user) : res.send(null)
})

router.post('/user', function(req, res){
  let user = req.body
  let newUser = new User ({
    name: user.name,
    fbID: user.fbID,
    party: {myParty: user.party, offsetsParties: user.offsetsParties}, 
    offset: null
  })
  console.log(newUser)
  newUser.save()
  res.send(`new user ${user.name} saved`)
})

router.get('/offsets', async function(req, res){
})

module.exports = router