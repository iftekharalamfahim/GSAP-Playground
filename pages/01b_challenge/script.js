gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,

  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.8)", //glow effect
    });
  },
});
