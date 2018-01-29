'use strict';

let app = app || {};

(function (module) => {
    
    const foodView= = {};

    foodView.initFoodViewPage = () {
        reset();
        $('.food-view').show();
    };

    foodView.lightPage = () {
        reset();
        $('.light').show();
    };

    foodView.spicyPage = () {
        reset();
        $('.spicy').show();
    };
    
    foodView.heartyPage = () {
        reset();
        $('.hearty').show();
    };

    foodView.roastedPage = () {
        reset();
        $('.roasted').show();
    };

    foodView.cheeseDessertPage = () {
        reset();
        $('.cheese-dessert').show();
    };

    foodView.bbqPage = () {
        reset();
        $('.bbq').show();
    };

    foodView.vegetarianPage = () {
        reset();
        $('.vegetarian').show();
    };

    foodView.seafoodPage = () {
        reset();
        $('.seafood').show();
    }

    module.foodView = foodView;
})(app);