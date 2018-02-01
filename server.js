'use strict';

//dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser').urlencoded({extended: true});
const requestProxy = require('express-request-proxy');
const superagent = require('superagent');
const app = express();
const fs = require('fs');

const foodData = JSON.parse(fs.readFileSync('public/data/food.json'));

const PORT = process.env.PORT || 3000;
// const CLIENT_URL = process.env.CLIENT_URL;

// const client = new pg.Client(process.env.DATABASE_URL);
// client.connect();
// client.on('error', err => console.error(err));

app.use(cors());
app.use(express.static('./public'));

//whitelist
const whitelist = [
    "South German-Style Hefeweizen / Hefeweissbier",
    "American-Style Amber/Red Ale",
    "Strong Ale",
    "Brown Porter",
    "German-Style Pilsener",
    "British-Style Barley Wine Ale",
    "American-Style Pale Ale",
    "American-Style Stout",
    "English-Style India Pale Ale",
    "American-Style Sour Ale",
  ]

  
  // breweryDB proxy call - /beers/:beerId gets a specific beer
  app.get('/beers/*', beers);
  function beers(request, response){
    superagent
    .get(`http://api.brewerydb.com/v2/style/${request.params[0]}`)
    .set('Authorization', process.env.BREWERY_SECRET)
    .end(function(err, res){ 
      response.send(JSON.parse(res.text).data);
    })
  };
  
  // ::::  if you want to get all beers, get a premium acct and get all beers :::: //
  
  app.get('/getItems', (req, res) => {
    superagent
    .get(`http://api.brewerydb.com/v2/styles`)
    .set('Authorization', 'ac0a762267864965144e04a4b3c47f99')
    .end((err, data) => {
      data = JSON.parse(data.text).data;
      const filtered = data.filter(v => whitelist.includes(v.name))
      res.send({ beer: filtered, food: foodData })
    })
  });

  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: './public'});
  });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));