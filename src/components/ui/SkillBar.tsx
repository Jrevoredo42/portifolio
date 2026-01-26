import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
  delay?: number;
}

export function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let progress = 0;
      const increment = level / 50;
      
      const interval = setInterval(() => {
        progress += increment;
        if (progress >= level) {
          setCurrentLevel(level);
          clearInterval(interval);
        } else {
          setCurrentLevel(Math.floor(progress));
        }
      }, 20);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="font-mono text-sm">{name}</span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">{currentLevel}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out relative"
          style={{ width: `${currentLevel}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
