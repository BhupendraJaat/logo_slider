$(document).ready(function () {
    var slider = $(".customer-logos");
    slider.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    // Next button click event
    $('.next').click(function () {
        slider.slick('slickNext');
    });

    // Previous button click event
    $('.prev').click(function () {
        slider.slick('slickPrev');
    });
});
