(function ($) {
    "use strict";

    //Run function when document ready
    $(document).ready(function () {
        init_menu_toggle();
        init_header_style();
        init_search_option();
        init_hero_area_style();
        init_offer_style();
        init_testimonial_style();
        init_product_style();
        backtotop_click_option();
        menu_scroll_option();
    });

    $(window).load(function () {
        preloader_option();
    });

    //Run function when window scroll
    $(window).scroll(function () {
        backtotop_show_option();
    });

    function init_menu_toggle() {
        $(".menu-icon").click(function () {
            $(this).toggleClass("menu-icon-design");
            $(".header-menu").toggleClass("show-menu");
        });
    }

    function init_header_style() {
        var header = $(".header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.addClass("header-fixed");
            } else {
                header.removeClass("header-fixed");
            }
        });
    }

    function init_search_option() {
        $(".extra-icon i").click(function () {
            $(".search-area").addClass("show-search");
        });
        $(".search-close i").click(function () {
            $(".search-area").removeClass("show-search");
        });
    }

    function init_hero_area_style() {
        $('.hero-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            items: 1
        })
    }

    function init_offer_style() {
        $('.offer-all').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            items: 1
        })
    }

    function init_testimonial_style() {
        $('.testimonial-all').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            stagePadding: false,
            items: 1
        })
    }

    function init_product_style() {
        $('.product-all').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 3,
                    dots: true
                }
            }
        })
    }

    function menu_scroll_option() {
        $('.header-menu ul li a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top - 70
            }, 1000, 'swing');
        });
    }

    function preloader_option() {
        $(".preloader-area").fadeOut("slow");
    }


    function backtotop_show_option() {
        var backtotop = $(".back-to-top");
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            backtotop.addClass("back-to-top-show");
        } else {
            backtotop.removeClass("back-to-top-show");
        }
    }

    function backtotop_click_option() {
        var backToTop = $(".back-to-top");
        backToTop.on("click", function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }

})(jQuery);