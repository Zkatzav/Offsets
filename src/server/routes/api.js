const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.get('/user/:fbID', async (req, res) => {
  let fbID = req.params.fbID
  let user = await User.find({ fbID: fbID })
  user ? res.send(user) : res.send(null)
})

router.post('/user', (req, res) => {
  let user = req.body
  let newUser = new User({
    name: user.name,
    fbID: user.fbID,
    party: { myParty: user.party, offsetsParties: user.offsetsParties },
    offset: null
  })
  console.log(newUser)
  newUser.save()
  res.send(`new user ${user.name} saved`)
})

router.put('/offset/:userName/:fitOffsetName', async (req, res) => {
  let userName = req.params.userName
  let fitOffsetName = req.params.fitOffsetName
  await User.findOneAndUpdate({ name: userName }, { $set: { offset: fitOffsetName } }, (err, success) => {
    err ? console.log(`error`) : console.log(success) 
  })
  await User.findOneAndUpdate({ name: fitOffsetName }, { $set: { offset: userName } }, (err, success) => {
      err ? console.log(`error`) : console.log(success)
  })
  res.end()
})


  module.exports = router