import { Project, Certificate, TechStack, WorkExperience } from "@/types";

export const techStack: TechStack[] = [
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "frontend" },
  { name: "Vite", icon: "/icons/Vitejs.svg", category: "frontend" },
  { name: "Authjs", icon: "/icons/authjs.svg", category: "frontend" },
  { name: "Java", icon: "/icons/java.svg", category: "languages" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "languages" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "languages" },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend" },
  { name: "NestJS", icon: "/icons/nestjs.svg", category: "backend" },
  { name: "Prisma", icon: "/icons/prisma.svg", category: "backend" },
  { name: "Next.js", icon: "/icons/next.svg", category: "frontend" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg", category: "backend" },
  { name: "Fastify", icon: "/icons/fastify.svg", category: "backend" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "backend" },
  { name: "Linux", icon: "/icons/linux.svg", category: "devops" },
  { name: "Docker", icon: "/icons/docker.svg", category: "devops" },
  { name: "Docker Compose", icon: "/icons/compose.svg", category: "devops" },
  { name: "Kubernetes", icon: "/icons/k8s.svg", category: "devops" },
  { name: "GCP", icon: "/icons/gcp.svg", category: "devops" },
  { name: "AWS", icon: "/icons/aws.svg", category: "devops" },
  { name: "Terraform", icon: "/icons/terraform.svg", category: "devops" },
  { name: "Github Actions", icon: "/icons/actions.svg", category: "devops" },
  { name: "Zabbix", icon: "/icons/zabbix.svg", category: "devops" },
  { name: "Grafana", icon: "/icons/grafana.svg", category: "devops" },
  { name: "Figma", icon: "/icons/figma.svg", category: "frontend" },
];

export const projects: Project[] = [

  {
    id: "1",
    title: "Valeu boi - Plataforma de Compra de senhas para Eventos de Vaquejada",
    description: "Plataforma que gerencia vendas de senhas para competições nos eventos de vaquejada.",
    longDescription: "O sistema permite que vaqueiros (clientes) comprem senhas para participar de competições de vaquejada, e que administradores gerenciem eventos, categorias e senhas disponíveis.",
    image: "public/valeu-boi-page.png",
    technologies: ["React", "Node.js", "Asaas", "Next.js", "Tailwind CSS", "Supabase", "Figma", "GSAP", "Nginx", "Github Actions", "Docker", "CI/CD", "Docker Compose", "Radix"],
    category: "fullstack",
    features: [
      "Sistema de autenticação e autorização com NextAuth",
      "Catálogo de eventos e categorias de vaquejada",
      "Carrinho de compras e integração com gateway de pagamento Asaas",
      "Formas de pagamento variadas, incluindo cartão de crédito, boleto e PIX",
      "Painel de usuário para acompanhamento de compras e histórico",
      "Dashboard administrativo para gestão de eventos, categorias e senhas",
      "Geração de Relatórios de vendas e Eventos",
      "Design responsivo e interativo com Tailwind CSS e GSAP",
      "Deploy automatizado com Docker, Nginx, Github Actions, e VPC",
    ],
    challenges: "Gerenciamento de estados complexos, com integração de gateway de pagamento, e implementação de um sistema robusto ponta a ponta integrando frontend, backend, e infraestrutura individualmente.",
    results: "Projeto totalmente funcional, com MVP validado por usuários reais e pelo próprio cliente, com feedbacks positivos e melhorias contínuas implementadas.",
    year: 2026,

    demoUrl: "https://valeuboi.com"
  }
];

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Engenharia de Plataforma",
    date: "2025",
    organization: "Cesar School",
    image: "/certificados/engenharia-de-plataforma.png",
    category: "infra",
    description: "Especialização intensiva em Engenharia de Plataforma, com foco em provisionamento, automação e gestão de ambientes e estruturas corporativas de Redes e DevOps."
  },
  {
    id: "2",
    title: "Agilidade",
    date: "2025",
    organization: "Cesar School",
    image: "/certificados/agilidade.png",
    category: "other",
    description: "Metodologias ágeis aplicadas à engenharia de plataforma e DevOps, com foco em práticas de Scrum, Kanban e entrega contínua."
  },
  {
    id: "3",
    title: "CI/CD",
    date: "2025",
    organization: "Cesar School",
    image: "/certificados/ci-cd.png",
    category: "infra",
    description: "Integração e entrega contínua com pipelines automatizados, ferramentas de CI/CD e boas práticas de deploy."
  },
  {
    id: "4",
    title: "Cultura DevOps",
    date: "2025",
    organization: "Cesar School",
    image: "/certificados/cultura-devops.png",
    category: "infra",
    description: "Fundamentos da cultura DevOps, colaboração entre equipes de desenvolvimento e operações, e práticas de automação."
  },
  {
    id: "5",
    title: "Fundamentos de Node.js",
    date: "2026",
    organization: "Rocketseat",
    image: "/certificados/fundamentos-node.png",
    category: "backend",
    description: "Fundamentos do desenvolvimento backend com Node.js, incluindo APIs RESTful, módulos e boas práticas de programação."
  },
  {
    id: "6",
    title: "Infraestrutura e Virtualização",
    date: "2025",
    organization: "Cesar School",
    image: "/certificados/infraestrutura-virtualizacao.png",
    category: "infra",
    description: "Conceitos de infraestrutura de TI, virtualização, containers e orquestração com Docker e Kubernetes."
  },
  {
    id: "7",
    title: "Monitoramento e Observabilidade",
    date: "2025",
    organization: "Cesar School",
    image: "/certificados/monitoramento-observabilidade.png",
    category: "infra",
    description: "Técnicas de monitoramento, logging, métricas e observabilidade em ambientes de produção com ferramentas como Grafana, Prometheus e Zabbix."
  },
  {
    id: "8",
    title: "Redes de Computadores",
    date: "2025",
    organization: "Cesar School",
    image: "/certificados/redes-de-computadores.png",
    category: "infra",
    description: "Fundamentos de redes de computadores, protocolos TCP/IP, configuração de redes e segurança de infraestrutura."
  },
  {
    id: "9",
    title: "Sauter University",
    date: "2024",
    organization: "Sauter Digital",
    image: "/certificados/sauter-university.png",
    category: "infra",
    description: "Programa de capacitação interna em tecnologias de infraestrutura, cloud computing e práticas DevOps."
  },
  {
    id: "10",
    title: "Fundamentos de React",
    date: "2026",
    organization: "RocketSeat",
    image: "/certificados/fundamentos-react.png",
    category: "frontend",
    description: "Curso introdutório ao React, abordando conceitos fundamentais da ferramenta e boas práticas de desenvolvimento atuais."
  },
];

