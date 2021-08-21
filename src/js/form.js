import $ from 'jquery';
import Inputmask from 'inputmask';


const form = {
  init() {
    $('.-js-starclick').find('.star').on('click', function () {
      $(this).addClass('active').nextAll().removeClass('active');
      $(this).addClass('active').prevAll().addClass('active');
    });
    $('.-js-starclick').find('.star').on('mouseover', function () {
      $(this).addClass('hover');
      $(this).siblings().removeClass('hover');
      $(this).prevAll().addClass('hover');
    })
    $('.-js-starclick').find('.star').on('mouseout', function () {
      $(this).removeClass('hover');
      $(this).siblings().removeClass('hover');
    })


    $('.select__main').on('click', function () {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active')
        $(this).siblings('.select__drop').fadeIn();
      } else {
        $(this).removeClass('active')
        $(this).siblings('.select__drop').fadeOut();
      }
    })

    $(document).on('click', function (e) {
      var select = $('.select');
      if (!select.is(e.target) && select.has(e.target).length === 0) {
        $('.select__main').removeClass('active');
        $('.select__drop').fadeOut();
      }
    });

    $('.select__item').on('click', function () {
      var text = $(this).text();
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      $(this).parents('.select').find('.select__main').empty().text(text);
      $('.select__main').removeClass('active');
      $('.select__drop').fadeOut();
    });

    let selector = document.querySelectorAll('.input[type="tel"]');
    Inputmask({
      mask: '+7 999 999 99 99',
      showMaskOnHover: false,
    }).mask(selector);

    let calendar = document.querySelectorAll('.calendar__input .form__input');
    Inputmask({
      mask: '99.99.9999',
      showMaskOnHover: false,
    }).mask(calendar);


    $('.calendar__input .form__input').on('blur', function () {
      if ($(this).val().length > 0) {
        $(this).siblings('.calendar__input-text').fadeOut(0)
      } else {
        $(this).siblings('.calendar__input-text').fadeIn()
      }
    })
  }
}


export default form;