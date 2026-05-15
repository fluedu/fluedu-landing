"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, School, Github, Rocket } from "lucide-react"

const LINKEDIN_URL = "https://www.linkedin.com/company/educloud-system/?viewAsMember=true"
const GITHUB_ORG_URL = "https://github.com/fluedu"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/10 blur-3xl" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 animate-pulse rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: "2s" }} />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
        >
          <Rocket className="h-4 w-4" />
          <span className="font-medium">Demo llegando pronto</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-7xl"
        >
          Gestion educativa{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            simplificada
          </span>{" "}
          en la nube
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl"
        >
          Fluedu es la plataforma que ayuda a colegios a digitalizar toda su
          operacion academica: desde matriculas y calificaciones hasta pagos,
          asistencia y aulas virtuales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground sm:mt-8 sm:gap-6 sm:text-sm"
        >
          <span className="inline-flex items-center gap-2">
            <School className="h-4 w-4 text-primary" />
            Para colegios
          </span>
          <span className="h-4 w-px bg-border" />
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            En desarrollo activo
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0"
        >
          <Button size="lg" className="w-full sm:w-auto group" asChild>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              Contactanos en LinkedIn
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link href="#team">Conoce al equipo</Link>
          </Button>
        </motion.div>

        {/* Developer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 sm:mt-12"
        >
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            <span>{"Eres desarrollador? Sigue nuestra organizacion en GitHub"}</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
