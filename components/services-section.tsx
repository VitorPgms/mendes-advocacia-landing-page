import { Briefcase, Building2, FileText, Gavel, Home, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Gavel,
    title: "Direito Trabalhista",
    description: "Atuação na defesa dos direitos de empregados e empregadores, com foco em ações trabalhistas, rescisões, verbas trabalhistas e orientações preventivas.",
    areas: ["Consultivo", "Contencioso", "Acordos", "Compliance"],
  },
  {
    icon: Building2,
    title: "Direito Júri",
    description: "Atuação em processos criminais de competência do Tribunal do Júri, com experiência prática em audiências e plenários, sempre pautada na técnica e na estratégia jurídica.",
    areas: ["Compra e Venda", "Locação", "Regularização", "Due Diligence"],
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Atuação em contratos, regularização de imóveis, compra e venda, locação e análise jurídica preventiva para segurança patrimonial.",
    areas: ["Responsabilidade Civil", "Contratos", "Sucessões", "Família"],
  },
  {
    icon: Users,
    title: "Direito de Família",
    description: "Assessoria em questões familiares como divórcio, pensão alimentícia, guarda, partilha de bens e orientações jurídicas sensíveis e humanizadas.",
    areas: ["Divórcio", "Guarda", "Pensão", "Inventário"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Áreas de <span className="text-primary">Atuação</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Oferecemos soluções jurídicas completas e personalizadas em diversas áreas do direito, 
            sempre com foco nos melhores resultados para nossos clientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-secondary border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1 bg-background border border-border text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <Link
                href="#contato"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
