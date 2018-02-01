'use strict';

var app = app || {};

(function (module) {
    
    function reset() {
        $('.container').hide();
    };
    const chooseView = {};


    chooseView.initChoicePage = function() {
        reset();
        $('.choose-view').show();
    }    //write rest of function for choice page//

    module.chooseView = chooseView;

})(app);