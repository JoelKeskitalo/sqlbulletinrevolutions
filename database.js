const sqlite = require('sqlite3').verbose()


const db = new sqlite.Database('./sqlBulletinDatabase.db', (error) => {
    if (error) {
        console.error('Error opening database', error)
    } else {
        console.log('Connected to the database')
    }
})


let sql_user = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`;

let sql_channel = `CREATE TABLE IF NOT EXISTS channels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,
    FOREIGN KEY ("owner_id") REFERENCES users(id)
)`

let sql_message = `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT VARCHAR(200) NOT NULL,
    user_id INTEGER NOT NULL,
    channel_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (channel_id) REFERENCES channels(id)
)`;

// rad 31 & 32: detta betyder, essentially, meddelandet tillhör användaren och kanalen 

db.serialize(() => {
    db.run(sql_user, error => {
        if (error) console.error('Error creating users table', error)
    })
    db.run(sql_channel, error => {
        if (error) console.error('Error creating channels table', error)
    })
    db.run(sql_message, error => {
        if (error) console.error('Error creating messages tables', error)
    })
})


module.exports = db
