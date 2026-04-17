import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import { PLANS } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

export function MembershipPlans() {
  return (
    <section id="plans" className="relative scroll-mt-24 bg-zinc-950 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Membership"
          title="Plans Built For Every Level"
          subtitle="Lock in consistency with flexible tiers—upgrade anytime as your training evolves."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Tilt
                tiltMaxAngleX={plan.featured ? 10 : 6}
                tiltMaxAngleY={plan.featured ? 10 : 6}
                scale={plan.featured ? 1.03 : 1.01}
                glareEnable
                glareMaxOpacity={plan.featured ? 0.35 : 0.18}
                glareColor="rgba(56, 189, 248, 0.45)"
                transitionSpeed={1400}
                className="h-full"
              >
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-zinc-900/60 p-6 shadow-xl backdrop-blur-sm transition-shadow ${
                    plan.featured
                      ? 'border-cyan-400/60 shadow-[0_0_60px_rgba(34,211,238,0.18)] ring-1 ring-orange-400/40'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-red-500/40">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="font-display text-3xl tracking-wide text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl text-white">{plan.price}</span>
                    <span className="text-sm text-zinc-500">{plan.period}</span>
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-zinc-300">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full text-sm font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                      plan.featured
                        ? 'bg-gradient-to-r from-sky-500 via-cyan-400 to-orange-500 text-zinc-950 hover:brightness-110'
                        : 'border border-white/15 bg-white/5 text-white hover:border-cyan-400/50 hover:bg-white/10'
                    }`}
                  >
                    Choose {plan.name}
                  </a>
                </article>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
