import Link from "next/link"

const footerLinks = {
  services: [
    { label: "Direito Trabalhista", href: "#servicos" },
    { label: "Direito Criminal e Tribunal do Júri", href: "#servicos" },
    { label: "Direito de Família", href: "#servicos" },
    { label: "Direito Imobiliário", href: "#servicos" },
  ],
  quickLinks: [
    { label: "Sobre o Escritório", href: "#sobre" },
    { label: "Sobre o Advogado", href: "#sobreAdv" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-semibold tracking-wider text-primary">MENDES</span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Advocacia e Consultoria
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Defendendo seus direitos com excelência,
              compromisso, ética e resultados.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contato</h4>
            <address className="not-italic text-muted-foreground text-sm space-y-3">
              <p>
                Largo Sete Setembro, nº34 - 5º andar<br />
                Sé, São Paulo - SP<br />
              </p>
              <p>
                Rua Maria Paula Gambier Costa, nº960<br />
                Centro, Paraguaçu Paulista - SP<br />
              </p>
              <p>
                <Link href="tel:+5518997013180" className="hover:text-primary transition-colors">
                  (18) 9 9701-3180
                </Link>
              </p>
              <p>
                <Link href="mailto:mendesadvocaciaeconsultoria@hotmail.com" className="hover:text-primary transition-colors">
                  mendesadvocaciaeconsultoria@hotmail.com
                </Link>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Mendes Advocacia. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
