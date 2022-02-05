$(function(){
    'use strict';

    $('.count_up').counterUp({
        delay: 10,
        time: 3000
    });


    var typed = new Typed('.typed', {
        stringsElement: '.typed-strings'
      });



      $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1500)
    });
    
    
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
    
        if (scrolling > 300) {
            $('.top').fadeIn()
        } else {
            $('.top').fadeOut()
        }
    });
});