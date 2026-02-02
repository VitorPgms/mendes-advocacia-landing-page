"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#equipe", label: "Equipe" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-semibold tracking-wider text-primary">MENDES</span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Advocacia e Consultoria
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://wa.me/5518997013180?text=Olá%2C%20gostaria%20de%20mais%20informações" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" target="_blank">
              <Phone className="h-4 w-4" />
              <span>(18) 99701-3180</span>
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contato">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contato">Agendar Consulta</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
