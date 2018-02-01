'use strict';

let app = app || {};

(function (module) {
  const aboutView = {};

  //need to assign container classes to HTML elements still
  aboutView.initAboutPage = () => {
    $('.container').empty();
    $('.about-view').show();
  };

  module.aboutView = aboutView;
})(app);