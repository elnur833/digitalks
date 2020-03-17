$(document).ready(_ => {
    // OWL CAROUSEL BUG FIXING
    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments);
    }
    $(".feedbacks").owlCarousel({
        items: 1,
        center: true,
        margin: 0,
        // stagePadding:80,
        loop: true,
        responsiveClass: true,
        dots: false,
        // nav: true,
        navText: ["<i class='fa fa-angle-right my-next-button' aria-hidden='true'></i>", "<i class='fa fa-angle-left my-previous-button' aria-hidden='true'></i>"],

    })

    var carouselEl = $('.feedbacks');
    $(".my-next-button").click(function () {
        carouselEl.trigger('prev.owl.carousel');
    });

    $(".my-previous-button").click(function () {
        carouselEl.trigger('next.owl.carousel');
    });
})