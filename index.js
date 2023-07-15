const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const personRoutes = require('./controllers/person')

const app = express()

//MIDDLEWARES
app.use(express.json())

//ROUTES
app.use('/person',personRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// terminal confirmation
const PORT = process.env.PORT

app.listen(PORT,console.log(`listening on port ${PORT}`))