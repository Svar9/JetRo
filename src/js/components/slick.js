//= ../../../../node_modules/slick-carousel/slick/slick.js

$(function(){
    
    $(".bigSlider").slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slider__arrow slider__arrow--prev"></button>',
        nextArrow: '<button type="button" class="slick-next slider__arrow slider__arrow--next"></button>',
        autoplay: false,
        infinite: false,
        asNavFor: '.smallSlider'
    });
        
    $(".smallSlider").slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.bigSlider',
        focusOnSelect: true,
        waitForAnimate:false,
    });
    
});