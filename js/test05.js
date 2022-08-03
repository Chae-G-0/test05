$(function () {
    $(".slide").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(".lensSlide").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        centerMode: true,
        centerPadding: "400px",
        slideToShow: 3,
    });
    console.log("댄다!");

    $(".tabMenu>li>a").on("click", function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $(".tabContent>li").removeClass("on");
        $(".tabContent>li").eq(idx).addClass("on");
        $(".tabMenu>li").removeClass("on");
        $(this).parent().addClass("on");
    });

    const scrollContainer = document.querySelector(".mainPic");

    scrollContainer.addEventListener("wheel", (e) => {
        console.log(scrollContainer.scrollLeft, e.deltaY);
        if (e.deltaY == -100 && scrollContainer.scrollLeft == 0) {
            console.log(e.deltaY == -100);
        } else if (e.deltaY == 100 && scrollContainer.scrollLeft > 3000) {
        } else {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
        }
    });
});
