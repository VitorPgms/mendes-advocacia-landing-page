"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content: "Ótimo trabalho, um atendimento de qualidade. Dedicação total para proporcionar o melhor pro cliente",
    author: "Kayk Fogaça",
    role: "",
    rating: 5,
  },
  {
    id: 2,
    content: "O atendimento ótimo, e a rapidez ótima, excelente atendimento, só tenho a agradecer, muito obrigado",
    author: "Pedro Ramos",
    role: "",
    rating: 5,
  },
  {
    id: 3,
    content: "Ótimo.. atendimento diferenciado e atenção total ao cliente...",
    author: "Cleberson Acústico",
    role: "",
    rating: 5,
  },
  {
    id: 4,
    content: "Show! Ótimos profissionais, prestativos, atenciosos e sempre empenhados nas soluções dos casos! Parabéns!",
    author: "Valdir Izuperio",
    role: "",
    rating: 5,
  },
  {
    id: 5,
    content: "Melhor escritório da região, ótimo atendimento e profissionalismo!!!",
    author: "Maria Eduarda Casselin",
    role: "",
    rating: 5,
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A satisfação de nossos clientes é o nosso maior patrimônio. Conheça algumas 
            histórias de sucesso.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary border border-border p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/10" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 relative z-10">
              &ldquo;{currentTestimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">{currentTestimonial.author}</p>
                <p className="text-muted-foreground text-sm">{currentTestimonial.role}</p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-border"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
