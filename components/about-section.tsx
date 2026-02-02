import Image from "next/image"
import { Scale, Shield, Award, Users } from "lucide-react"

const features = [
  {
    icon: Scale,
    title: "Atuação Jurídica Responsável",
    description: "Atuação focada em soluções jurídicas seguras, com base técnica sólida, atualização constante e compromisso com a correta aplicação do Direito.",
  },
  {
    icon: Shield,
    title: "Ética e Sigilo",
    description: "Compromisso absoluto com a confidencialidade e os mais altos padrões éticos da advocacia.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Advocacia fundamentada em sólida formação acadêmica, com pós-graduações em áreas estratégicas do Direito e constante aperfeiçoamento profissional.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada caso é analisado de forma individual, com atenção direta do advogado e estratégias jurídicas pensadas conforme a real necessidade do cliente.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/meeting-room.jpg"
                alt="Sala de reuniões Mendes Advocacia"
                fill
                className="object-cover grayscale"
              />
              {/* Gold Border Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
            </div>
    
          </div>

          {/* Content */}
          <div>
            <div className="w-12 h-[2px] bg-primary mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Sobre o Escritório <span className="text-primary">Mendes</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O Mendes – Advocacia e Consultoria é um escritório jurídico que atua com foco em ética, 
              técnica e responsabilidade, oferecendo atendimento personalizado e soluções jurídicas 
              eficientes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Fundado em 2023, o escritório nasceu com o propósito de unir atualização acadêmica constante, 
              experiência prática e comprometimento com o cliente, sempre buscando a melhor estratégia para cada caso.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
