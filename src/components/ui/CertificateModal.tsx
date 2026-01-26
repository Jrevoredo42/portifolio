'use client'

import { useEffect, useRef } from "react";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Certificate } from "@/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import gsap from "gsap";

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryLabels: Record<string, string> = {
  tech: "Tecnologia & Programação",
  infra: "Infraestrutura & Redes",
  language: "Inglês como Segunda Língua",
  other: "Outros Certificados",
};

export function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
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

  if (!certificate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-card border-primary/30">
        <ScrollArea className="h-full max-h-[90vh]">
          <div className="p-6 lg:p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="text-primary" size={20} />
                    </div>
                    <DialogTitle className="text-2xl lg:text-3xl font-mono gradient-text">
                      {certificate.title}
                    </DialogTitle>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3">
                    <div className="flex items-center gap-1">
                      <Building2 size={16} />
                      <span>{certificate.organization}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{certificate.date}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                      {categoryLabels[certificate.category] || certificate.category}
                    </span>
                  </div>
                </div>
              </div>
            </DialogHeader>

            <div ref={contentRef} className="space-y-6">
              {/* Certificate Image */}
              <div className="relative rounded-xl overflow-hidden border border-border bg-secondary">
                <ImageWithFallback
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto object-contain max-h-[60vh]"
                />
              </div>

              {/* Description */}
              {certificate.description && (
                <div>
                  <h3 className="text-lg font-mono text-primary mb-2">Descrição</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              )}

              {/* Action Button */}
              {certificate.url && (
                <div className="flex justify-center pt-2">
                  <Button asChild className="gap-2">
                    <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      Ver Certificado Original
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
