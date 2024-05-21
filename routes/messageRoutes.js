const express = require('express')
const router = express.Router()
const messagesController = require('../controllers/messageController')

router.post('/', messagesController.createMessage) // fixa 

module.exports = router