const Channels = require('../models/channelModels')

exports.createNewChannel = async (req, res) => {
    
    const { name, owner_id } = req.body

    if (!name || !owner_id) {
        res.status(400).send('A name and an owner id for the channel is required.')
    }

    try {
        const newChannel = await Channels.createChannel(name, owner_id)
        res.status(200).send(newChannel)

    } catch (error) {
        res.status(500).send(error.message)
    }

}