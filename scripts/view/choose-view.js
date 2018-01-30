'use strict';

(function (module) {

    const chooseView = {};

    function reset() {
        $('.container').hide();
    };

    chooseView.initChoicePage = function() {
        reset();
    }    //write rest of function for choice page//

    module.chooseView = chooseView;

})(app);