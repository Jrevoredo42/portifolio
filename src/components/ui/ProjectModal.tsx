import { useEffect, useRef } from "react";
import { X, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import gsap from "gsap";

const projectModalImages: Record<string, string> = {
  "1": "/valeu-boi-capa.png",
  "2": "/project-atmosfera-modal.png",
  "3": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  "4": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
  "5": "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop",
  "6": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-card border-primary/30">
        <ScrollArea className="h-full max-h-[90vh]">
          <div className="p-6 lg:p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <DialogTitle className="text-3xl font-mono gradient-text">
                      {project.title}
                    </DialogTitle>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>

              </div>
            </DialogHeader>

            <div ref={contentRef} className="space-y-6">
              {/* Project Image */}
              <div className="relative rounded-xl overflow-hidden border border-border">
                <ImageWithFallback
                  src={projectModalImages[project.id] || "/valeu-boi-capa.png"}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <Button asChild className="gap-2">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      Ver Projeto
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" className="gap-2 border-primary">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      Código Fonte
                    </a>
                  </Button>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-mono text-primary mb-3">Sobre o Projeto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-mono text-primary mb-3">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-mono text-primary mb-3">Funcionalidades Principais</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="text-xl font-mono text-primary mb-3">Desafios & Soluções</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div>
                  <h3 className="text-xl font-mono text-primary mb-3">Resultados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.results}
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
