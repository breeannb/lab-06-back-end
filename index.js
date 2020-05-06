//console.log('hello world');

// const require = require('requirejs');
const express = require('express'); 
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors'); 
const app = express(); //this is how we get an app 
app.use(cors());


// import our data 
const weatherdata = require('./data/weather.json');
const geodata = require('./data/geo.json'); 


const PORT = process.env.PORT || 3001; 

// Function that munges our data to fit what is in trello example 

const oneCity = "Portland, Multnomah County, Oregon, USA"; 

function mungedLocation(oneCity) {
    // munge that data
    //once we have a single city, we want to just grab lat, lon and display_name

    const cityData = geodata.filter(a => a.display_name === oneCity)[0];
    const cityLocation = (({ lat, lon, display_name }) => ({ lat, lon, display_name }))(cityData);

    console.log(cityData);
    
    console.log(cityLocation);

    return cityLocation;
}

// create a route method of get and location 
app.get('/location', (req, res) => {
    // console.log('hello world');
    try {
        const mungedResponse = mungedLocation(req);
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