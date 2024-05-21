const express = require('express')
const userController = require('../controllers/userControllers')
const router = express.Router()

router.post('/', userController.createUser)

module.exports = router