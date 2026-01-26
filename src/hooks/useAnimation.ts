import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useRevealAnimation<T extends HTMLElement>(
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { 
          opacity: 0, 
          y: options?.y ?? 50,
          x: options?.x ?? 0,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: options?.duration ?? 0.8,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options?.delay, options?.duration, options?.y, options?.x]);

  return ref;
}

export function useStaggerAnimation<T extends HTMLElement>(
  childSelector: string = "> *"
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Get children directly using the element's children property if selector is "> *"
      const targets = childSelector === "> *" 
        ? Array.from(ref.current!.children)
        : ref.current!.querySelectorAll(childSelector);
      
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [childSelector]);

  return ref;
}

export function useHoverScale<T extends HTMLElement>(scale: number = 1.05) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [scale]);

  return ref;
}

export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return ref;
}