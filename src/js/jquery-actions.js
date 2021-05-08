jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

    // формирование стилей для селекта
    $('select').each(function () {
        var $this = $(this),
            numberOfOptions = $this.children('option').length;


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
                rel: $this.children('option').eq(i).val()
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
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $listItems.removeClass('selected');
            $(this).addClass('selected');
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
});