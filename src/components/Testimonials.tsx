import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-zinc-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Voices From The Floor"
          title="Members Who Feel The Difference"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-6 shadow-lg"
            >
              <Quote className="h-8 w-8 text-cyan-400/40" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-200 md:text-base">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                {t.author}
              </figcaption>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
