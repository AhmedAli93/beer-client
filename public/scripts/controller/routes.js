'use strict';

var thing = 'sfsdf'

if (window.location.pathname !== '/') {
    page.base('Beer-Match');
};

// console.log(app)

// page('/'); //initial page where we verify if the user is of age
// page('/', app.chooseView.initChoicePage); //choice page, if you want to pair by food or by beer
page('/choose', app.chooseView.initChoicePage); //choice page, if you want to pair by food or by beer
page('/choosebybeer', app.beerView.initBeerPage); //beer choice page with categories of beer
page('/choosebyfood', app.foodView.initFoodPage); //food choice page, choose by big category
page('/choosebybeer/pairing', ctx => app.beerPairing.beers(ctx));
// page('/choosebyfood/pairing');
page('/about', app.aboutView.initAboutPage); //inits the about us page

page();