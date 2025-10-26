import gsap from "gsap";

/* 
power easing describe how quickly the animation accelerates or decelerates.

They come in four variations:

power1 (gentle)
power2 (medium)
power3 (strong)
power4 (aggressive)
*/

gsap.to(".btn", {
  y: -50,
  duration: 1.4,
  ease: "power4.out",
});

gsap.from(".toast", {
  x: -300,
  duration: 1.2,
  ease: "power1.in",
});

gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
});
