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
  }



  

  module.foodView = foodView;
})(app);