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
  "1": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
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
              className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-card">
                <ImageWithFallback
                  src={projectImages[project.id] || projectImages["1"]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 text-primary">
                    <ExternalLink size={24} />
                    <span className="font-mono">Ver Detalhes</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 font-mono capitalize">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-mono text-primary mb-2 group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-primary font-mono">
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
