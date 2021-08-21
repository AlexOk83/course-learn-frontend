import $ from 'jquery';

const header = {
  init() {
    $(window).on('scroll', function () {
      // if ($(window).width() < 769 && $(window).scrollTop() > 75) {
      //   $('.header').addClass('--slideup');
      // } else {
      //   $('.header').removeClass('--slideup');
      // }
      if ($(window).scrollTop() > 10) {
        $('.header').addClass('header-size');
      } else {
        $('.header').removeClass('header-size');
      }
    });
  }
}


export default header;