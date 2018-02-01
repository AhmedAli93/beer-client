'use strict';


(function (module) {

  //big beer categories are accessible

  const beerView = {};

  beerView.initBeerPage = function() {
    reset();
    $('.beer-view').show();
    beerView.beers = JSON.parse(localStorage.beer);
  };



  module.beerView = beerView;
})(app);