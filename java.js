// Navbar Slide-In
gsap.to(".navbar", {
  y: 0,
  duration: 1,
  ease: "power2.out"
});

// Button Pulse
gsap.to(".pulse-btn", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut"
});

// Scroll-triggered Fade-Ins
gsap.utils.toArray(".fade-in").forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    duration: 1,
    y: -20
  });
});

