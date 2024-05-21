const db = require('../database')

class Channels {

    static async createChannel (name, owner_id)  {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO channels ("name", "owner_id") VALUES (?, ?)`;
            db.run(sql, [name, owner_id], function (error) {
                if (error) {
                    reject(error)
                } else {
                    const channelId = this.lastID
                    resolve( {channelId, name, owner_id} ) 
                }
            })
        })
        
    }

    static async createMessage () {
        
    }



}

module.exports = Channels