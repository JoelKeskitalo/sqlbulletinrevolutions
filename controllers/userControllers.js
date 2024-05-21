const User = require('../models/userModels')

exports.createUser = async (req, res) => {

    const { user, email} = req.body

    if (!user || !email) {
        return res.status(400).json({ error: 'A username and an email is required' })
    }

    try {
        const newUser = await User.createUser(user, email)
        res.status(200).send(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const userList = await User.getAllUsers()
        res.status(500).send(userList)
    } catch (error) {
        res.status(500).send(error.message)
    }
}