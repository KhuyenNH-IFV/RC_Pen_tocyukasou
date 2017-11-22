// Effect light gold
function shinyGold() {
    $('.gold .shiny').animate({
        left: '+=400px'
    }, 3000).animate({
        left: '20px'
    }, 0);
    setTimeout('shinyGold()', 1000);
}
setTimeout('shinyGold()', 500);

// Effect light button
function shinyButton() {
    $('.ctrbtn .shiny').animate({
        left: '+=850px'
    }, 3000).animate({
        left: '20px'
    }, 0);
    setTimeout('shinyButton()', 1000);
}
setTimeout('shinyButton()', 500);

// Scroll back to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('#toTop').fadeIn(500);
    } else {
        $('#toTop').fadeOut(500);
    }
});

$('#toTop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, duration);
    return false;
});

// Fade scroll
window.onload = function() {
    $(window).scroll(function() {
        $('.fadeDown, .fadeLeft').each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 300) {
                $(this).addClass('ef-slide');
            }
        });
    }).trigger("scroll");
}

$(function() {
    // Hover wrap images
    $('img').hover(
        function() {
            $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
        },
        function() {
            $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
    );
});
