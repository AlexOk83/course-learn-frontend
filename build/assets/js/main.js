jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    $('#home').fullpage({
        //options here
        scrollHorizontally: true,
        //Navigation
        slidesNavigation: true,
        slidesNavPosition: 'left',
        anchors:['index', 'projects', 'tarifs', 'insruction', 'contacts'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['index', 'projects', 'tarifs', 'insruction', 'contacts'],
        onLeave: function(origin, destination, direction){
            console.log(origin, destination, direction);
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


