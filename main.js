$("#menu-bars").click(function () {
    $(".nav").slideToggle("fast", "linear");
});
if (screen.width > 1000) {
    document.querySelector("#animation1").classList.add("scale-up-center");
    document.querySelector("#animation2").classList.add("scale-up-center");
}