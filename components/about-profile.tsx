import Image from "next/image"
import { Scale, Shield, Award, Users } from "lucide-react"


export function AboutProfile() {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/4] overflow-hidden">
              <Image
                src="/images/joao-profile.png"
                alt="Imagem de João Mendes"
                fill
                className="object-cover"
              />
              {/* Gold Border Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
            </div>
    
          </div>

          {/* Content */}
          <div>
            <div className="w-12 h-[2px] bg-primary mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Sobre o Advogado <span className="text-primary">João Mendes</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              João Mendes é advogado, fundador do Mendes – Advocacia e Consultoria, 
              com atuação focada em oferecer soluções jurídicas seguras e eficazes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Possui sólida formação acadêmica, sendo:
            </p>
            <ul className="text-muted-foreground leading-relaxed mb-6">
              <li>• Pós-Graduado em Direito do Trabalho pelo Instituto Legale Educacional</li>
              <li>• Pós-Graduado em Tribunal do Júri pela Faculdade Centro-Oeste</li>
              <li>• Pós-Graduado em Direito Imobiliário pela Escola Paulista de Direito</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Possui experiência prática em Tribunal do Júri, Direito do Trabalho e Direito de Família, 
              atuando com seriedade, técnica e constante atualização profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
