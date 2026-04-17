import { motion } from 'framer-motion'
import { TRANSFORMATIONS } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

export function Transformations() {
  return (
    <section id="transformations" className="scroll-mt-24 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Real Results"
          title="Transformations That Speak"
          subtitle="Structured training, nutrition check-ins, and coaches who refuse to let you plateau."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {TRANSFORMATIONS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-lg"
            >
              <div className="grid grid-cols-2 gap-px bg-black/60">
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={t.beforeSrc}
                    alt={`${t.name} before training`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-200 backdrop-blur">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={t.afterSrc}
                    alt={`${t.name} after training`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute left-2 top-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-950">
                    After
                  </figcaption>
                </figure>
              </div>
              <div className="border-t border-white/10 p-4">
                <h3 className="font-display text-2xl tracking-wide text-white">{t.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90">
                  {t.metric}
                </p>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-orange-500/5 opacity-0 transition group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
