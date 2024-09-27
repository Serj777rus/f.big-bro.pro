require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const axios = require('axios');
// const fs = require('fs');

const PORT = 5002;
const app = express();
// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/f.big-bro.pro/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/f.big-bro.pro/fullchain.pem')
//   };
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}))

const token = process.env.AUTHORIZATION_CODE;
app.get('/oauth', (req, res) => {
    res.send('Сервер работает!');
});

app.post('/postform', async(req, res) => {
    const {name, phone, city} = req.body;
    console.log(name, phone, city);
    console.log(token)
    if (name || phone || city) {
        const response = await axios.post('https://zifa.amocrm.ru/api/v4/leads',
            {
                "name": "Новая сделка BIG BRO",
                "pipeline_id": 5559297,
                "custom_fields_values": [  // Поправлено на custom_fields_values
                    {
                        "field_id": 574960,  // field_id, а не fields_id
                        "values": [{ "value": city }]
                    },
                    {
                        "field_id": 577272,
                        "values": [{ "value": name }]
                    },
                    {
                        "field_id": 581932,
                        "values": [{ "value": phone }]
                    }
                    ]
            },
            {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
              }
        )
        if (response.status == 200) {
            res.status(200).send('Заебись')
        }
    }
})


server.listen(PORT, () => {
    console.log(`Сервер заущен на порту ${PORT}`)
})