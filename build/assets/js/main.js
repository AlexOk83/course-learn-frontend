jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    $('#home').fullpage({
        //options here
        scrollHorizontally: true,
        //Navigation
        anchors:['index', 'projects', 'tarifs', 'insruction', 'contacts'],
        navigation: true,
        navigationPosition: 'left',
        onLeave: function(origin, destination, direction){
            console.log(origin, destination, direction);
            $('.header__menu .item').removeClass('active');
            $(`[data-link="${destination.anchor}"]`).addClass('active');
            if (destination.anchor === 'projects') {
                $('.header').addClass('header--white-bg')
            } else {
                $('.header').removeClass('header--white-bg');
            }
        },
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);

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

});


