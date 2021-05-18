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
    $.fn.fullpage.setAllowScrolling(true);

});