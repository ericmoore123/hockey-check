const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8080;

const axios = require('axios');
const options = {
    method: 'GET',
    url: 'https://api-hockey.p.rapidapi.com/teams/statistics/',
    params: {league: '3', season: '2019', team: '17'},
    headers: {
      'X-RapidAPI-Key': 'ff1ec47834mshb32fc8a32453591p1390d9jsn74115aa2ebab',
      'X-RapidAPI-Host': 'api-hockey.p.rapidapi.com'
    }
  };

const getData = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
});