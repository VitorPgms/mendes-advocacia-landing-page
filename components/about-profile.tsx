import Image from "next/image"

export function AboutProfile() {
  return (
    <section id="sobreAdv" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Foto do Advogado */}
          <div className="relative">
            <div className="relative aspect-[4/4] overflow-hidden rounded-md">
              <Image
                src="/images/joao-profile.png"
                alt="Imagem de João Mendes"
                fill
                className="object-cover"
              />
              {/* Borda decorativa */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10 rounded-md" />
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <div className="w-12 h-[2px] bg-primary mb-6" />

            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Sobre o Advogado <span className="text-primary">João Mendes</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>João Victor Mendes dos Santos</strong> é advogado, fundador do
              <strong> Mendes – Advocacia e Consultoria</strong>, com atuação voltada
              à prestação de serviços jurídicos responsáveis e estratégicos.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Inscrito na <strong>OAB/SP nº 490.687</strong>, é graduado pelo
              <strong> Centro Universitário Eurípides de Marília – UNIVEM</strong> e
              iniciou sua atuação profissional em 2023.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Possui sólida formação acadêmica, com pós-graduação em
              <strong> Direito do Trabalho</strong>, <strong>Tribunal do Júri</strong> e
              <strong> Direito Imobiliário</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ao longo de sua atuação, já atendeu <strong>mais de 100 casos</strong> nos
              âmbitos judicial e extrajudicial, com experiência prática em
              <strong> Tribunal do Júri</strong>,<strong>Direito Criminal</strong>, <strong>Direito do Trabalho</strong> e
              <strong> Direito de Família</strong>, incluindo atuação em demandas
              sindicais.
            </p>

            {/* Certificações */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Formação Acadêmica e Certificações
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 <a
                    href="/docs/cert-direito-trabalho.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block">
                      <div className="relative aspect-[3/2] overflow-hidden rounded-md border">
                        <Image
                          src="/images/cert-direito-trabalho.png"
                          alt="Pós-Graduação em Direito do Trabalho"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                  </a>
                  <a
                    href="/docs/cert-tribunal-juri.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block">
                      <div className="relative aspect-[3/2] overflow-hidden rounded-md border">
                        <Image
                          src="/images/cert-tribunal-juri.png"
                          alt="Pós-Graduação em Tribunal do Júri"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                  </a>

                <a
                  href="/docs/cert-direito-imobiliario.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-md border">
                      <Image
                        src="/images/cert-direito-imobiliario.png"
                        alt="Pós-Graduação em Direito Imobiliário"
                        fill
                        className="object-fill transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                </a>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Seu trabalho é pautado pela ética, pelo sigilo profissional e pelo
              compromisso com soluções jurídicas eficazes, sempre com atendimento
              direto, transparente e personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
