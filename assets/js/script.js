$(document).ready(function () {
    $('.slick-carousel.hero-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

function initializeFeaturedCarousel() {
    const $carousel = $('.featured-cards');

    if ($(window).width() < 1200) {
        $carousel.slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}

$(document).ready(function () {
    initializeFeaturedCarousel();
    $(window).resize(initializeFeaturedCarousel); // Reinitialize on window resize
});

$(document).ready(function () {
    // Show or hide the button based on scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#goToTop').fadeIn().css({
                "display": "flex"
            });
        } else {
            $('#goToTop').fadeOut().css({
                "display": "none"
            });
        }
    });

    // Scroll to the top when the button is clicked
    $('#goToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
});

$(document).ready(function () {
    // Initialize Slick carousel
    function initializeDesignsCarousel() {
        $('.designs-slider').slick({
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="custom-slick-prev"><i class="fa fa-chevron-left"></i></button>', // Custom previous arrow
            nextArrow: '<button type="button" class="custom-slick-next"><i class="fa fa-chevron-right"></i></button>', // Custom next arrow
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            gap: 4,
            slidesToScroll: 1, responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
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
    }

    // Function to filter items
    function filterItems(category) {
        $('.item, .carousel-item').each(function () {
            if (category === 'all' || $(this).data('category') === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        // Refresh Slick carousel after filtering
        if ($('.carousel-container').is(':visible')) {
            $('.designs-slider').slick('refresh');
        }
    }

    // Filter items on filter link click
    $('.filter-link').click(function (e) {
        e.preventDefault();
        var filterCategory = $(this).data('filter');
        filterItems(filterCategory);
    });

    // Check window width and initialize carousel if needed
    function checkScreenSize() {
        if ($(window).width() < 1200) {
            $('.filter-container').addClass('d-none');
            $('.carousel-container').removeClass('d-none');
            initializeDesignsCarousel();
        } else {
            $('.filter-container').removeClass('d-none');
            $('.carousel-container').addClass('d-none');

        }
    }

    // Run on load and resize
    checkScreenSize();
    $(window).resize(checkScreenSize);
});

function openCartPopup() {
    $('.cart').addClass('cart-open');
}

function closeCartPopup() {
    $('.cart').removeClass('cart-open');
}

$(document).click(function (event) {
    // Check if the closest element to the click is not .cart-container
    if (!$(event.target).closest('.cart').length && $('.cart').hasClass('cart-open')) {
        closeCartPopup();
    }
});


function openSalePopup() {
    $('#salePopup').modal('show');
}

function closeSalePopup() {
    $('#salePopup').modal('hide');
}

function openLoginPopup() {
    $('#loginPopup').modal('show');
}

function closeLoginPopup() {
    $('#loginPopup').modal('hide');
}

function openForgotPasswordPopup() {
    closeLoginPopup();
    $('#forgotPasswordPopup').modal('show');
}

function closeForgotPasswordPopup() {
    $('#forgotPasswordPopup').modal('hide');
}

function goBackToLogin() {
    closeForgotPasswordPopup();
    openLoginPopup();
}

function closeAllSubmenus(params) {
    $('.sub-menu-cont').each(function () {
        $(this).removeClass('opened-submenu');
    })
}



$(document).click(function (event) {
    $('.dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });

    $('.sub-menu-link').each(function () {
        $(this).on("mouseover click", function (e) {
            e.preventDefault();
            closeAllSubmenus();
            var submenu = $(this).closest('.sub-menu-cont');
            submenu.addClass('opened-submenu');
        });
    });

    $('.nd-link').each(function () {
        $(this).on("mouseover click", function (e) {
            e.preventDefault();
            if (!$(this).hasClass('sub-menu-link') && !$(this).closest('.sub-menu').length) {
                closeAllSubmenus();
            }
        })
    });
})
