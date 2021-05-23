jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    $('#home').fullpage({
        //options here
        scrollHorizontally: false,
        //Navigation
        anchors:['index', 'projects', 'tarifs', 'insruction', 'contacts'],
        navigation: true,
        navigationPosition: 'left',
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: false,
        continuousVertical: false,
        continuousHorizontal: false,
        interlockedSlides: false,
        dragAndMove: true,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        bigSectionsDestination: null,
        onLeave: function(origin, destination, direction){
            // здеь добавлять
            if ($('.modal').hasClass('active')) {
                $(document).on('scroll');
                return false;
            }
            console.log(origin, destination, direction);
            $('.home-header__menu .item').removeClass('active');
            $(`[data-link="${destination.anchor}"]`).addClass('active');

            if (destination.anchor === 'projects') {
                $('.home-header').addClass('home-header--white-bg')
            } else {
                $('.home-header').removeClass('home-header--white-bg');
            }

            if (destination.anchor === 'contacts') {
                $('.back-top').removeClass('back-top--scroll')
            } else {
                $('.back-top').addClass('back-top--scroll')
            }

        },
    });

    //methods
    // $.fn.fullpage.setAllowScrolling(true);

});