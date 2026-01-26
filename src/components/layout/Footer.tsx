import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, url: "https://github.com/Jrevoredo42", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/joao-revoredo", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/j.revoredo", label: "Instagram" },
    { icon: Mail, url: "mailto:devoredo42@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-primary font-mono">&lt;/&gt;</span>
              <span className="text-xl font-mono">João Revoredo</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Engenheiro de Software Full Stack
              <br />
              Transformando ideias em soluções digitais
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono text-primary">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/certificados" className="text-muted-foreground hover:text-primary transition-colors">
                  Certificados
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono text-primary">Conecte-se</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} João Revoredo. Todos os direitos reservados.</p>
          <p className="mt-2 font-mono">
            Desenvolvido com <span className="text-primary">❤</span> usando Next.js, TypeScript, Tailwind & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
