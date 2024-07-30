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
}