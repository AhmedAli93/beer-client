'use strict';


(function (module) {

  //big beer categories are accessible

  const beerView = {};

  beerView.initBeerPage = function() {
    reset();
    $('.beer-view').show();
    beerView.beers = JSON.parse(localStorage.beer);
  };

  $('.images').on('click', e => {
    console.log(e);
  });

  module.beerView = beerView;
})(app);