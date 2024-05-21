const Message = require('../models/messageModels')

exports.createMessage = async (req, res) => {
    const { content, user_id, channel_id } = req.body 

    if (!content || !user_id || !channel_id) {
        res.status(400).send(`You need content, a user ID and a channel ID to create a channel.`)
    }

    try {
        const createdMessage = await Message.createMessage(content, user_id, channel_id)
        res.status(200).send(createdMessage)
    } catch (error) {
        res.status(500).send(error.message)
    }
} 