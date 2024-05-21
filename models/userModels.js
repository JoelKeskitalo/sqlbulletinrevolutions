const database = require('../database')
const db = database.initiateDatabase()

class User {

    static async createUser() {
        return new Promise((resolve, reject) => {
            // databashantering
        })
    }
}

module.exports = User