const express = require('express');
const cors = require('cors');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const server = express();

server.use(cors());
server.use(express.json());

const PORT = 8080

server.get('/', (req, res) => {
    res.send('Welcome to the Grand Line! ☠️🌊')
})

server.get('/pirates', async (req, res) => {
    try{
     const crew = await db('pirates');
     res.status(200).json(crew)
    } catch (err) {
     res.status(500).json({
        message: 'Failed to fetch pirates from the Grand Line'
     })
    }
});

server.listen(PORT, () => {
    console.log(`🌊 Server sailing at http://localhost:${PORT}`)
})