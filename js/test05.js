$(function () {
    $(".slide").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.lensSlide').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slideToShow: 3,
    });

    $('.tabMenu>>li>a').on('click', function(e){
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.tabContent>li').removeClass('on');
        $('.tabContent>li').eq(idx).addClass('on');
        $('.tabMenu>li').removeClass('on');
        $(this).parent().addClass('on');
    });

});
