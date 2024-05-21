const User = require('userModels')

exports.createUser = async (req, res) => {
    try {
        const user = await User.createUser()
    } catch (error) {
        res.status(500).send(error.message)
    }
}