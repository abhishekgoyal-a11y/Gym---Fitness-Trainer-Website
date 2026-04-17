import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { CONTACT } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Visit / Call"
          title="Let’s Train Together"
          subtitle="Tell us your goals—we’ll match you with the right coach and membership."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]"
        >
          <div className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur md:p-8">
            <a
              href={CONTACT.phoneHref}
              className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/30 p-4 transition hover:border-cyan-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Phone</span>
                <span className="mt-1 block text-lg font-semibold text-white">{CONTACT.phone}</span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/30 p-4">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-orange-500/15 text-orange-200">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Location</span>
                <span className="mt-1 block text-lg font-semibold text-white">{CONTACT.address}</span>
              </span>
            </div>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 text-sm font-semibold uppercase tracking-wide text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
              alt="FitZone gym interior with training equipment"
              className="h-full min-h-[220px] w-full object-cover md:min-h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-sm text-zinc-200 md:text-base">
              Night-lane parking · Premium locker rooms · Recovery tools on deck
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
