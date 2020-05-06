// import express from 'express';
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const cors = require('cors');

// bag of coins that indy uses
const data = require('./data/weather.json');
// we're going to replace this with a fetch to the API

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

function mungeWeather(weatherData) {
  // munge that data

    return mungedData;
}

app.get('/location', (req, res) => {
// req will have query parameters and some user data
    try {
        const mungedResponse = mungeWeather(data);
        res.json(mungedResponse);
    } catch (e) {
        console.error(e);

        res.json({
            status: 500,
            responseText: e,
        });
    }
});


app.get('/weather', (req, res) => {
  // req will have query parameters and some user data
    res.json([
        {
            forecast: 'Partly cloudy until afternoon.',
            time: 'Mon Jan 01 2001',
        },
        {
            forecast: 'Mostly cloudy in the morning.',
            time: 'Tue Jan 02 2001',
        },
    ]);
});

// wildstar matches ANYTHING
app.get('*', (req, res) => {
  // req will have query parameters and some user data

  // res.json is like the RETURN statement
    res.status(404).json({
        error: 'no such route!',
    });
});


app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });