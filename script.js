$(document).ready(function() {
    // Smooth scroll for "Shop Now" button
    $("#shop-now").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#products").offset().top
        }, 1000);
    });

    // Add to Cart button functionality
    $(".add-to-cart").on('click', function() {
        var $button = $(this);
        var originalText = $button.text();
        
        // Change button text and style
        $button.addClass('added');
        
        // Reset button after 2 seconds
        setTimeout(function() {
            $button.removeClass('added');
        }, 2000);
    });

    // Additional animations for product cards on scroll
    $(window).scroll(function() {
        $('.product-card').each(function() {
            var cardTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > cardTop + 50) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });

    // Initialize animations for visible elements
    $(window).trigger('scroll');
});
