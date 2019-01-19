function menuSlide() {
    $(".nav").slideToggle("fast", "linear");
}
$("#menu-bars").click(menuSlide);

if (screen.width < 1000) {
    $("#m1").click(menuSlide);
    $("#m2").click(menuSlide);
    $("#m3").click(menuSlide);
    $("#m4").click(menuSlide);
    $("#m5").click(menuSlide);
    $("#m6").click(menuSlide);
}