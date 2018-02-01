'use strict';

var app = app || {};

(function (module) {

  function reset() {
    $('.container').hide();
  };

  // var beers = JSON.parse(localStorage.beer);
  // var foods = JSON.parse(localStorage.food);

  var beerPairing = {};

  beerPairing.beers = function() {
    reset();
    $('food-pairings-view').show();
   
  };


  module.beerPairing = beerPairing;
})(app);