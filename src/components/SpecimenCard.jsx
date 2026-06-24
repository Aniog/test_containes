import { motion } from 'framer-motion'
import GlassTooltip from './GlassTooltip'
import { ArrowUpRight } from 'lucide-react'

/**
 * SpecimenCard — used on the Specimen Hub.
 * Renders an asymmetric layout where image and text-block alternate.
 */
export default function SpecimenCard({ specimen, index, terms = {} }) {
  const isReversed = index % 2 === 1

  // Render summary, replacing [term] occurrences with tooltips when defined.
  const renderWithTooltips = (text) => {
    const tokens = text.split(/(\[[^\]]+\])/g)
    return tokens.map((tok, i) => {
      const m = tok.match(/^\[([^\]]+)\]$/)
      if (!m) return <span key={i}>{tok}</span>
      const key = m[1].toLowerCase()
      const def = terms[key]
      if (!def) return <span key={i}>{m[1]}</span>
      return (
        <GlassTooltip key={i} term={m[1]} definition={def}>
          {m[1]}
        </GlassTooltip>
      )
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'grid lg:grid-cols-12 gap-8 lg:gap-12 items-center',
        isReversed ? 'lg:[&>*:first-child]:order-2' : '',
      ].join(' ')}
    >
      {/* Image plate */}
      <div className={['lg:col-span-7', isReversed ? 'lg:col-start-6' : ''].join(' ')}>
        <figure className="plate-frame relative">
          <div className="relative overflow-hidden">
            <img
              src={specimen.img}
              alt={`${specimen.binomial} micrograph`}
              loading="lazy"
              className="w-full h-[420px] lg:h-[520px] object-cover micrograph"
            />
            {/* Crosshair overlay */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 ring-1 ring-bone/30 m-3" />
              <div className="absolute left-1/2 top-3 bottom-3 w-px bg-bone/30" />
              <div className="absolute top-1/2 left-3 right-3 h-px bg-bone/30" />
              <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-bone/80 bg-ink/40 backdrop-blur-sm px-2 py-1">
                {specimen.id}
              </span>
              <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest text-bone/80 bg-ink/40 backdrop-blur-sm px-2 py-1">
                {specimen.magnification}
              </span>
            </div>
          </div>
          <figcaption className="mt-3 px-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">
            <span>{specimen.plate}</span>
            <span className="italic font-serif normal-case tracking-normal text-charcoal">
              {specimen.binomial}
            </span>
          </figcaption>
        </figure>
      </div>

      {/* Text block */}
      <div className={['lg:col-span-5', isReversed ? 'lg:col-start-1 lg:row-start-1' : ''].join(' ')}>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-graphite">
          {specimen.kingdom} · Specimen N° {specimen.id}
        </p>
        <h3 className="mt-3 font-serif text-4xl lg:text-5xl text-ink leading-[1.05] tracking-tight">
          {specimen.name}
        </h3>
        <p className="mt-3 font-serif italic text-charcoal text-lg">{specimen.accent}</p>

        <div className="my-6 flex items-center gap-3">
          <span className="block w-12 h-px bg-ink" />
          <span aria-hidden className="block w-1.5 h-1.5 rounded-full bg-ink" />
          <span className="block flex-1 h-px bg-ink/30" />
        </div>

        <p className="text-charcoal text-base leading-relaxed">
          {renderWithTooltips(specimen.summary)}
        </p>

        <div className="mt-6 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
            Preparation
          </p>
          <p className="mt-2 text-sm text-charcoal/90 leading-relaxed">{specimen.notes}</p>
        </div>

        <a
          href="/gallery"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink group"
        >
          <span className="border-b border-ink/40 group-hover:border-ink transition-colors">
            View related plates
          </span>
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  )
}
