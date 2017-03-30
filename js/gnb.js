$(function(){
    $(".gnb-link").bind("mouseenter focusin", function() {
        $(this).addClass("on").siblings().removeClass("on");
        $('.gnb-depth2').delay(500).stop().fadeIn(1000);
        $('.gnb-bg').stop().animate({
            height:168
        }, 300);
    });
    $(".gnb-link").bind("mouseleave focusout", function() {
        $(this).removeClass("on");
        $('.gnb-depth2').stop().fadeOut(30);
        $('.gnb-bg').stop().animate({
            height:0
        });
    });

});
