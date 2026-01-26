'use client'

import { useStaggerAnimation } from "@/hooks/useAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experiences } from "@/data/mockData";
import { Briefcase, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  const timelineRef = useStaggerAnimation<HTMLDivElement>();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Experiência"
          subtitle="Minha trajetória profissional e conquistas"
        />

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10">
                  <Briefcase size={16} />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-mono text-primary mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-lg mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-foreground border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-mono text-primary">Conquistas:</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
