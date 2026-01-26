import { useRevealAnimation } from "@/hooks/useAnimation";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  const ref = useRevealAnimation<HTMLDivElement>();

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div ref={ref} className={`flex flex-col gap-4 mb-12 ${alignClasses[align]}`}>
      <div className="flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1" />
        <h2 className="text-3xl lg:text-5xl font-mono gradient-text whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1" />
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
