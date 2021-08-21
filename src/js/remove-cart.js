import $ from 'jquery';


const removeCart = {
  init() {
    $('.basket-cart__close').on('click', function () {
      $(this).parents('.basket-cart').fadeOut(300, function () {
        $(this).remove();
      })
    })
  }
}


export default removeCart;