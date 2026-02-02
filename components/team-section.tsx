import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Sócio Fundador",
    specialty: "Direito Empresarial e Societário",
    image: "/images/lawyer-1.jpg",
    oab: "OAB/SP 123.456",
    linkedin: "#",
    email: "ricardo@mendesadvocacia.com.br",
  },
  {
    name: "Dra. Mariana Alves",
    role: "Sócia",
    specialty: "Direito Civil e Família",
    image: "/images/lawyer-2.jpg",
    oab: "OAB/SP 234.567",
    linkedin: "#",
    email: "mariana@mendesadvocacia.com.br",
  },
  {
    name: "Dr. Felipe Santos",
    role: "Advogado Sênior",
    specialty: "Direito Trabalhista",
    image: "/images/lawyer-3.jpg",
    oab: "OAB/SP 345.678",
    linkedin: "#",
    email: "felipe@mendesadvocacia.com.br",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Profissionais altamente qualificados e comprometidos com a excelência 
            no exercício da advocacia.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <Link
                    href={member.linkedin}
                    className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-5 w-5 text-primary-foreground" />
                  </Link>
                  <Link
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </Link>
                </div>

                {/* Gold Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-2">{member.specialty}</p>
                <p className="text-xs text-muted-foreground">{member.oab}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
