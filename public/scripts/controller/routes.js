'use strict';

var thing = 'sfsdf';

// if (window.location.pathname !== '/') {
//   page.base('Beer-Match');
// }

// console.log(app)

// page('/', app.chooseView.initChoicePage); //initial page where we verify if the user is of age
page('/choose', app.chooseView.initChoicePage); //choice page, if you want to pair by food or by beer
page('/choosebybeer', app.beerView.initBeerPage); //beer choice page with categories of beer
page('/choosebyfood', app.foodView.initFoodPage); //food choice page, choose by big category
page('/choosebybeer/pairing', ctx => app.beerPairing.results(ctx));
page('/choosebyfood/pairing', ctx => app.foodPairing.results(ctx));
page('/about', app.aboutView.initAboutPage); //inits the about us page

page();