$(document).ready(function () {
    var carousel = $('#swiper-1'); // Replace with actual ID
    var intervalTime = 100; // Smaller = faster

    function continuousScroll() {
        setInterval(function () {
            carousel.carousel('next');
        }, intervalTime);
    }

    continuousScroll();
});
