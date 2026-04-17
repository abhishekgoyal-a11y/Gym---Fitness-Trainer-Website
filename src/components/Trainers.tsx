import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { TRAINERS } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

export function Trainers() {
  return (
    <section id="trainers" className="scroll-mt-24 bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Coaching Team"
          title="Trainers Who Elevate You"
          subtitle="Specialists across strength, mobility, conditioning, and recovery—aligned on one mission: your progress."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                glareEnable
                glareMaxOpacity={0.22}
                glareColor="rgba(251, 146, 60, 0.35)"
                className="h-full"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-lg transition-shadow hover:shadow-orange-500/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-2xl tracking-wide text-white">{trainer.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                      {trainer.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{trainer.bio}</p>
                  </div>
                </article>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
