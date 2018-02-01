'use strict';

(function (module) {

  beers = JSON.parse(localStorage.beer);
  foods = JSON.parse(localStorage.food);

  beerPairing = {};

  beerPairing.beers = function() {
    var indBeer = {};

    //event listener for data arribtute where beerPairing.name === key.
    $('.images').on('click', e => {
        console.log('hi: ', e);
    })
  };


  module.beerPairing = beerPairing;
})(app);