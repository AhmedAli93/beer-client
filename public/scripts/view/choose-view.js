'use strict';

var app = app || {};

(function (module) {
  
  const chooseView = {};

  function reset() {
    $('.container').hide();
  };

  chooseView.initChoicePage = function() {
    reset();
    $('.choose-view').show();
  };    

  module.chooseView = chooseView;

})(app);