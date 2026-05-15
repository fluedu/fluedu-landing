"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, MessageCircle, Rocket, Github, Mail, Send, Loader2, CheckCircle } from "lucide-react"

const LINKEDIN_URL = "https://www.linkedin.com/company/educloud-system/?viewAsMember=true"
const GITHUB_ORG_URL = "https://github.com/fluedu"
const EMAIL = "elrprogramadortutoriales@gmail.com"

// Web3Forms access key - get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    // If no Web3Forms key, fallback to mailto
    if (!WEB3FORMS_ACCESS_KEY) {
      const subject = encodeURIComponent(`[Fluedu] Mensaje de ${formData.name}`)
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nCorreo: ${formData.email}\nColegio: ${formData.institution || "No especificado"}\n\nMensaje:\n${formData.message}`
      )
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[Fluedu] Nuevo mensaje de ${formData.name}`,
          from_name: "Fluedu Contact Form",
          name: formData.name,
          email: formData.email,
          institution: formData.institution || "No especificado",
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", institution: "", message: "" })
      } else {
        throw new Error(data.message || "Error al enviar el mensaje")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-16 px-4 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:mb-6 sm:h-16 sm:w-16"
          >
            <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.div>

          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Hablemos sobre tu colegio
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Fluedu esta en desarrollo activo y la demo llegara pronto. Si eres
            parte de un colegio y quieres conocer mas, nos encantaria conversar.
          </p>

          {/* Demo coming soon badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Rocket className="h-4 w-4" />
            <span className="font-medium">Demo llegando pronto</span>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 h-64 w-64 animate-pulse rounded-full bg-primary/5 blur-3xl" />
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Envianos un mensaje
            </h3>

            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Mensaje enviado</h4>
                <p className="text-muted-foreground text-sm">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSubmitStatus("idle")}
                >
                  Enviar otro mensaje
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electronico *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution">Nombre del colegio (opcional)</Label>
                  <Input
                    id="institution"
                    name="institution"
                    placeholder="Nombre de tu colegio"
                    value={formData.institution}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuentanos sobre tu colegio y como podemos ayudarte..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="bg-background/50 resize-none"
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>

                {!WEB3FORMS_ACCESS_KEY && (
                  <p className="text-xs text-muted-foreground text-center">
                    Se abrira tu cliente de correo para enviar el mensaje
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Other contact options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* LinkedIn Card */}
            <div className="rounded-2xl border border-border bg-card/50 p-6 relative overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-0 h-32 w-32 animate-pulse rounded-full bg-accent/5 blur-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Conecta en LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sigue nuestra pagina para actualizaciones y novedades del proyecto.
              </p>
              <Button className="w-full group" asChild>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  Contactanos en LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Correo directo
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Tambien puedes escribirnos directamente a:
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm break-all"
              >
                {EMAIL}
              </a>
            </div>

            {/* Developer CTA */}
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Github className="h-5 w-5" />
                Para desarrolladores
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Eres desarrollador? Sigue nuestra organizacion en GitHub para ver nuestro progreso.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Fluedu en GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
