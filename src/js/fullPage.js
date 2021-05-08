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

});