'use strict';

//dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser').urlencoded({extended: true});
const requestProxy = require('express-request-proxy');
const superagent = require('superagent');
const app = express();

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public'});
});

// breweryDB proxy call - /beers/:beerId gets a specific beer
app.get('/beers/*', beers);
function beers(request, response){
  superagent
  .get(`http://api.brewerydb.com/v2/style/${request.params[0]}`)
  .set('Authorization', process.env.BREWERY_SECRET)
  .end(function(err, res){ 
    response.send(JSON.parse(res.text).data);
  })
}

// ::::  if you want to get all beers, get a premium acct and get all beers :::: //

app.get('/beers', allBeers);
function allBeers(request, response){
  superagent
  .get(`http://api.brewerydb.com/v2/beers`)
  .set('Authorization', process.env.BREWERY_SECRET)
  .end(function(err, res){ 
    response.send(JSON.parse(res.text).data);
  })
}

// getting foods from database

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));