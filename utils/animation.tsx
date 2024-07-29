import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";

interface refObjectInterface {
    [keys: string]: RefObject<HTMLElement>;
}

export default function (refs: refObjectInterface) {
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
}