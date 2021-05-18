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

    const functionHide = function(e) {
        e.stopPropagation();
        $('.popup').removeClass('active');
        setTimeout(() => {
            $('.popup__overlay').removeClass('visible');

        }, 300)
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

    $('select').each(function () {
        var $this = $(this),
            $parent = $(this).parent(),
            numberOfOptions = $this.children('option').length;


        if ($this.val()) {
            $parent.addClass('filled')
        }
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        if ($this.prop('disabled')) {
            $styledSelect.addClass('disabled');
            $('.select').addClass('disabled');
        }

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            var li = $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val(),
                disabled: $this.children('option').eq(i).attr('disabled')
            }).appendTo($list);
            if (($this.val() === 0 && i === 0) || $this.val() === $this.children('option').eq(i).val()) {
                li.addClass('selected');
                $styledSelect.text($this.children('option').eq(i).text());
            }

        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('.select-styled').removeClass('active').next('ul.select-options').hide();
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            if ($(this).attr('disabled')) {
                return;
            }
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $listItems.removeClass('selected');
            $(this).addClass('selected');
            $list.hide();
            $parent.addClass('filled')
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
});