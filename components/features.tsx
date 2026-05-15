"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  CreditCard,
  Video,
  QrCode,
  ClipboardList,
  Bell,
  FileText,
  Shield,
  type LucideIcon,
} from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  status: "active" | "building" | "planned"
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Gestion Academica",
    description:
      "Organiza programas, materias, grados y secciones. Adaptable a colegios de cualquier tamano y tipo.",
    status: "building",
  },
  {
    icon: ClipboardList,
    title: "Matriculas",
    description:
      "Proceso de matricula completamente digital por ano escolar, con seguimiento en tiempo real.",
    status: "building",
  },
  {
    icon: CreditCard,
    title: "Pagos en Linea",
    description:
      "Pago de matriculas y mensualidades en linea, con recibos automaticos y estados de cuenta.",
    status: "planned",
  },
  {
    icon: Video,
    title: "Aulas Virtuales",
    description:
      "Clases en vivo, grabaciones, materiales de estudio y entrega de tareas en un mismo lugar.",
    status: "planned",
  },
  {
    icon: QrCode,
    title: "Control de Acceso QR",
    description:
      "Cada estudiante y docente tiene un codigo QR para registrar entrada y salida de forma segura.",
    status: "building",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    description:
      "Alertas automaticas sobre notas, ausencias, pagos pendientes y comunicados institucionales.",
    status: "building",
  },
  {
    icon: FileText,
    title: "Documentos y Reportes",
    description:
      "Genera certificados, constancias, boletines y reportes academicos listos para descargar.",
    status: "planned",
  },
  {
    icon: Shield,
    title: "Seguimiento de Convivencia",
    description:
      "Registro de incidentes, reconocimientos positivos e historial de comportamiento estudiantil.",
    status: "building",
  },
]

const statusConfig = {
  active: { label: "Activo", className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  building: { label: "En desarrollo", className: "bg-primary/20 text-primary border-primary/30" },
  planned: { label: "Planificado", className: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
}

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

export function Features() {
  return (
    <section id="features" className="bg-card/50 py-16 px-4 sm:py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Producto
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Todo lo que tu colegio necesita
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Una plataforma integral disenada para colegios. Digitaliza cada
            proceso academico y administrativo en un solo sistema.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between sm:mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 sm:h-12 sm:w-12">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${statusConfig[feature.status].className}`}>
                  {statusConfig[feature.status].label}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {feature.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground sm:gap-6"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            En desarrollo
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Planificado
          </span>
        </motion.div>
      </div>
    </section>
  )
}
