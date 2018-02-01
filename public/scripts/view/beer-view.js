'use strict';

var app = app || {};

(function (module) {

  function reset() {
    $('.container').hide();
  };

  //big beer categories are accessible

  const beerView = {};

  beerView.initBeerPage = function() {
    reset();
    $('.beer-view').show();
    beerView.beers = JSON.parse(localStorage.beer);
    beerView.food = JSON.parse(localStorage.food);
  }

    //event listener for data arribtute where beerPairing.name === key.
    $('.images').on('click', function(e) {
      beerView.beers.forEach(function(beer) {
        if(beer.name === e.target.id) {

          var foodMatch = beerView.food.filter( v => v.beerPair.includes(beer.name));
          console.log(foodMatch);

          console.log('it works', beer)
          $('.container').hide()
          var foodContainer = $('.food-pairings-view')
          var contents = document.createElement('div');
          var title = document.createElement('h2')
          title.textContent = beer.name;
          var text = document.createElement('p')
          text.textContent = beer.description
          var list = document.createElement('ul');
          
          foodMatch.forEach(v => {
            var li = document.createElement('li');
            li.textContent = v.name;
            list.appendChild(li);
          })
          contents.appendChild(title);
          contents.appendChild(text);
          contents.appendChild(list);
          foodContainer.show()
          foodContainer.append(contents)

        }
      })
    });



  module.beerView = beerView;
})(app);