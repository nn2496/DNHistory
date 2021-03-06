$(document).ready(function(){

  $('#magazine').turn({
    display: 'double',
    acceleration: true,
    gradients: !$.isTouch,
    elevation:50,
    when: {
      turned: function(e, page) {
        /*console.log('Current view: ', $(this).turn('view'));*/
      }
    }
  });

  $(window).bind('keydown', function(e){
    if (e.keyCode==37)
      $('#magazine').turn('previous');
    else if (e.keyCode==39)
      $('#magazine').turn('next');
  });

  $('.prev').on('click', function(){
    $('#magazine').turn('previous');
  });

  $('.next').on('click', function(){
    $('#magazine').turn('next');
  });



});