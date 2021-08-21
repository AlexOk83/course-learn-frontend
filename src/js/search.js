import $ from 'jquery';


const search = {
  init() {
    $('.-js-searchopen').on('click', function () {
      if (!$(this).parents('.search').hasClass('active')) {
        $(this).parents('.search').addClass('active');
      }
    })
    $('.-js-searchclose').on('click', function () {
      $(this).parents('.search').removeClass('active');
    })
  }
}


export default search;