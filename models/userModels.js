const database = require('../database')
const db = database.initiateDatabase()

class UserClass {

    static async createUser(user, email) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO users (name, email) VALUES(?, ?)`;
            db.run(sql, [user, email], function (error) {
                if (error) {
                    reject(error)
                } else {
                    const userId = this.lastID
                    resolve({ userId, user, email })
                }
            })
        })
    }
}

module.exports = UserClass