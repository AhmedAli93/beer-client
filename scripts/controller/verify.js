'use strict';
$('.container').hide();
$('.button').show();
$('.button').click(function(event) {
    $('.age-verification').show();
    $('.popup2').hide();
    $('.popup').fadeIn(800);
    $('.button').fadeOut(1);
    
});
// Event handler for when the close button is pushed.
  $('.close_button').click(function(event) {
    $('.popup').fadeOut(800);
  });
  $('.yup').click(function(event){
    $('.popup').fadeOut(800);
    $('.container').show();
    console.log('User is of age:', true);
  });
// This is an event handler that listens for a keypress of the escape key, this will also close the popup
  $(document).on('keydown', function(e) {
    if (e.keyCode === 27) {
      $('.popup').hide();
    }
  });
$('.nope').click(function(event){
    $('.popup').fadeOut(800);
    $('.popup2').fadeIn(800);
    $('.button').fadeOut(5);
    console.log('User is of age:', false);

});
