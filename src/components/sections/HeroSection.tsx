'use client'

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import gsap from "gsap";

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sub-primary font-mono text-lg">Olá, eu sou</p>
              <h1
                ref={titleRef}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Engenheiro de
                <br />
                <span className="text-primary">Software</span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl lg:text-2xl text-muted-foreground max-w-xl"
              >
                Full Stack especializado em criar experiências digitais
                incríveis e soluções tecnológicas inovadoras.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-primary"
              >
                <Link href="/projetos">
                  Ver Projetos
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/sobre">
                  Sobre Mim
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Jrevoredo42"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/joao-revoredo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:devoredo42@email.com"
                className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[300px] lg:h-[400px]">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 h-full w-full">
              <div className="absolute inset-0 " />
              <img
                src="/revoredo-teste.svg"
                alt="Developer workspace"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce mt-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
