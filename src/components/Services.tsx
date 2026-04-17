import { motion } from 'framer-motion'
import { Apple, Dumbbell, Flame, UserRound } from 'lucide-react'
import { SERVICES } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

const icons = [Flame, Dumbbell, UserRound, Apple] as const

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-zinc-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Engineered For Performance"
          subtitle="Every pillar of your transformation—training, fuel, and accountability—under one roof."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = icons[index]
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/90 p-6 shadow-lg md:p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200 transition group-hover:scale-105 group-hover:border-orange-400/40 group-hover:text-orange-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-3xl tracking-wide text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {service.description}
                </p>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/20 to-orange-500/10 blur-2xl transition group-hover:opacity-100" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
