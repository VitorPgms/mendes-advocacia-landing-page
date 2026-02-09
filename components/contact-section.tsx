"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Largo Sete Setembro, nº1000 - 5º andar\n Sé, São Paulo - SP\n\nRua Maria Paula Gambier Costa, nº960\n Centro, Paraguaçu Paulista - SP",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(18) 9 9701-3180",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "mendesadvocaciaeconsultoria@hotmail.com",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 8h às 18h\nApós às 18h apenas Prisões em Flagrante ou acompanhamento em Boletim de Ocorrência.",
  },
]

const serviceAreas = [
  "Direito Trabalhista",
  "Direito Imobiliário",
  "Tribunal do Júri",
  "Direito de Família",
  "Outro",
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)

  const formData = new FormData(e.currentTarget)

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error("Erro ao enviar")
    }

    setIsSubmitted(true)
  } catch (error) {
  console.error("ERRO NO ENVIO:", error)
  alert("Erro ao enviar mensagem. Tente novamente.")
} finally {
    setIsLoading(false)
  }
}


  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-12 h-[2px] bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Agende uma consulta ou tire suas dúvidas. Nossa equipe está pronta para 
            atender você com a atenção que você merece.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video bg-card border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976050594776!2d-46.6565089!3d-23.5631983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1706389000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório"
                className="grayscale"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 md:p-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Mensagem Enviada!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Obrigado pelo seu contato. Nossa equipe retornará em breve.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-2">Agende uma Consulta</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Preencha o formulário abaixo e entraremos em contato.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Área de interesse *</Label>
                      <Select name="service" required>
                        <SelectTrigger className="bg-background border-border focus:border-primary">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceAreas.map((area) => (
                            <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, "-")}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva brevemente sua necessidade jurídica..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    * Campos obrigatórios. Suas informações serão tratadas com total sigilo.
                  </p>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                  >
                    {isLoading ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
