import { Project, Certificate, TechStack, WorkExperience } from "@/types";

export const techStack: TechStack[] = [
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "frontend" },
  { name: "Vite", icon: "/icons/Vitejs.svg", category: "frontend" },
  { name: "Authjs", icon: "/icons/authjs.svg", category: "frontend" },
  { name: "Java", icon: "/icons/java.svg", category: "languages" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "languages" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "languages" },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend"},
  { name: "NestJS", icon: "/icons/nestjs.svg", category: "backend" },
  { name: "Prisma", icon: "/icons/prisma.svg", category: "backend"},
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
  /*
  {
    id: "1",
    title: "Sistema de E-commerce Full Stack",
    description: "Plataforma completa de comércio eletrônico com painel administrativo",
    longDescription: "Uma solução completa de e-commerce desenvolvida do zero, incluindo catálogo de produtos, carrinho de compras, checkout integrado com gateways de pagamento, sistema de gestão de pedidos e dashboard administrativo com métricas em tempo real.",
    image: "ecommerce platform",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    category: "fullstack",
    features: [
      "Sistema de autenticação JWT com refresh tokens",
      "Integração com múltiplos gateways de pagamento",
      "Dashboard administrativo com métricas em tempo real",
      "Sistema de notificações via email e SMS",
      "Cache distribuído com Redis para melhor performance",
      "API RESTful documentada com Swagger",
      "Testes unitários e de integração com 90% de cobertura"
    ],
    challenges: "O maior desafio foi implementar um sistema de inventário em tempo real que prevenisse overselling durante picos de acesso. Resolvemos implementando uma fila de processamento com Redis e locks distribuídos.",
    results: "A plataforma processou mais de 10.000 pedidos no primeiro mês, com tempo médio de resposta de 200ms e 99.9% de uptime.",
    year: 2024,
    githubUrl: "https://github.com/usuario/ecommerce",
    demoUrl: "https://demo-ecommerce.com"
  },
  {
    id: "2",
    title: "Aplicativo de Saúde e Fitness",
    description: "App mobile para tracking de exercícios e nutrição",
    longDescription: "Aplicativo mobile multiplataforma que permite aos usuários monitorar suas atividades físicas, criar planos de treino personalizados, acompanhar nutrição e visualizar progresso através de gráficos detalhados.",
    image: "fitness mobile",
    technologies: ["React Native", "TypeScript", "Firebase", "Expo", "Redux"],
    category: "languages",
    features: [
      "Tracking de exercícios com GPS para corridas e caminhadas",
      "Biblioteca com mais de 500 exercícios catalogados",
      "Planos de treino personalizados com IA",
      "Contador de calorias e macronutrientes",
      "Sincronização com dispositivos wearables",
      "Gamificação com conquistas e desafios",
      "Modo offline com sincronização automática"
    ],
    challenges: "Implementar o tracking de GPS de forma eficiente sem drenar a bateria foi um desafio. Utilizamos geofencing e batching de localizações para otimizar o consumo.",
    results: "Mais de 5.000 downloads na primeira semana, com rating médio de 4.7 estrelas e 85% de taxa de retenção em 30 dias.",
    year: 2024,
    githubUrl: "https://github.com/usuario/fitness-app"
  },
  {
    id: "3",
    title: "Dashboard de Analytics",
    description: "Plataforma de visualização de dados e métricas empresariais",
    longDescription: "Dashboard interativo para visualização e análise de dados empresariais em tempo real, com gráficos customizáveis, exportação de relatórios e integrações com múltiplas fontes de dados.",
    image: "analytics dashboard",
    technologies: ["React", "D3.js", "TypeScript", "GraphQL", "WebSocket"],
    category: "web",
    features: [
      "Gráficos interativos com D3.js e Recharts",
      "Atualização de dados em tempo real via WebSocket",
      "Filtros avançados e drill-down de dados",
      "Exportação de relatórios em PDF e Excel",
      "Sistema de alertas customizáveis",
      "Integração com Google Analytics, Mixpanel e fontes customizadas",
      "Modo escuro e temas personalizáveis"
    ],
    challenges: "Lidar com grandes volumes de dados mantendo a interface responsiva exigiu implementação de virtualização de listas e lazy loading de componentes.",
    results: "Redução de 70% no tempo de geração de relatórios em comparação com o sistema anterior.",
    year: 2023,
    demoUrl: "https://demo-analytics.com"
  },
  {
    id: "4",
    title: "Sistema de Gerenciamento Educacional",
    description: "Plataforma para gestão de escolas e universidades",
    longDescription: "Sistema completo para gestão educacional incluindo matrícula de alunos, controle de frequência, notas, biblioteca virtual e comunicação entre professores, alunos e pais.",
    image: "education system",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Tailwind"],
    category: "fullstack",
    features: [
      "Portal do aluno com acesso a notas e frequência",
      "Sistema de biblioteca virtual com controle de empréstimos",
      "Chat em tempo real entre professores e alunos",
      "Geração automática de boletins e históricos",
      "Calendário acadêmico integrado",
      "Sistema de notificações multi-canal",
      "Relatórios gerenciais e estatísticos"
    ],
    year: 2023,
    githubUrl: "https://github.com/usuario/edu-system"
  },
  {
    id: "5",
    title: "Rede Social para Desenvolvedores",
    description: "Plataforma para compartilhamento de código e networking",
    longDescription: "Rede social focada em desenvolvedores para compartilhar snippets de código, projetos, fazer networking e colaborar em projetos open source.",
    image: "developer network",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    category: "fullstack",
    features: [
      "Editor de código integrado com syntax highlighting",
      "Sistema de follows e feed personalizado",
      "Comentários e reactions em posts",
      "Sistema de mensagens diretas",
      "Integração com GitHub para importar repositórios",
      "Sistema de tags e busca avançada",
      "Modo escuro nativo"
    ],
    year: 2023,
    demoUrl: "https://devnetwork-demo.com"
  },
  {
    id: "6",
    title: "Aplicativo de Delivery de Comida",
    description: "Marketplace para restaurantes com app de entrega",
    longDescription: "Plataforma completa de delivery incluindo aplicativo para clientes, painel para restaurantes e app para entregadores, com tracking em tempo real.",
    image: "food delivery",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Google Maps"],
    category: "languages",
    features: [
      "Tracking de entrega em tempo real",
      "Sistema de pagamento integrado",
      "Avaliações e reviews de restaurantes",
      "Cupons e promoções dinâmicas",
      "Histórico de pedidos",
      "Notificações push em tempo real",
      "Sistema de fidelidade e pontos"
    ],
    year: 2024,
  }
    */
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
    date: "2025",
    organization: "Rocketseat",
    image: "/certificados/fundamentos-nodejs.png",
    category: "tech",
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
    technologies: ["React", "TypeScript","Node.js", "Next.js", "Tailwind CSS", "Jest","Figma"],
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
