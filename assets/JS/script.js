$(document).ready(function(){
    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
