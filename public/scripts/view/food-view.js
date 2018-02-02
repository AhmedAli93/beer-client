'use strict';

var app = app || {};

(function (module) {

  const foodView = {};

  function reset() {
    $('.container').hide();
  };

  foodView.initFoodPage = function() {
    reset();
    $('.food-view').show();
    foodView.beers = JSON.parse(localStorage.beer);
    foodView.food = JSON.parse(localStorage.food);
  }

  var viewContainer = $('.beer-pairings-view');

  $('.food-image').on('click', function(e) {
    var beerUl = $('#beer-list')
    if(beerUl){
      beerUl.remove();
    }
    $('.container').hide()
    viewContainer.show();
    var selected;
    foodView.food.forEach(function(food) {
      if(food.name === e.target.id) {
        selected = food;
      }
    })
    var beerList = selected.beerPair.map(v => {
      return foodView.beers.find(x => x.name === v )
    })

    var ulEl = document.createElement('ul');
    ulEl.setAttribute('id', 'beer-list');
    beerList.forEach(v => {
      var liEl = document.createElement('li');
      var h2El = document.createElement('h2')
      h2El.textContent = v.name;
      liEl.appendChild(h2El);
      var pEl = document.createElement('p');
      pEl.textContent = v.description;
      liEl.appendChild(pEl);
      ulEl.appendChild(liEl);
    })
    viewContainer.append(ulEl);

  })
    

  

  module.foodView = foodView;
})(app);