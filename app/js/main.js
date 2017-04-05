$(document).ready(function () {
    if ($(window).width() > 1260) {
        $('#fullpage').fullpage();
        $(".showcase").css("background-color", "#000");
    }
});

$(window).resize(function () {
    if ($(window).width() > 1024) {
        $('#fullpage').fullpage();
        $('.showcase').removeClass('layout').css("background-color", "#000");
        $(".showcase .slide").css("margin", "0");
        $(".overlay img").css("left", "2%");
    } else {
        $.fn.fullpage.destroy('all');
        $('.showcase').addClass('layout').css("background-color", "#fff");
        $(".showcase .slide").css("margin", "0 .5em");
        $(".overlay img").css("left", "5%");
        $(".carousel").css("width", "200px").css("height", "auto");
    }
});


//Carousel

$(document).ready(function () {
    var carousel = $('.carousel').waterwheelCarousel({
        keyboardNav: true,
        separation: 250,
        separationMultiplier: 0.8,
        opacityMultiplier: 1,
        flankingItems: 1
    });

    $(".next").mousedown(function (e) {
        e.preventDefault();

    }).click(function () {
        carousel.next();
    });

    $(".prev").mousedown(function (e) {
        e.preventDefault();
    }).click(function () {
        carousel.prev();
    });

});
