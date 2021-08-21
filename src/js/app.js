
import Swiper from 'swiper';

let app = {
    init() {
        const mainSlider = new Swiper('.main-slider', {
            loop: true,
            slidesPerView: 1,
            loopedSlides: 10,
            spaceBetween: 0
        });
        $('.next').on('click', function () {
            mainSlider.slideNext();
        });

        $('.prev').on('click', function () {
            mainSlider.slidePrev();
        });
    }
};
app.init();