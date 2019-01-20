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


function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;;
    return isVisible;
}

let aboutImg = document.querySelector("#about-img");
let aboutText = document.querySelector(".about-text");
let services = document.querySelectorAll(".service");
window.onscroll = () => {
    if (isScrolledIntoView(aboutImg)) {
        aboutImg.classList.add("scale-up-center");
    }
    if (isScrolledIntoView(aboutText)) {
        aboutText.classList.add("slide-in-top");
    }
    if (isScrolledIntoView(services[0])) {
        services[0].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[1])) {
        services[1].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[2])) {
        services[2].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[3])) {
        services[3].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[4])) {
        services[4].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[5])) {
        services[5].classList.add("puff-in-top");
    }
}
