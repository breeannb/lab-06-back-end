// const require = require('requirejs');
const express = require('express'); 
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cor'); 
const app = express(); //this is how we get an app 

// import our data 
const weatherdata = require('./data/weather.json');
const geodata = require('./data/geo.json'); 


const PORT = process.env.PORT || 3001; 

// Function that munges our data to fit what is in trello example 
const oneCity = {
    'place_id': '282983083',
    'licence': 'https://locationiq.com/attribution',
    'osm_type': 'relation',
    'osm_id': '186579',
    'boundingbox': [
        '45.432536',
        '45.6528812',
        '-122.8367489',
        '-122.4720252'
    ],
    'lat': '45.5202471',
    'lon': '-122.6741949',
    'display_name': 'Portland, Multnomah County, Oregon, USA',
    'class': 'place',
    'type': 'city',
    'importance': 0.75356571743377,
    'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
}; 



function mungedLocation(oneCity) {
    // munge that data
    //once we have a single city, we want to just grab lat, lon and display_name
    const test = (({ lat, lon }) => ({ lat, lon }))(oneCity);

    console.log(test);
    const mungedCity = { 
        lat: '45.5202471',
        lon: '-122.6741949',
        display_name: 'Portland, Multnomah County, Oregon, USA',
    }; 
    

    return mungedLocationData;
}




// create a route method of get and location 
app.get('/location', (req, res) => {
    try {
        const mungedResponse = mungedLocation(data);
        res.json(mungedResponse);
    } catch(e) {

        // console.error(e);

        res.json({
            status: 500, 
            responseText: e,
        });
    }
});
    



app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });