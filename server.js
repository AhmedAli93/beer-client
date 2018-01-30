'use strict';

//dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser').urlencoded({extended: true});
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));
app.use(cors());


// Brewery API proxy
function proxyBreweryAPI(req, res) {
    console.log(req.params[0]);
    var baseUrl = ``;
    console.log(baseUrl);
    (requestProxy({
        url: baseUrl
    }))(req, res);
}

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public'});
});

app.get('/beers/*', proxyBreweryAPI);

//endpoints
app.get('/testing', (req, res) => {
    res.send('WERK WERK WERK');
});

//getting foods from database



//getting beers from api


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));