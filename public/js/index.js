$(document).ready(function(){
    $(".slider-area").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:true
    });

    $(".testomonials").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        autoplay: true,
        center: true
    });
    
    $('.counter').counterUp();



});


//$(window).on("load" ,function(){
    //$(".preloader").fadeOut(1000);
// })
