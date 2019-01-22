const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');

const ENDPOINT =
  'https://api.darksky.net/forecast/159e8b3b543d437d6370825fc4ebad4d/';

const app = express();

app.use(cors());

app.get('/weather', (req, res) => {
  const { longitude, latitude } = req.query;

  if (longitude && latitude) {
    fetch(`${ENDPOINT}${latitude},${longitude}?units=si`)
      .then(response => response.json())
      .then(json => {
        res.json(json);
      })
      .catch(() => {
        res.status(500).json({ error: 'Something went wrong' });
      });
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('Find the server at: http://localhost:3001/');
});
