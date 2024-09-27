require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
// const axios = require('axios');
const fs = require('fs')

const PORT = 5002;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}))

app.get('/oauth', (req, res) => {
    const authCode = req.query.code;
    fs.appendFileSync('.env', `AUTHORIZATION_CODE=${authCode}`, (err) => {
        if (err) throw err;
    });
    res.send('Код сохранен')
})

// const pipeline = '5559297';

// app.post('/postform', async(req, res) => {
//     const {name, phone, city} = req.body;
//     console.log(name, phone, city);
//     if (name || phone || city) {
//         const response = await axios.post('https://zifa.amocrm.ru/api/v4/leads', {headers: {'Authorization': `Bearer ${process.env.AUTHORIZATION_CODE}`}},
//             {
//                 "name": "Новая сделка BIG BRO",
//                 "custom_fields_value": [
//                     {
//                         "fields_name": ""
//                     }
//                 ]
//             }
//         )
//         res.status(200).send('Заебись')
//     }
// })


server.listen(PORT, () => {
    console.log(`Сервер заущен на порту ${PORT}`)
})