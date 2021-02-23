jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    $('.home-slider').owlCarousel({
        loop: true,
        nav: true,
        dotsEach: false,
        autoplay: false,
        smartSpeed: 2000,
        navigation: true,
        navText: [],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            766:{
                items:2,
                nav:true
            },
            1024:{
                items:2,
                nav:true
            }
        },
    });

    $('.experts-slider').owlCarousel({
        loop: true,
        nav: true,
        dotsEach: false,
        autoplay: false,
        smartSpeed: 2000,
        navigation: true,
        navText: [],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            766:{
                items:2,
                nav:true
            },
            1024:{
                items:3,
                nav:true
            }
        },
    });

});


