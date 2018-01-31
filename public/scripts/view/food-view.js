'use strict';

let app = app || {};

(function (module) {

  const foodView = {};

  foodView.initFoodViewPage = function() {
    reset();
    $('.food-view').show();
  };

  foodView.lightPage = function() {
    reset();
    $('.light').show();
  };

  foodView.spicyPage = function() {
    reset();
    $('.spicy').show();
  };

  foodView.heartyPage = function() {
    reset();
    $('.hearty').show();
  };

  foodView.roastedPage = function() {
    reset();
    $('.roasted').show();
  };

  foodView.cheeseDessertPage = function() {
    reset();
    $('.cheese-dessert').show();
  };

  foodView.bbqPage = function() {
    reset();
    $('.bbq').show();
  };

  foodView.vegetarianPage = function() {
    reset();
    $('.vegetarian').show();
  };

  foodView.seafoodPage = function() {
    reset();
    $('.seafood').show();
  };

  module.foodView = foodView;
})(app);