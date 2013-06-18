$(document).ready(function() {
  $('#twitter').submit(function(e){
    e.preventDefault();
    $('input [type=submit]', this).attr('disabled','disabled');
    $('input[name=tweet]').val();
    $('div').append('<p>Your tweet is being processed</p>');
  });
});
