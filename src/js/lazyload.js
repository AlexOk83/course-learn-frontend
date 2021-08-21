import $ from 'jquery';


const lazyLoadImg = {
  init() {
    function lazy() {
      $('.lazy').each(function () {
        let windowHeight = $(window).innerHeight();
        let windowScrollTop = $(window).scrollTop() + windowHeight + 50;
        let elemetOfssetTop = $(this).offset().top;
        let img = $(this).data('src');
        if (elemetOfssetTop < windowScrollTop) {
          $(this).css({
            'background': `url('${img}') no-repeat center / cover`
          });
        }
      });
    }
    $(window).on('scroll', function () {
      lazy();
    });
    $(document).ready(function () {
      lazy();
    });
  }
};


export default lazyLoadImg;
