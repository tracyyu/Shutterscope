 ! function ($) {
    "use strict";
    var slide = $("[data-slides]"),
        count = 0,
        slides = slide.data("slides"),
        len = slides.length,
        n = function () {
            if (count >= len) {
                count = 0
            }
            slide.css("background-image", 'url("' + slides[count] + '")').show(0, function () {
                setTimeout(n, 5e3)
            });
            count++;
        };
    n()
}(jQuery);