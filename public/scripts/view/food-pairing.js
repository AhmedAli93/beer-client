'use strict';

var app = app || {};

(function (module) {

  var foodPairing = {};

  function reset() {
    $('.container').hide();
  };

  foodPairing.results = function() {
    reset();
    $('.beer-pairings-view').show();
  };


  module.foodPairing = foodPairing;
})(app);