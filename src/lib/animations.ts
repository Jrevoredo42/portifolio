import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Presets de animação reutilizáveis
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8,
  ease: "power3.out",
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: "power3.out",
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: "power3.out",
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  duration: 0.6,
  ease: "power2.out",
};

export const staggerChildren = {
  stagger: 0.15,
  ease: "power2.out",
};

export const hoverScale = {
  scale: 1.05,
  duration: 0.3,
  ease: "power2.out",
};

// Animação de entrada de página
export const pageTransition = {
  enter: (el: Element) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  },
  exit: (el: Element) => {
    gsap.to(el, { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" });
  },
};

// Animação de reveal com scroll
export const scrollReveal = (
  element: Element,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      ...options,
    }
  );
};

// Animação de parallax
export const parallaxEffect = (
  element: Element,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Animação de texto character by character
export const splitTextAnimation = (
  element: Element,
  options?: gsap.TweenVars
) => {
  const text = element.textContent || "";
  element.innerHTML = text
    .split("")
    .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
  
  const chars = element.querySelectorAll("span");
  
  return gsap.fromTo(
    chars,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out",
      ...options,
    }
  );
};

// Limpar todas as animações
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.globalTimeline.clear();
};
