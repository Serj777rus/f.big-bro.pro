require('dotenv').config();
const express = require('express');
const https = require('https');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const PORT = 5002;
const app = express();
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/f.big-bro.pro/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/f.big-bro.pro/fullchain.pem')
  };
const server = https.createServer(options, app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}))

const token = process.env.AUTHORIZATION_CODE;

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
                  'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkZGY5OGFiNjM2M2EwMGFmNjA1NjYzYjVlMWNiMzUwMTRiYzJiYTg4YmRmNDgxMDUxM2M5NjgxZWY3NGY3NjMwMzM3NDVkYWQ1MzllY2VmIn0.eyJhdWQiOiI0NTEzMTE3Ny02ODgxLTQ5M2UtYmEyNC02NWYwYTU1MTJiNTEiLCJqdGkiOiI5ZGRmOThhYjYzNjNhMDBhZjYwNTY2M2I1ZTFjYjM1MDE0YmMyYmE4OGJkZjQ4MTA1MTNjOTY4MWVmNzRmNzYzMDMzNzQ1ZGFkNTM5ZWNlZiIsImlhdCI6MTcyNzQyNTk5MCwibmJmIjoxNzI3NDI1OTkwLCJleHAiOjE4ODUxNjE2MDAsInN1YiI6IjM3NzQzNTIiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MTE2NTExNjQsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImZpbGVzIl0sImhhc2hfdXVpZCI6IjFjMGMxY2FlLWU0ODUtNDI5NC04ZTE0LTc3YTE3NGYzMmM4YiIsImFwaV9kb21haW4iOiJhcGktYS5hbW9jcm0ucnUifQ.dJ-v5-kfzMdR9l5NsFjbnV7r7zb3EN54QH8KFL6YU-Bcb2BL_FY3O_jyLQJQ3v5-5dRusKfiYy3f7RCP5J3Qyc25rlP07U-XLxZi3LekfhkNpRZKpdYV3hcS8Asw-onQmmYrMngbhkLpdLCyENTR5fbS2N52TVrtH6_u0WF3XNDF8hr24iSIeY1xH1-jy2uSYNtuhdZ7JisntDUIBUFFiWR-fxXFOfSufd1IjO2AKxg9s1nVOyeowCJRlbZ3QWRGLRsdK3CsE7aPzB0vvFOjd0DB9tcTq8y2LHoFtkuzaD7HAEZ5pX2BaJIpjXHbLOsZR8mTUvvIuVS88FWnddMIsA`,
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