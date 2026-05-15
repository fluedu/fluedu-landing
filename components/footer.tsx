"use client"

import Image from "next/image"
import { Github } from "lucide-react"
import { motion } from "framer-motion"

const GITHUB_ORG_URL = "https://github.com/fluedu"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-border/50 bg-card/30 px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Fluedu logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-sm font-bold text-foreground">
            Flu<span className="text-primary">edu</span>
          </span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Plataforma de gestion educativa para colegios.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fluedu
          </span>
        </div>
      </div>
    </motion.footer>
  )
}
