import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-gradient-to-b from-black via-zinc-950 to-zinc-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="Our Story" title="Built For Serious Training" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-zinc-900/40 p-8 text-center shadow-2xl backdrop-blur-md md:p-12"
        >
          <p className="text-pretty text-lg leading-relaxed text-zinc-200 md:text-xl">{ABOUT_TEXT}</p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center text-xs text-zinc-500 md:text-sm">
            <div>
              <p className="font-display text-3xl text-white md:text-4xl">8k+</p>
              <p className="mt-1 uppercase tracking-widest">Sessions / mo</p>
            </div>
            <div>
              <p className="font-display text-3xl text-white md:text-4xl">15</p>
              <p className="mt-1 uppercase tracking-widest">Pro machines</p>
            </div>
            <div>
              <p className="font-display text-3xl text-white md:text-4xl">360°</p>
              <p className="mt-1 uppercase tracking-widest">Coaching lens</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
