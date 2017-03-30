/**
 * Created by DB405T3A-F08C on 2016-12-28.
 */


$(function(){

  function btnOn13($btn, index){

      $btn.siblings('.btn-p13').fadeIn('on');
      $btn.addClass('on');

      var $fadeImage = $('.p13-image').eq(index);

      $fadeImage.siblings('.p13-image').removeClass('on').addClass('off');
      $fadeImage.addClass('on').removeClass('off');

  }

  function btnOn17($btn, index){

    $btn.siblings('.btn-p17').fadeIn('on');
    $btn.addClass('on');

    var $fadeImage = $('.p17-image').eq(index);

    $fadeImage.siblings('.p17-image').removeClass('on').addClass('off');
    $fadeImage.addClass('on').removeClass('off');

  }

  function btnOn18($btn, index){

    $btn.siblings('.btn-p18').fadeIn('on');
    $btn.addClass('on');

    var $fadeImage = $('.p18-image').eq(index);

    $fadeImage.siblings('.p18-image').removeClass('on').addClass('off');
    $fadeImage.addClass('on').removeClass('off');

  }

  $('.btn-p13').on('click',function(){

    console.log(214124);

      var index = $(this).index('.btn-p13');

      btnOn13( $(this), index );

  });

  $('.btn-p17').on('click',function(){

      var index = $(this).index('.btn-p17');

      btnOn17( $(this), index );

  });

  $('.btn-p18').on('click',function(){

      var index = $(this).index('.btn-p18');

      btnOn18( $(this), index );

  });


});
