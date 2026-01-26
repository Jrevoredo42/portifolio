'use client'

import { useState } from "react";
import { useRevealAnimation } from "@/hooks/useAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const formRef = useRevealAnimation<HTMLFormElement>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp (usar \n para quebras de linha)
    const whatsappMessage = `Olá! Meu nome é *${formData.name}*

Email: ${formData.email}

${formData.message}`;
    
    // Número formatado para wa.me (apenas números)
    const phoneNumber = "5587981009469";
    
    // Abre o WhatsApp com a mensagem (encodeURIComponent cuida do encoding)
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    toast.success("Redirecionando para o WhatsApp...", {
      description: "Continue a conversa pelo WhatsApp!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Contato"
          subtitle="Vamos trabalhar juntos? Entre em contato!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-mono text-primary mb-6">
                Informações de Contato
              </h3>
              <p className="text-muted-foreground mb-8">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou
                oportunidades de fazer parte da sua visão.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-mono text-primary mb-1">Email</h4>
                  <a
                    href="mailto:contato@seuemail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    devoredo42@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-mono text-primary mb-1">Telefone</h4>
                  <a
                    href="tel:+5587981009469"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (87) 9.8100-9469
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-mono text-primary mb-1">Localização</h4>
                  <p className="text-muted-foreground">
                    Garanhuns, PE - Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-mono text-primary mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                {[
                  { name: "GitHub", url: "https://github.com/Jrevoredo42" },
                  { name: "LinkedIn", url: "https://linkedin.com/in/joao-revoredo" },
                  { name: "Instagram", url: "https://instagram.com/j.revoredo" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-secondary/50 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-xl bg-card border border-border"
          >
            <h3 className="text-2xl font-mono text-primary mb-6">
              Envie uma Mensagem
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-primary mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-primary mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-primary mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                  rows={6}
                  required
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>
            </div>

            <Button type="submit" className="w-full gap-2 cursor-pointer" size="lg">
              <Send size={20} />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
