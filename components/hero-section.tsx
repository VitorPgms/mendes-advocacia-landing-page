import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-office.jpg"
          alt="Escritório Mendes Advocacia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          {/* Gold Line Accent */}
          <div className="w-20 h-[2px] bg-primary mb-8" />
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
            Defendendo seus direitos com{" "}
            <span className="text-primary">excelência</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Oferecendo soluções jurídicas personalizadas fundamentadas em 3 pós-graduações e experiência em mais de 100 casos, sempre com compromisso, ética e dedicação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <Link href="#contato">
                Agende uma Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10 text-base px-8 bg-transparent">
              <Link href="#servicos">
                Conheça Nossos Serviços
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-primary">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Casos Resolvidos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-primary">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
