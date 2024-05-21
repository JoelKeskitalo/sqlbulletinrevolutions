const express = require('express')
const router = express.Router()
const channelControllers = require('../controllers/channelControllers')


router.post('/', channelControllers.createNewChannel)





module.exports = router