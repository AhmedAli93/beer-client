'use strict';

var app = app || {};

(function (module) {

  function reset() {
    $('.container').hide();
  };

  //big beer categories are accessible

  const beerView = {};

  beerView.initBeerPage = function() {
    app.reset();
    $('.beer-view').show();
    beerView.beers = JSON.parse(localStorage.beer);
    
    //event listener for data arribtute where beerPairing.name === key.
    $('.images').on('click', e => {
      console.log('hi: ', e);
      beers.forEach(beer => {
        if(beer.name === $('li').attr(data))
        beerPairing.append(this);
        
        
      })
    })
  };



  module.beerView = beerView;
})(app);