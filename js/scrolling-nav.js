/**
 * Created by ClementNg on 24/6/2016.
 */
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-inverse").css("background-color", "#2B2B2B");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-inverse").css("background-color", "transparent");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll').bind('click',function(event){
        event.preventDefault();
        var $anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $($anchor).offset().top,
        }, 950
        );
    });
});

