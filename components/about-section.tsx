import Image from "next/image"
import { Scale, Shield, Award, Users } from "lucide-react"

const features = [
  {
    icon: Scale,
    title: "Tradição Jurídica",
    description: "Duas décadas de atuação no mercado jurídico brasileiro com excelência e resultados comprovados.",
  },
  {
    icon: Shield,
    title: "Ética e Sigilo",
    description: "Compromisso absoluto com a confidencialidade e os mais altos padrões éticos da advocacia.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Equipe altamente qualificada e em constante atualização nas mais diversas áreas do direito.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção exclusiva e soluções jurídicas sob medida para suas necessidades.",
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
              Fundado em 2023, o escritório Mendes Advocacia e Assessoria Jurídica nasceu com 
              o propósito de oferecer serviços jurídicos de alta qualidade, combinando tradição 
              e inovação para atender às demandas cada vez mais complexas do mundo contemporâneo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Nossa equipe é formada por advogados especializados em diversas áreas do direito, 
              comprometidos em defender os interesses de nossos clientes com dedicação, competência 
              e resultados concretos.
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
