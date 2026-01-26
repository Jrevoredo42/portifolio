'use client'

import { useStaggerAnimation } from "@/hooks/useAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechCard } from "@/components/ui/TechCard";
import { techStack } from "@/data/mockData";

const categoryLabels = {
  languages: "Linguagens",
  frontend: "Front-end",
  backend: "Back-end",
  database: "Banco de Dados",
  devops: "DevOps",
  design: "Design",
};

export function TechStackSection() {
  const gridRef = useStaggerAnimation<HTMLDivElement>();

  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof techStack>);

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Tecnologias"
          subtitle="Ferramentas e tecnologias que utilizo no dia a dia"
        />

        <div className="space-y-12">
          {Object.entries(groupedTech).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-xl font-mono text-primary mb-6">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div
                ref={gridRef}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
              >
                {techs.map((tech) => (
                  <TechCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    level={tech.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}