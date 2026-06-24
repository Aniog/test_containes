import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Telescope, FlaskConical, BookOpen } from 'lucide-react'
import SectionEyebrow from '@/components/SectionEyebrow'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

export default function Home() {
  return (
    <div>
      {/* === HERO ============================================================== */}
      <section className="relative -mt-24 h-[100svh] min-h-[680px] w-full overflow-hidden">
        {/* Background micrograph */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center micrograph"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=2400&q=80)',
          }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/45 to-ink/75" />
        <div aria-hidden className="absolute inset-0 paper-texture-strong opacity-25 mix-blend-overlay" />

        {/* Crosshair guides */}
        <div aria-hidden className="absolute inset-6 sm:inset-10 ring-1 ring-bone/15 pointer-events-none" />
        <div aria-hidden className="absolute left-1/2 top-6 sm:top-10 bottom-6 sm:bottom-10 w-px bg-bone/15 pointer-events-none" />
        <div aria-hidden className="absolute top-1/2 left-6 sm:left-10 right-6 sm:right-10 h-px bg-bone/15 pointer-events-none" />

        {/* Top labels */}
        <div className="absolute top-28 left-6 sm:left-12 z-10 hidden md:flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/80">
            Plate 00 · Frontispiece
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/60">
            Specimen · Radiolarian Test
          </span>
        </div>
        <div className="absolute top-28 right-6 sm:right-12 z-10 hidden md:flex flex-col items-end gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/80">
            Magnification · 600×
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/60">
            N.A. 1.30 · Oil immersion
          </span>
        </div>

        {/* Glass title card */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl rounded-3xl bg-white/12 backdrop-blur-xl border border-white/20 p-8 sm:p-12 text-center text-bone shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-bone/75">
              Vol. I · A field journal of cellular structure
            </p>
            <h1 className="mt-5 font-serif text-5xl sm:text-7xl leading-[0.95] tracking-tight">
              MicroCosmos
              <span className="block font-serif italic font-normal text-bone/85 text-3xl sm:text-4xl mt-3">
                The Microscopic World
              </span>
            </h1>

            <div className="my-7 mx-auto flex items-center justify-center gap-3">
              <span className="block w-12 h-px bg-bone/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/70">
                Anno MMXXVI
              </span>
              <span className="block w-12 h-px bg-bone/60" />
            </div>

            <p className="mx-auto max-w-xl text-bone/85 text-[15px] leading-relaxed">
              An academic atlas of plant histology, single-celled life and human cytology — composed
              for students of biology and microscopy in the spirit of the great twentieth-century
              scientific journals.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/specimens"
                className="inline-flex items-center gap-2 rounded-full bg-bone text-ink px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
              >
                Start Observation
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-bone px-6 py-3 text-sm font-medium hover:bg-white/25 transition-colors"
              >
                Browse the Plates
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-10 px-6 sm:px-12">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-bone/70">
            <span>Fig. 00·1 · Reticular skeleton</span>
            <span className="hidden sm:block">Stain · None · Polarised light</span>
            <span>Scale bar · 10 μm</span>
          </div>
        </div>
      </section>

      {/* === INTRO ============================================================ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionEyebrow index="§ 01" label="Introduction" />
            <h2 className="mt-6 font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight text-ink">
              An invitation to look closely.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="drop-cap text-lg text-charcoal leading-relaxed">
              Beneath the unaided eye lies an architecture of unimaginable detail. From the ribbed
              silica cathedral of a diatom to the helical chloroplasts of <em>Spirogyra</em>, the
              microscopic realm rewards patient observation with structural beauty and physiological
              insight. This atlas gathers our laboratory&apos;s plates, prepared with classical
              staining methods and photographed in the high-contrast monochrome of the scientific press.
            </p>
            <p className="mt-5 text-charcoal leading-relaxed">
              Each entry is accompanied by metadata in the manner of the standard slide register:
              specimen identifier, magnification, technique, and the collector&apos;s annotations.
              We hope these records serve both as study material and as quiet provocation toward
              further inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* === FEATURE TRIO ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Telescope size={20} strokeWidth={1.5} />,
              tag: 'I',
              title: 'Catalogued Specimens',
              body: 'Three principal kingdoms surveyed: plant histology, protistan single-celled life and human cytology.',
              to: '/specimens',
              cta: 'View specimens',
            },
            {
              icon: <FlaskConical size={20} strokeWidth={1.5} />,
              tag: 'II',
              title: 'Plate Gallery',
              body: 'A masonry of digitised slides photographed in monochrome under brightfield, darkfield, and phase contrast.',
              to: '/gallery',
              cta: 'Open the gallery',
            },
            {
              icon: <BookOpen size={20} strokeWidth={1.5} />,
              tag: 'III',
              title: 'Lab Notes',
              body: 'Submit your observations, request preparation guides, or correspond with the editors of the journal.',
              to: '/contact',
              cta: 'Send a note',
            },
          ].map((f) => (
            <motion.div key={f.tag} {...fadeUp} viewport={{ once: true }} className="h-full">
              <Link
                to={f.to}
                className="group flex h-full flex-col rounded-2xl bg-white/45 backdrop-blur-md border border-white/55 p-7 shadow-[0_10px_30px_-20px_rgba(26,26,26,0.35)] hover:shadow-[0_18px_50px_-22px_rgba(26,26,26,0.4)] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-ink text-parchment">
                    {f.icon}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-graphite">
                    Section {f.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ink leading-tight">{f.title}</h3>
                <p className="mt-3 text-sm text-charcoal/90 leading-relaxed flex-1">{f.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                  <span className="border-b border-ink/40 group-hover:border-ink">{f.cta}</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === BANNER QUOTE ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="rule-double mb-10" />
        <blockquote className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2 font-mono text-[11px] uppercase tracking-[0.32em] text-graphite">
            Marginalia
            <br /> Folio 12·b
          </div>
          <p className="lg:col-span-10 font-serif italic text-3xl lg:text-4xl leading-snug text-ink">
            “In the structure of the smallest things, we recognise the order of the universe.
            The microscope is, before any instrument of measurement, an instrument of attention.”
            <span className="block mt-4 not-italic font-sans text-sm uppercase tracking-[0.3em] text-graphite">
              — Editors&apos; preface
            </span>
          </p>
        </blockquote>
      </section>
    </div>
  )
}
