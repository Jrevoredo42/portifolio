import { useEffect, useRef, useState } from "react";
import { useRevealAnimation } from "@/hooks/useAnimation";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRevealAnimation<HTMLSpanElement>();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = Date.now();
          const startValue = 0;
          
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            const easeOutQuad = (t: number) => t * (2 - t);
            const currentValue = Math.floor(
              startValue + (end - startValue) * easeOutQuad(progress)
            );
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
