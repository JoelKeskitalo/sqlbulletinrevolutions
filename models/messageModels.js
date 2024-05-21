const db = require('../database')

class Message {

    static async createMessage (content, user_id, channel_id) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO messages(content, user_id, channel_id) VALUES (?, ?, ?)`;
            db.run(sql, [content, user_id, channel_id], function (error) {
                if (error) {
                    reject (error.message)
                } else {
                    resolve(content, user_id, channel_id)
                }
            } 
        )
        })
    }


}

module.exports = Message