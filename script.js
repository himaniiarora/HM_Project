// ---------- NAVBAR SCROLL EFFECT ----------
window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// ---------- GSAP ANIMATIONS ----------
gsap.registerPlugin(ScrollTrigger);

// Navbar animation (appears darker when scrolling)
gsap.to("#nav", {
    backgroundColor: "rgba(0, 87, 183, 0.9)",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

// Page background color change
gsap.to("#main", {
    backgroundColor: "#0a192f",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

// About section animation
gsap.from("#about-us img, #about-us-in", {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 80%",
        end: "top 65%",
        scrub: 1,
    },
});

// Card animation
gsap.from(".card", {
    scale: 0.85,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 75%",
        end: "top 60%",
        scrub: 1,
    },
});

// Quote icons animation
gsap.from("#colon1", {
    y: -70,
    x: -70,
    opacity: 0.5,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 3,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    opacity: 0.5,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 3,
    },
});

// Page 4 heading animation
gsap.from("#page4 h1", {
    y: 50,
    opacity: 0.7,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    },
});
