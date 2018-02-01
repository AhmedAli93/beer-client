'use strict';

$('.container').hide();
$('.button').show();

$.get('/verify', (req, res) => {
  localStorage.beer = JSON.stringify(req.beer);
  localStorage.food = JSON.stringify(req.food);
});

// This is the event handler for the button to access our page, this will fade in our verify popup.

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
  $('.container').fadeIn(800);
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

// event handler that listens for checkbox to be clicked, persists in localStorage. Reloads page on refresh without asking users age.

let checkboxValue = JSON.parse(localStorage.getItem('checkboxValues')) || {},
  checkboxes = $('.remember-me :checkbox');

checkboxes.on('change', function(){
  checkboxes.each(function(){
    checkboxValue[this.id] = this.checked;
  });
  
  localStorage.setItem('checkboxValues', JSON.stringify(checkboxValue));
});

// On page load
$.each(checkboxValue, function(key, value) {
  $('#' + key).prop('checked', value);
});
if (checkboxValue.checkbox === true) {
  $('popup').hide();
  $('.container').fadeIn(800);
  $('.button').fadeOut(1);
  console.log('hi',checkboxValue.checkbox);
}