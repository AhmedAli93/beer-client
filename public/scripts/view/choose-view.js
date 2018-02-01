'use strict';

var app= app || {};

(function (module) {

    const chooseView = {};

    function reset() {
        $('.container').hide();
    };

    chooseView.initChoicePage = function() {
        reset();
        $('.choose-view').show();
    }    //write rest of function for choice page//

    module.chooseView = chooseView;

})(app);