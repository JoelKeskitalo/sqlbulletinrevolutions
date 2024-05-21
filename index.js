const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT = 6000
const URL = '127.0.0.1'

app.use(bodyParser.json())

app.use('/users', userRoutes)










app.listen(PORT, URL, ()=> {
    console.log(`Server running at ${URL}:${PORT}`)
})

