"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Quote } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  github: string
  linkedin: string
}

const team: TeamMember[] = [
  {
    name: "Carlos",
    role: "Founder & Product Lead",
    image: "/images/team/carlos.jpg",
    github: "https://github.com/Carlos-Marrugo",
    linkedin: "https://www.linkedin.com/in/carlos-marrugo-701261283/",
  },
  {
    name: "Sehuanes",
    role: "Backend Developer",
    image: "/images/team/sehuanes.jpg",
    github: "https://github.com/Camilo-ASC",
    linkedin: "https://www.linkedin.com/in/camilo-asc/",
  },
  {
    name: "Jesus",
    role: "Backend Developer",
    image: "/images/team/jesus.jpg",
    github: "https://github.com/Jesus-Castro10",
    linkedin: "https://www.linkedin.com/in/jesus-castro-rodriguez/",
  },
  {
    name: "Luz Dari",
    role: "Backend Developer",
    image: "/images/team/luzdari.jpg",
    github: "https://github.com/luz-dari-c",
    linkedin: "https://www.linkedin.com/in/luzdari-crespo-a43440251/",
  },
  {
    name: "Naiker Gomez",
    role: "Frontend Lead",
    image: "/images/team/naiker.jpg",
    github: "https://github.com/NaikerGomez",
    linkedin: "https://www.linkedin.com/in/naiker-gomez-caraballo-a97449293/",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group flex flex-col items-center text-center"
    >
      <div className="relative mb-3 h-32 w-32 overflow-hidden rounded-2xl border-2 border-border transition-all group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 sm:mb-4 sm:h-40 sm:w-40 md:h-48 md:w-48">
        <Image
          src={member.image}
          alt={`Foto de ${member.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="text-base font-bold text-foreground sm:text-lg">{member.name}</h3>
      <p className="mt-0.5 text-xs font-medium text-primary sm:text-sm">{member.role}</p>
      <div className="mt-2.5 flex items-center gap-2 sm:mt-3 sm:gap-3">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 sm:h-9 sm:w-9"
          aria-label={`GitHub de ${member.name}`}
        >
          <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 sm:h-9 sm:w-9"
          aria-label={`LinkedIn de ${member.name}`}
        >
          <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      </div>
    </motion.div>
  )
}

export function Team() {
  return (
    <section id="team" className="py-16 px-4 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Equipo
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Las personas detras de Fluedu
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Un equipo de 5 personas construyendo desde cero la plataforma
            educativa que los colegios necesitan.
          </p>
        </motion.div>

        {/* Team grid - 5 members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 gap-8 sm:mt-16 sm:gap-10 md:grid-cols-3 lg:grid-cols-5"
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>

        {/* Founder quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 mx-auto max-w-3xl"
        >
          <div className="relative rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20 sm:h-10 sm:w-10" />
            <blockquote className="relative z-10 text-center">
              <p className="text-pretty text-base leading-relaxed text-foreground sm:text-lg">
                {"Hoy estamos enfocados en transformar la gestion academica de los colegios, pero nuestra vision es mas grande. Estamos trabajando para conectar con universidades y expandir Fluedu a todo el ecosistema educativo de Latinoamerica."}
              </p>
              <footer className="mt-4 flex items-center justify-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="/images/team/carlos.jpg"
                    alt="Carlos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Carlos</p>
                  <p className="text-xs text-muted-foreground">Founder & Product Lead</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
