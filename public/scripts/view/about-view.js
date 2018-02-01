'use strict';

var app= app || {};

(function (module) {

    function reset() {
        $('.container').hide();
    };

    
    const aboutView = {};

    //need to assign container classes to HTML elements still 
    aboutView.initAboutPage = () => {
        $('.container').empty();
        $('.about-view').show();
    };

    module.aboutView = aboutView;
})(app);