$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('div.topo').fadeIn();
        } else {
            $('div.topo').fadeOut();
        }
    });

    $('div.topo').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('a.abrirmenu').click(function() {
        $('nav').fadeToggle();
        $(this).find('.fa').toggleClass('fa-caret-down fa-caret-right');
        $('html').off('click').click(function() {
            $('nav').fadeOut();
            $('a.abrirmenu .fa').removeClass('fa-caret-right').addClass('fa-caret-down');
            $('html').off('click');
        });
        return false;
    });
});