$(function(){

  $('.contents-list-depth1-link').on('click', function(){

    var pageNum = $(this).data('page');

    $('#magazine').turn('page', pageNum+5);

  });

  $('.contents-list-depth2-link').on('click', function(){

    var pageNum = $(this).data('page');

    $('#magazine').turn('page', pageNum+5);

  });



});