export const experiences: WorkExperience[] = [
  {
    id: "1",
    company: "Instituto Federal de Educação, Ciência e Tecnologia",
    position: "Técnico em Informática",
    period: "2017-2022",
    description: "Formação técnica com desenvolvimento de sistemas, oque me deu uma ampla visão da área e das tecnologias que venho me desempenhando.",
    technologies: ["Java", "OO", "JavaScript", "React", "Node.js", "PostgreSQL", "Docker", "Linux", "Github", "Gerenciamento de projetos"],
    achievements: [
      "Ministrou workshops de programação frontend para iniciantes",
      "Desenvolveu projetos de pesquisa e extensão acadêmica",
      "Desenvolvimento em patterns de projeto e boas práticas de codificação"
    ]
  },
  {
    id: "2",
    company: "Instituto Federal de Educação, Ciência e Tecnologia",
    position: "Tecnologo em Análise e Desenvolvimento de Sistemas",
    period: "2023 - atual",
    description: "Bases e aprofundamento na área de desenvolvimento de sistemas, com foco em boas práticas, metodologias ágeis e tecnologias modernas.",
    technologies: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Jest", "Figma"],
    achievements: [
      "Desenvolveu Projetos de Portifólio Profissional",
      "Se aprofundou em design responsivo e acessibilidade web",
      "implementou técnicas de arquitetura limpa"
    ]
  },
  {
    id: "3",
    company: "Sauter Digital",
    position: "Estagiário DevOps",
    period: "2023-2025",
    description: "Atuou em diversos projetos de infraestrutura em nuvem, automação de deploys, monitoramento de sistemas e gestão de ambientes. Todas as atividades em comunicação direta com o cliente e com foco em resolução de problemas.",
    technologies: ["GCP", "AWS", "Docker", "Kubernetes", "Terraform", "Linux", "Zabbix", "Grafana", "CI/CD", "GitHub Actions"],
    achievements: [
      "Criação e gestão de redes, ambientes em nuvem e servidores",
      "Atuou em projetos de React e Node.js como desenvolvedor",
      "Implementou pipelines de CI/CD automatizados",
      "Monitoramento proativo"
    ]
  },
  {
    id: "4",
    company: "Cesar School",
    position: "Aceleração em Engenharia de Plataforma",
    period: "2025",
    description: "Especialização intensiva Engenharia de Plataforma, com foco em provisionamento, automação e gestão de ambientes e estruturas corporativas de Redes e DevOps, com ênfase em aprendizados e problemas reais com profissionais do mercado.",
    technologies: ["AWS", "Docker", "Docker Compose", "Kubernetes", "Helm", "Terraform", "Linux", "CI/CD", "GitHub Actions", "Monitoramento", "Redes"],
    achievements: [
      "Desenvolveu ambientes escaláveis com tecnologias atuais",
      "mentorias de soft skills e práticas de mercado",
      "Colaborou em projetos reais e fundamentais para o desenvolvimento profissional",
      "Aprimorou habilidades de Infraestrutura, DevOps e Cloud Computing com AWS"
    ]
  },
  {
    id: "5",
    company: "PE na Arte",
    position: "CEO",
    period: "2024 - atual",
    description: "Fundador e CEO de uma startup Social focada em soluções digitais para desenvolvimento e autonomia de produtores culturais de Pernambuco, contribuindo e fortalecendo o ecossistema da economia criativa local.",
    technologies: ["React", "Node.js", "Next.js", "Tailwind CSS", "Figma", "SEO", "Marketing Digital"],
    achievements: [
      "Possui MVP validado por usuários reais do setor cultural",
      "Apoio e aceitação em eventos de tecnologia e por comunidade de mais de 200 produtores culturais",
      "Aprovado e implementado com investimento de Edital de Desenvolvimento Cultural de Pernambuco"
    ]
  },
  {
    id: "6",
    company: "Freelancer",
    position: "Engenheiro de Software",
    period: "2022 - atual",
    description: "Atuação como desenvolvedor full stack freelancer, criando soluções personalizadas para clientes variados, desde landing pages até sistemas completos ponta a ponta.",
    technologies: ["React", "Node.js", "Next.js", "Nest.js", "Tailwind CSS", "PostgreSQL", "Figma", "DevOps", "AI"],
  }
];
