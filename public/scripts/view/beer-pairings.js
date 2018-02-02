'use strict';

var app = app || {};

(function (module) {

  var beerPairing = {};

  function reset() {
    $('.container').hide();
  };

  beerPairing.results = function() {
    reset();
    $('.food-pairings-view').show();
  };


  module.beerPairing = beerPairing;
})(app);