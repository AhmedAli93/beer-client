'use strict';

page('/verify'); //initial page where we verify if the user is of age
page('/choose', app.chooseView.initChoicePage) //choice page, if you want to pair by food or by beer
page('/choosebybeer', app.beerView.initBeerPage ); //beer choice page with categories of beer
page('/choosebyfood', ctx => ); //food choice page, choose by big category
page('/choosebybeer/pairing', ctx => );
page('/choosebyfood/pairing', ctx => );

