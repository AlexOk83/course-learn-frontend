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
jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    $('.form-field').each(function() {
        var $this = $(this);
        var inp = $('input', $this);
        var eye = $('.eye', $this);
        var check = function() {
            if (inp.val().length > 0) {
                $this.addClass('filled');
            } else {
                $this.removeClass('filled')
                inp.mask(null);
            }
        }

        eye.mousedown(function() {
            inp.attr('type', 'text')
        });

        eye.mouseup(function () {
            inp.attr('type', 'password')
        })

        inp.keyup(function() {
            check();
        })
    });

    $('.tabs__item').each(function() {
        var $this = $(this);
        var body = $this.attr('data-tab');
        $this.click(function() {
            if ($this.hasClass('active')) {
                return false;
            }

            $('.tabs__body').removeClass('active');
            $(`#${body}`).addClass('active');
            $('.tabs__item').removeClass('active');
            $this.addClass('active');
        });
    })

    $('.modal').each(function () {
        var $this = $(this);
        var close = $('.close-btn', $this);

        close.click(function() {
            $this.addClass('inactive');
            setTimeout(() => {
                $this.removeClass('active inactive');
            }, 200);

        });
    });

    $('.home-header__person').click(function() {
        $('#sign').addClass('active');
    });

    $('.home-header__region').click(function() {
        $('.popup__overlay').addClass('visible');
        setTimeout(() => {
            $('.popup').addClass('active');
        }, 0)
    });

    function functionHide () {
        $('.popup').removeClass('active');
        setTimeout(function() {
            $('.popup__overlay').removeClass('visible');
        }, 0)
    }

    $('.popup .close-btn').click(functionHide);

    $('.pdf_instruction').click(function() {
        $('#instruction').addClass('active');
    });

    $('.toggle-menu-btn').click(function() {
        $('#menu').addClass('active');
    });

    $('.back-top').click(function() {
        if ($(this).hasClass('back-top--scroll')) {
            window.fullpage_api.moveSectionDown();
            return;
        }
        window.fullpage_api.moveTo('index');
    });

    $('.form-select').each(function() {
        const container = $(this),
            select = $('select', container),
            field = $('.form-select__field', container),
            search = $('.form-select__search', container),
            clear = $('.clear-btn', container),
            list = $('.form-select__list', container);
        console.log(select);

        search.on('keyup', function(e) {
           console.log(e.target.value);
           const value = e.target.value.toString();
           if (value.length >= 2) {
               $('.form-select__item', list).each(function () {
                    let text = $(this).text();
                    console.log(text.toLowerCase().search(value.toLowerCase()));
                    if (text.toLowerCase().search(value.toLowerCase()) > -1) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
               })
           } else {
               $('.form-select__item', list).show();
           }
        });

        clear.click(function() {
            search.val('');
            search.focus();
            $('.form-select__item', list).show();
        })


        field.click(function(e) {
            e.stopPropagation();
            container.addClass('active');
            setTimeout(function() {
                search.focus();
            }, 100);
        });

        $('.form-select__item', list).each(function() {
            $(this).click(function() {
                const value = $(this).attr('data-val');
                select.val(value);
                field.text($(this).text());
                container.removeClass('active');
            })
        })



        $(document).click(function (e) {
            if ($(e.target).closest(".form-select").length) return;
            container.removeClass('active');
        });

    });

    $('.popup').each(function() {
        const container = $(this),
            searchP = $('.popup__search input', container),
            select = $('.home-header__region'),
            list = $('.popup__list', container);

        searchP.on('keyup', function(e) {
            console.log(e.target.value);
            const value = e.target.value.toString();
            if (value.length >= 2) {
                $('.popup__item', list).each(function () {
                    let text = $(this).text();
                    if (text.toLowerCase().search(value.toLowerCase()) > -1) {
                        $(this).show(200);
                    } else {
                        $(this).hide(200);
                    }
                })
            } else {
                $('.popup__item', list).show(200);
            }
        });

        $('.popup__item', list).each(function() {
            $(this).click(function() {
                const value = $(this).attr('data-city');
                select
                    .text($(this).text())
                    .attr('data-city', value)
                    .addClass('selected');
                functionHide();
            })
        })

    });
});
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
            1024:{
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