   $(document).ready(function () {
       if ($(window).width() > 1260) {
           $('#fullpage').fullpage({
               menu: '#menu'
           });

           $(".showcase").css("background-color", "#000");
       };
   });
   $(window).resize(function () {
       if ($(window).width() > 1024) {
           $('#fullpage').fullpage({
               menu: '#menu'
           });

           $('.showcase').removeClass('layout');
           $(".showcase .slide").css("margin", "0");
           $(".showcase").css("background-color", "#000");
           $(".overlay img").css("left", "2%");
       } else {
           $.fn.fullpage.destroy('all');
           $('.showcase').addClass('layout');
           $(".showcase").css("background-color", "#fff");
           $(".showcase .slide").css("margin", "0 .5em");
           $(".overlay img").css("left", "5%");
       };

   })



   //Carousel

   $(document).ready(function () {
       var carousel = $('.carousel').waterwheelCarousel({
           keyboardNav: true,
           separation: 250,
           separationMultiplier: 0.8,
           opacityMultiplier: 1,
           flankingItems: 1,

       });

       $(".next").mousedown(function (e) {
           e.preventDefault();

       });
       $(".prev").mousedown(function (e) {
           e.preventDefault();
       });

       $(".next").click(function () {
           carousel.next();
       });
       $(".prev").click(function () {
           carousel.prev();
       });

   });
