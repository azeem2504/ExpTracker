const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(cors({
  origin: 'https://exptracker-frontend.onrender.com'  
}));

app.get('/api/v1/test', (req, res) => {
  res.send('Backend is working!');
});



//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()
