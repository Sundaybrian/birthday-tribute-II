

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        nav: false,
        center: true,
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    })
});