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
let client = document.querySelector("#client1");
window.onscroll = () => {
    if (isScrolledIntoView(aboutImg)) {
        aboutImg.classList.add("scale-up-center");
    }
    if (isScrolledIntoView(aboutText)) {
        aboutText.classList.add("slide-in-top");
    }
    if (isScrolledIntoView(services[0]) && screen.width > 1000) {
        services[0].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[1]) && screen.width > 1000) {
        services[1].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[2]) && screen.width > 1000) {
        services[2].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[3]) && screen.width > 1000) {
        services[3].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[4]) && screen.width > 1000) {
        services[4].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(services[5]) && screen.width > 1000) {
        services[5].classList.add("puff-in-top");
    }
    if (isScrolledIntoView(client)) {
        document.querySelector("#client1").classList.add("scale-up-center");
        document.querySelector("#client2").classList.add("scale-up-center");
        document.querySelector("#client3").classList.add("scale-up-center");
        document.querySelector("#client4").classList.add("scale-up-center");
    }
}


$(document).ready(function () {
    $(window).scroll(function() {
        var Scroll = $(window).scrollTop() + 1;
        var homeSection = $('#home').offset().top + 1;
        var aboutSection = $('#about').offset().top;
        var serviceSection = $('#services').offset().top;
        var portfolioSection = $('#portfolio').offset().top;
        var teamSection = $('#team').offset().top;


        if (Scroll >= homeSection && Scroll < aboutSection) {
            $("#m1").addClass("current-menu-item");
            $("#m2").removeClass("current-menu-item");
            $("#m3").removeClass("current-menu-item");
            $("#m4").removeClass("current-menu-item");
        } else if (Scroll >= aboutSection && Scroll < serviceSection) {
            $("#m2").addClass("current-menu-item");
            $("#m1").removeClass("current-menu-item");
            $("#m3").removeClass("current-menu-item");
            $("#m4").removeClass("current-menu-item");
        } else if (Scroll >= serviceSection && Scroll < portfolioSection) {
            $("#m3").addClass("current-menu-item");
            $("#m1").removeClass("current-menu-item");
            $("#m2").removeClass("current-menu-item");
            $("#m4").removeClass("current-menu-item");
        } else if (Scroll >= portfolioSection && Scroll < teamSection) {
            $("#m4").addClass("current-menu-item");
            $("#m1").removeClass("current-menu-item");
            $("#m2").removeClass("current-menu-item");
            $("#m3").removeClass("current-menu-item");
        }
    })
});

document.querySelector(".team-img-1").addEventListener("mouseover", () => {
    document.querySelector("#team-1-contact").style.display = "flex";
})
document.querySelector(".team-img-1").addEventListener("mouseout", () => {
    document.querySelector("#team-1-contact").style.display = "none";
})

document.querySelector(".team-img-2").addEventListener("mouseover", () => {
    document.querySelector("#team-2-contact").style.display = "flex";
})
document.querySelector(".team-img-2").addEventListener("mouseout", () => {
    document.querySelector("#team-2-contact").style.display = "none";
})

document.querySelector(".team-img-3").addEventListener("mouseover", () => {
    document.querySelector("#team-3-contact").style.display = "flex";
})
document.querySelector(".team-img-3").addEventListener("mouseout", () => {
    document.querySelector("#team-3-contact").style.display = "none";
})