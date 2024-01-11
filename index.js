const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixedimg = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
        fixedimg.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixedimg.style.display = "none"
    })


    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixedimg.style.backgroundImage = `url(${image})`
        })
    })
}

//Swiper
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}


function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }
        else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}


function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4000)
}



page4Animation();
swiperAnimation();
menuAnimation();
loaderAnimation();