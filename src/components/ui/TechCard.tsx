import { useRef, useState } from "react";

interface TechCardProps {
  name: string;
  icon: string;
  level?: number;
  description?: string;
}

export function TechCard({ name, icon, level, description }: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative p-6 rounded-xl bg-card border border-border transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            isHovered ? "scale(1.05)" : "scale(1)"
          }`,
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(18, 247, 214, 0.2)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Glare effect */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 0.1 : 0,
            background: `radial-gradient(circle at ${
              ((rotateY + 10) / 20) * 100
            }% ${((rotateX + 10) / 20) * 100}%, rgba(18, 247, 214, 0.8), transparent)`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-3">
          {
            icon.startsWith('/') || icon.startsWith('http') ? (
            <img 
              src={icon} 
              alt={name}
              className="w-12 h-12 object-contain transform transition-transform duration-300 group-hover:scale-110"
            />
            ) : ( 
            <span className="text-5xl transform transition-transform duration-300 group-hover:scale-110">
            {icon}
            </span>
            )}
          <span className="font-mono text-base">{name}</span>
          
          {level !== undefined && (
            <div className="w-full">
              <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-1000"
                  style={{ width: `${level}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-1 block">
                {level}%
              </span>
            </div>
          )}

          {description && (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
