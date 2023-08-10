// scrolltriggger
function init() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init();
// GSAP timeline with scrollTrigger-1
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".name-1,name-2",
        scroller: ".main",
        // markers: true,
        start: "top 20%",
        end: "top 30",
        scrub: 3
    }
})

tl.to(".name-1", {
    x: -100,
    fontSize: "15vw",
    letterSpacing: "5rem",
    color: "rgb(15, 13, 13)"
}, "anim")
tl.to(".name-2", {
    x: 100,
    fontSize: "15vw",
    letterSpacing: "5rem",
    color: "rgb(15, 13, 13)"
}, "anim")
tl.to(".name-gig", {
    opacity: 0
}, "anim")
tl.to(".page-1 video", {
    width: "95%"
}, "anim")


// GSAP timeline with scrollTrigger-2
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page-2",
        scroller: ".main",
        // markers: true,
        start: "top 30%",
        end: "top 60%",
        scrub: 5
    }
});

tl2.to(".page-2", {
    backgroundColor: "#fff"
}, "pro");

tl2.to(".page-1", {
    backgroundColor: "#fff"
}, "pro");


// GSAP timeline with scrollTrigger-3
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page-3,page-2",
        scroller: ".main",
        // markers: true,
        start: "top 40%",
        end: "bottom 70%",
        scrub: 5
    }
});

tl3.to(".page-3", {
    opacity: "1"
}, "ppp");
tl3.to(".page-2 h2", {
    fontSize: "8vw",
    letterSpacing: "2rem"
}, "ppp")
tl3.to(".page-3 h1", {
    opacity: 1
}, "ppp")
tl3.to(".name-area", {
    x: -100,
    fontSize: "8vw"
}, "ppp")
tl3.to(".name-expert", {
    x: 200,
    fontSize: "8vw"
}, "ppp")





// SPAN HELLO GREETING PAGE
const hello_arr = ["Hello",
    "Hola", "स्वागत हे", "Hallo",
    "Bonjour", "Ciao", "你好", "G'day",
    "Guten tag", "Ola", "नमस्ते"];
window.onload = function () {
    const spanHelloContainer = document.querySelector(".span-hello-container");
    const spanHello = document.querySelector(".span-hello");

    let currentIndex = 0;

    function displayNextHello() {
        if (currentIndex < hello_arr.length) {
            spanHello.textContent = hello_arr[currentIndex];
            currentIndex++;
            setTimeout(displayNextHello, 220);
        } else {
            spanHelloContainer.classList.add("translate-animation");
        }
    }

    displayNextHello();
};


// DEFINE ELEMENTS
var main = document.querySelector(".main");
var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.clientX + 5,
        y: dets.clientY + 5,
        duration: .7,
        ease: Expo
    })
});


// lerp

const lerp = (x, y, a) => x * (1 - a) + y * a;

var herotonav = document.querySelector(".hero-to-nav");
herotonav.addEventListener("mousemove", function (dets) {
    var dims = herotonav.getBoundingClientRect();
    var xstart = dims.x;
    var xend = xstart + dims.width;

    var zerone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    var dims2 = herotonav.getBoundingClientRect();
    var ystart = dims2.y;
    var yend = ystart + dims2.height;

    var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

    gsap.to(this, {
        cursor: "pointer",
        x: lerp(-30, 30, zerone),
        y: lerp(-30, 30, zerotwo),
        duration: 0.3
    });
    gsap.to(".hero-nav-a", {
        x: lerp(-20, 20, zerone),
        y: lerp(-20, 20, zerotwo),
        fontSize: "1.5rem"
    });
});
herotonav.addEventListener("mouseleave", function () {
    gsap.to(this, {
        x: 0,
        y: 0,
        duration: 0.3
    });
    gsap.to(".hero-nav-a", {
        x: 0,
        y: 0,
        fontSize: "1rem"
    });
});

const nava = document.querySelectorAll(".nava a");
nava.forEach((a) => {
    a.addEventListener("mousemove", function (dets) {

        var dims = a.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);


        var dimsy = a.getBoundingClientRect();
        var ystart = dimsy.y;
        var yend = ystart + dimsy.height;

        var zeroOney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);


        gsap.to(cursor, {
            scale: 2,
            opacity: 1
        })
        gsap.to(this, {
            color: "#fff",
            x: lerp(-20, 20, zeroOne),
            y: lerp(-20, 20, zeroOney),
            duration: .3
        })
    })
    a.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            duration: .5,
            ease: Expo.easeInOut,
            opacity: 1
        })
        gsap.to(this, {
            color: "silver",
            x: 0,
            y: 0,
            duration: .3
        })
    })
})

