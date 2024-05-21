const db = require('../database')
class UserClass {

    static async createUser (user, email) {
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

    static async getAllUsers() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM users`;
            db.get(sql, [], (error, rows) => {
                if (error) {
                    reject(error)
                } else {
                    resolve( { rows })
                }
            })
        })
    }





}

module.exports = UserClass