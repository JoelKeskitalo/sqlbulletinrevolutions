const sqlite = require('sqlite3').verbose()

const initiateDatabase = () => {
    const db = new sqlite.Database('./sqlBulletinDatabase.db', (error) => {
        if (error) {
            return console.log(error)
        } else {
            return console.log('Connected to the database')
        }
    })

    let sql_user = `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    )`;


    db.serialize(() => {
        db.run(sql_user)
    })




    return db
}



module.exports = {
    initiateDatabase
}