const video = document.getElementById("mainvideo");
video.addEventListener("click", function () {
    video.muted = !video.muted;
    cursor.textContent = video.muted ? "Sound Off" : "Sound On";
});
video.addEventListener("mouseenter", () => {
    cursor.textContent = video.muted ? "Sound Off" : "Sound On";
    cursor.style.width = "100px";
    cursor.style.borderRadius = "0";
    cursor.style.textAlign = "center";
    cursor.style.fontSize = "1rem";
    cursor.style.fontWeight = "800";
});
video.addEventListener("mouseleave", () => {
    cursor.textContent = "";
    cursor.style.width = "30px";
    cursor.style.borderRadius = "50%";
    cursor.style.textAlign = "none";
    cursor.style.fontSize = "0";
    cursor.style.fontWeight = "0";
});

// project box
var boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    var att = box.getAttribute("data-image");

    var h3 = box.querySelector("h3");

    h3.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            mixBlendMode: "normal",
            width: "630px",
            height: "370px",
            borderRadius: "0",
            backgroundImage: `url(${att})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            duration: 0.5
        });
        gsap.to(cursor, {
            x: dets.clientX + 50,
            y: dets.clientY + 50,
            duration: .5,
            ease: Expo
        });
    });

    h3.addEventListener("mouseleave", (dets) => {
        gsap.to(cursor, {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundImage: "none",
            mixBlendMode: "difference",
            duration: 0.5
        });
        gsap.to(cursor, {
            x: dets.clientX + 5,
            y: dets.clientY + 5,
            duration: .5,
            ease: Expo
        });
    });
});

var linktoweb = document.querySelectorAll(".linktoweb");
linktoweb.forEach((a) => {
    a.addEventListener("mousemove", function (dets) {

        var dims = a.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);


        var dimsy = a.getBoundingClientRect();
        var ystart = dimsy.y;
        var yend = ystart + dimsy.height;

        var zeroOney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

        gsap.to(this, {
            color: "#111",
            x: lerp(-30, 30, zeroOne),
            y: lerp(-30, 30, zeroOney),
            duration: .3
        })
    })
    a.addEventListener("mouseleave", function () {
        gsap.to(this, {
            color: "rgb(15,13,13)",
            x: 0,
            y: 0,
            duration: .3
        })
    })
})

// SWIPER
var swipertext = document.querySelectorAll(".swipe-text h2")
swipertext.forEach((a) => {
    a.addEventListener("mousemove", function (dets) {

        var dims = a.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);


        var dimsy = a.getBoundingClientRect();
        var ystart = dimsy.y;
        var yend = ystart + dimsy.height;

        var zeroOney = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

        gsap.to(this, {
            x: lerp(-20, 20, zeroOne),
            y: lerp(-20, 20, zeroOney),
            duration: .3
        })
    })
    a.addEventListener("mouseleave", function () {
        gsap.to(this, {
            x: 0,
            y: 0,
            duration: .3
        })
    })
})
// social
const sociallinks = document.querySelectorAll(".social-cont a");
const icons = document.querySelectorAll(".social-cont i");

sociallinks.forEach((a, index) => {
    a.addEventListener("mousemove", function (dets) {
        var dims = a.getBoundingClientRect();
        var xstart = dims.x;
        var xend = xstart + dims.width;

        var zerone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

        var dims2 = a.getBoundingClientRect();
        var ystart = dims2.y;
        var yend = ystart + dims2.height;

        var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

        gsap.to(this, {
            cursor: "pointer",
            x: lerp(-40, 40, zerone),
            y: lerp(-40, 40, zerotwo),
            duration: 0.4,
            scale:1.2,
            boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 8px 0px"
        });

        gsap.to(icons[index], {
            x: lerp(-20, 20, zerone),
            y: lerp(-20, 20, zerotwo),
            scale:1.5
        });
    });

    a.addEventListener("mouseleave", function () {
        gsap.to(this, {
            x: 0,
            y: 0,
            duration: 0.4,
            boxShadow: "none",
            scale:1
        });

        gsap.to(icons[index], {
            x: 0,
            y: 0,
            scale:1
        });
    });
});
