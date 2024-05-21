const sqlite = require('sqlite3').verbose()


const db = new sqlite.Database('./sqlBulletinDatabase.db', (error) => {
    if (error) {
        console.error('Error opening database', error)
    } else {
        console.log('Connected to the database')
    }
})


const sql_user = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`;

const sql_channel = `CREATE TABLE IF NOT EXISTS channels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,
    FOREIGN KEY ("owner_id") REFERENCES users(id)
)`


db.serialize(() => {
    db.run(sql_user, error => {
        if (error) console.error('Error creating users table', error)
    })
    db.run(sql_channel, error => {
        if (error) console.error('Error creating channels table', error)
    })
})


module.exports = db
