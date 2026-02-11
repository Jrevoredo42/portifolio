'use client'

import { useRef, useEffect, useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certificates } from "@/data/mockData";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CertificateModal } from "@/components/ui/CertificateModal";
import { Certificate } from "@/types";
import gsap from "gsap";

const categoryLabels = {
  infra: "Infraestrutura & Redes",
  language: "Inglês como Segunda Língua",
  other: "Outros Certificados",
  frontend: "Desenvolvimento Frontend",
  backend: "Desenvolvimento Backend",
};

const certificateImages: Record<string, string> = {
  tech: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop",
  infra: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop",
  language: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop",
  other: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop",
  frontend: "/frontend.png",
  backend: "/backend.png",
};

export default function CertificadosPage() {
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  useEffect(() => {
    // Animate on mount
    gsap.fromTo(
      ".certificate-category",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const scroll = (category: string, direction: "left" | "right") => {
    const container = scrollRefs.current[category];
    if (!container) return;

    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const groupedCertificates = certificates.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certificates>);

  return (
    <div className="w-full pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Certificados"
          subtitle="Certificações e cursos que validam minha experiência e conhecimento"
        />
          {/*<div className="p-6 rounded-xl bg-card border border-border text-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
              <Award className="text-primary" size={24} />
            </div>
            <h4 className="text-3xl font-mono text-primary mb-1">{certificates.length}</h4>
            <p className="text-sm text-muted-foreground">Total de Certificados</p>
          </div>
        */}
        {/* Certificate Categories */}
        <div className="space-y-25 mt-12">
          {Object.entries(groupedCertificates).map(([category, certs]) => (
            <div key={category} className="certificate-category">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-mono text-primary">
                  {categoryLabels[category as keyof typeof categoryLabels] || category}
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll(category, "left")}
                    className="border-primary/30 hover:border-primary"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll(category, "right")}
                    className="border-primary/30 hover:border-primary"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>

              {/* Horizontal Scroll Container */}
              <div
                ref={(el) => { scrollRefs.current[category] = el }}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {certs.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex-shrink-0 w-80 snap-start group cursor-pointer"
                    onClick={() => handleCertificateClick(cert)}
                  >
                    <div className="h-full rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card">
                      {/* Certificate Image */}
                      <div className="relative h-48 overflow-hidden bg-secondary">
                        <ImageWithFallback
                          src={certificateImages[cert.category]}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        
                        {/* Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                            <Award className="text-primary-foreground" size={20} />
                          </div>
                        </div>
                      </div>

                      {/* Certificate Info */}
                      <div className="p-6 space-y-3">
                        <h4 className="font-mono text-primary line-clamp-2 min-h-[3rem]">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.organization}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <span className="text-sm text-muted-foreground">{cert.date}</span>
                          {cert.url && (
                            <Button
                              asChild
                              variant="ghost"
                              size="sm"
                              className="text-primary hover:text-primary hover:bg-primary/10"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Ver Certificado
                              </a>
                            </Button>
                          )}
                        </div>
                        {cert.description && (
                          <p className="text-xs text-muted-foreground line-clamp-3 pt-2">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
