'use strict';

var app = app || {};

(function (module) {
    
  function reset() {
    $('.container').hide();
  };
  const chooseView = {};


  chooseView.initChoicePage = function() {
    reset();
    $('.food-view.container').hide();
    $('.beer-view.container').hide();
    $('.choose-view').show();
  };    //write rest of function for choice page//

  module.chooseView = chooseView;

})(app);