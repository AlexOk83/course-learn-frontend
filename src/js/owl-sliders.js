jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    $('.slider-objects').owlCarousel({
        loop:false,
        responsiveClass:true,
        navText: [],
        navigation: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            767:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true
            }
        }
    })
    $('.slider-project').owlCarousel({
        loop:false,
        responsiveClass:true,
        navText: [],
        navigation: true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            767:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true
            }
        }
    })
    $('.slider-tarifs').owlCarousel({
        loop:false,
        responsiveClass:true,
        navText: [],
        navigation: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            1024:{
                items:3,
                nav:true
            }
        }
    })

});