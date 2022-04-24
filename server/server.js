const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/error.middleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

//Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support DESK API' })
})

//added routes from userRoutes.js 
app.use('/api/users', require('./routes/user.routes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`))


