import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Flame, Zap } from 'lucide-react'
import { HERO_BG, HERO_PANEL_IMG } from '../lib/constants'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.55])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-x-clip overflow-y-visible pt-24"
    >
      <motion.div style={{ y, opacity: bgOpacity }} className="pointer-events-none absolute inset-0 -z-20">
        <img
          src={HERO_BG}
          alt="Athletes training in a modern gym floor"
          className="h-full w-full object-cover"
          width={2400}
          height={1600}
          fetchPriority="high"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-zinc-950/88 to-zinc-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.16),transparent_40%)]" />

      <div className="relative mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-10 px-4 pb-20 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:pb-24">
        <div className="min-w-0 max-w-2xl shrink space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Premium training · Noida
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Transform Your Body,
            <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-orange-300 bg-clip-text text-transparent">
              Transform Your Life
            </span>
          </h1>
          <p className="max-w-xl text-pretty text-base text-zinc-300 md:text-lg">
            Join the best fitness community and achieve your goals faster.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-orange-500 px-7 text-sm font-semibold uppercase tracking-wide text-zinc-950 shadow-xl shadow-cyan-500/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Join now
            </a>
            <a
              href="#plans"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:border-cyan-400/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              View plans
            </a>
          </div>
          <dl className="grid max-w-md grid-cols-3 gap-4 pt-4 text-xs text-zinc-400 md:text-sm">
            <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-left backdrop-blur">
              <dt className="font-display text-2xl text-white md:text-3xl">12+</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">
                Expert coaches
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-left backdrop-blur">
              <dt className="font-display text-2xl text-white md:text-3xl">24/7</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">
                Member access
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-left backdrop-blur">
              <dt className="font-display text-2xl text-white md:text-3xl">4.9</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">
                Community rating
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto hidden h-80 w-full max-w-sm shrink-0 overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_0_60px_rgba(0,0,0,0.45)] lg:mx-0 lg:block lg:h-[22rem] lg:max-w-md">
          <img
            src={HERO_PANEL_IMG}
            alt="Athlete training with a barbell at the gym"
            className="h-full w-full object-cover"
            width={900}
            height={1125}
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-black/30" />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/15" />
          <motion.div
            aria-hidden
            className="absolute -right-6 top-6 z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-sky-500/30 to-cyan-400/10 text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            animate={{ y: [0, -14, 0], rotate: [-4, 2, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Zap className="h-10 w-10" />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute -left-4 bottom-10 z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-400/40 bg-gradient-to-br from-orange-500/25 to-red-500/10 text-orange-200 shadow-[0_0_32px_rgba(251,146,60,0.35)]"
            animate={{ y: [0, 12, 0], rotate: [3, -3, 3] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Flame className="h-9 w-9" />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute left-10 top-0 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/90 backdrop-blur"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Dumbbell className="h-8 w-8 rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
