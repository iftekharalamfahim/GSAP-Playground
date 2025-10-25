import gsap from "gsap";

gsap.to(".box", {
  //   x: 200, // moves 200px to the right, with minus moves 200 px to the left
  //   y: -200, // moves 200px to down, with minus moves 200px to up
  opacity: 1,
  rotation: 180,
  //   rotationX: 360,
  //   rotationY: 360,
  background: "#3C6399",
  //   borderRadius: "50%",
  scale: 1.25, //size of the object
  //   scaleX: 1.25,
  //   scaleY: 1.25,
  duration: 2, // length of the animation
  //   delay: 0.5, // time to wait before the animation starts
  ease: "power1.inOut", // how gradually the animation will show up, mainly after effect
  repeat: 2, // how many time the animation will repeat
  //   repeat: -1, //for infinite animations
  yoyo: true, // take back the animations like yoyo
  //   repeatDelay: 2, // delay the animation of the yoyo effect of designated seconds
  //   paused: true, // will pause all the animations
  //   stagger: 1, // for multiple box or objects it makes the animation timer f.e. here 1s then the next box....
});
