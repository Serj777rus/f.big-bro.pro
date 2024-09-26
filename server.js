require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
// const axios = require('axios');

const PORT = 3000;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}))

app.post('/postform', async(req, res) => {
    const {name, phone, city} = req.body;
    console.log(name, phone, city);
    if (name || phone || city) {
        res.status(200).send('Заебись')
    }
})


server.listen(PORT, () => {
    console.log(`Сервер заущен на порту ${PORT}`)
})