import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";

interface refObjectInterface {
    [keys: string]: RefObject<HTMLElement>;
}

export default function (refs?: refObjectInterface) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from("#nav", {
        scrollTrigger: {
            // markers: true,
            trigger: "#home",
            start: "top top",
            endTrigger: ".terminal",
            end: "bottom top",
            scrub: true
        },
        ease: "ease-in-out",
        translateY: -1000,
    })

    const aboutTimeline = gsap.timeline()
    aboutTimeline
        .from('#about .section-title', {
            scrollTrigger: {
                trigger: "#about .section-title",
                start: "center bottom",
                endTrigger: "#about .about-content",
                end: "top center",
                scrub: true
            },
            ease: "ease-in-out",
            translateX: -300,
        })
        .from('#about .portfolio-img', {
            scrollTrigger: {
                trigger: "#about .section-title",
                start: "top bottom",
                endTrigger: "#about .section-title",
                end: "bottom center",
                scrub: true
            },
            ease: "ease-in-out",
            rotate: -360,
            translateX: -500,
        })
        .from('#about .about-content', {
            scrollTrigger: {
                trigger: "#about .section-title",
                start: "top bottom",
                endTrigger: "#about .about-content",
                end: "top center",
                scrub: true
            },
            ease: "ease-in-out",
            translateX: 500,
        })

    // Resume section animations - left column from left, right column from right
    // Scroll-controlled reveal for resume columns (progress tied to scroll)
    gsap.from('#resume .grid > div:nth-child(1) .resume-item', {
        scrollTrigger: {
            trigger: '#resume .grid',
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: true,
        },
        opacity: 0,
        x: -150,
        stagger: 0.12,
        ease: 'power3.out'
    })

    gsap.from('#resume .grid > div:nth-child(2) .resume-item', {
        scrollTrigger: {
            trigger: '#resume .grid',
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: true,
        },
        opacity: 0,
        x: 150,
        stagger: 0.12,
        ease: 'power3.out'
    })
}