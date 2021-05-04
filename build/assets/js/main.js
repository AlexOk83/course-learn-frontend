jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    $('#home').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        //Navigation
        slidesNavigation: true,
        slidesNavPosition: 'left',
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);

});


