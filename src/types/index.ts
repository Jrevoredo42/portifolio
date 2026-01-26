export interface TechStack {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "languages" | "database" | "devops" | "design";
  level?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "languages" | "fullstack" | "design";
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges?: string;
  results?: string;
  year: number;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  category: "tech" | "infra" | "language" | "other";
  url?: string;
  description?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
