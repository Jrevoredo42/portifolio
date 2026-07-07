'use client'

import { useRevealAnimation } from "@/hooks/useAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function AboutSection() {
  const contentRef = useRevealAnimation<HTMLDivElement>();

  return (
    <section className="py-24">
      <div className="text-primary container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Sobre Mim"
          subtitle="Conheça um pouco mais sobre minha jornada e experiência"
        />

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30">
              <ImageWithFallback
                src="/eu-apresentando.jpg"
                alt="Software Engineer"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2 mt-12 lg:mt-0">
            <h3 className="text-2xl lg:text-3xl font-mono text-primary">
              Engenheiro de Software Full Stack
            </h3>
            <div className="space-y-4 text-foreground">
              <p>
                Sou um desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência
                em desenvolvimento de software. Especializado em criar soluções escaláveis e
                performáticas usando tecnologias modernas do mercado.
              </p>
              <p>
                Minha jornada começou com curiosidade sobre como as coisas funcionam, o que me
                levou a explorar programação, desenvolvimento web, mobile e muito mais. Hoje,
                trabalho com stacks completas, desde o front-end até o back-end e infraestrutura.
              </p>
              <p>
                Além da programação me desempenho como Pesquisador e produtor Cultural,
                atuando com inovação tecnológica em projetos culturais.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="text-3xl font-mono text-primary mb-1">5+</h4>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="text-xl font-bold mb-1">Desenvolvimento ponta-a-ponta</h4>
                <p className="text-sm text-muted-foreground"> Diversos projetos Concluídos</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="text-3xl font-mono text-primary mb-1">15+</h4>
                <p className="text-sm text-muted-foreground">Certificados</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="text-3xl font-mono text-primary mb-1">20+</h4>
                <p className="text-sm text-muted-foreground">Tecnologias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
