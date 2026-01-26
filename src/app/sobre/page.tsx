'use client'

import { useRevealAnimation } from "@/hooks/useAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Heart, Code, Rocket, Users } from "lucide-react";

export default function SobrePage() {
  const section1Ref = useRevealAnimation<HTMLDivElement>();
  const section2Ref = useRevealAnimation<HTMLDivElement>();
  const section3Ref = useRevealAnimation<HTMLDivElement>();

  return (
    <div className="w-full pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Sobre Mim"
          subtitle="Conheça mais sobre minha história, paixões e projetos"
        />

        {/* Minha História */}
        <div ref={section1Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Code className="text-primary" size={24} />
              </div>
              <h2 className="text-3xl font-mono text-primary">Minha Jornada</h2>
            </div>
            <p className="text-foreground leading-relaxed">
              Minha paixão por tecnologia começou ainda na infância, quando observava meu tio mexendo em uma tela preta com várias letrinhas coloridas. Não sabia oque era, 
              mas aquilo me fascinava. Essa vivência sempre me deu curiosidade pra entender como as coisas funcionavam por trás das telas. Anos depois, essa curiosidade 
              me levou a cursar o <b>técnico em informática</b> ainda no ensino médio pelo <b>IFPE</b>, onde dei meus primeiros passos na programação e na área de tecnologia como um todo.
            </p>
            <p className="text-foreground leading-relaxed">
              Ao longo do curso, tive oportunidade de conhecer diversas áreas da tecnologia, além de me engajar em projetos variados, desde palestras que ministrei, até projetos de <b>pesquisa e extensão</b>.
              minha conclusão do curso técnico foi através de um projeto que une tanto a tecnologia como <b>arte e cultura</b>, que é outro campo onde pertenço e atuo. Esse projeto onde apliquei meus conhecimentos 
              foi aprovado em um edital de fomento que permitiu finalizar o primeiro MVP e me deu base para fundar minha startup, a <b>Social Tech PE na Arte</b>.
            </p>
            <p className="text-foreground leading-relaxed">
              Após minha conclusão do técnico, decidi aprofundar ainda mais meus conhecimentos e habilidades ingressando no curso <b>técnologo em Análise e Desenvolvimento de Sistemas</b> também no <b>IFPE</b>, onde me encontro na metade da graduação. 
            </p>
            <p>
              Durante o primeiro período da graduação, consegui meu primeiro estágio como <b>DevOps Engineer</b> na <b>Sauter Digital</b>, atuando ativamente em diversos projetos e clientes com 
              infraestrutura em nuvem nos ambientes <b>GCP</b> e <b>AWS</b>, <b>Kubernetes</b>, <b>monitoramento</b>, <b>automação de pipelines</b> além de projetos internos com <b>React</b>.
            </p>
            <p className="text-foreground leading-relaxed">
              Hoje, como Engenheiro de Software Full Stack, combino <b>conhecimento técnico</b>, <b>experiência</b>
              e <b>habilidades de comunicação</b> para entregar soluções ponta a ponta que realmente
              fazem diferença na vida das pessoas.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-primary/30">
            <ImageWithFallback
              src="/eu-2.svg"
              alt="Web Development"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Valores */}
        <div ref={section2Ref} className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-mono text-primary">Meus Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
              <Rocket className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-mono mb-3">Inovação</h3>
              <p className="text-muted-foreground">
                Busco constantemente boas tecnologias e abordagens sólidas para resolver problemas de forma produtiva e eficiente.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
              <Code className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-mono mb-3">Qualidade</h3>
              <p className="text-muted-foreground">
                Código limpo, bem documentado e testado é a base de qualquer projeto de sucesso.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-mono mb-3">Serviço</h3>
              <p className="text-muted-foreground">
                Acredito que eficiência, comunicação aberta e profissionalismo são essenciais para o sucesso de qualquer projeto.
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div ref={section3Ref}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-mono text-primary">Fora do Código</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30">
              <ImageWithFallback
                src="/revoredo-musica.jpg"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Quando não estou desenvolvendo, me mantenho ativo em atividades culturais e artísticas. Toco
                violão, percussão e canto, participando de eventos, projetos e produções de arte e cultura como um todo.
                Mas atuo sempre tentando unir as duas paixões, tecnologia e arte, buscando inovar e criar novas experiências.
              </p>
              <p className="text-foreground leading-relaxed">
                Também sou apaixonado por esportes e jogos, que me ajudam a relaxar e
                recarregar as energias para novos desafios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
