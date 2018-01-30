'use strict';

(function (module) {

    const chooseView = {};

    function reset() {
        $('.container').hide();
    };

    chooseView.initChoicePage = function() {
        reset();
    }    

    module.chooseView = chooseView;

})(app);