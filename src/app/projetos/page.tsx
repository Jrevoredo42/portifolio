'use client'

import { useState } from "react";
import { useStaggerAnimation } from "@/hooks/useAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects } from "@/data/mockData";
import { Project } from "@/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectImages: Record<string, string> = {
  "1": "/valeu-boi-page.png",
  "2": "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&auto=format&fit=crop",
  "3": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  "4": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
  "5": "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop",
  "6": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
};

export default function ProjetosPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const gridRef = useStaggerAnimation<HTMLDivElement>();

  const categories = [
    { label: "Todos", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Full Stack", value: "fullstack" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Projetos"
          subtitle="Alguns dos projetos que desenvolvi ao longo da minha carreira"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter size={20} />
            <span className="font-mono">Filtrar:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              onClick={() => setFilter(category.value)}
              className={filter === category.value ? "" : "border-primary/30 hover:border-primary"}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl overflow-hidden border border-border hover:border-primary/50 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-card/80 border-b border-border/50">
                <ImageWithFallback
                  src={projectImages[project.id] || projectImages["1"]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/40 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 text-primary bg-background/90 border border-primary/30 px-4 py-2 rounded-lg font-mono text-sm shadow-lg shadow-black/50 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={16} />
                    <span>Ver Detalhes</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-b from-card/30 to-card/60">
                <div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-0.5 text-sm uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-mono text-primary mb-2 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 gap-y-6 pt-2 border-t border-border/30">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-primary font-mono font-bold">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
