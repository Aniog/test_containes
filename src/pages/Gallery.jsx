import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { gallery } from '@/data/catalog'
import SectionEyebrow from '@/components/SectionEyebrow'
import Lightbox from '@/components/Lightbox'
import { Search, Maximize2 } from 'lucide-react'

const techniques = ['All', 'Brightfield', 'Darkfield', 'Phase contrast', 'Polarised light', 'SEM monochrome', 'Iodine stain', 'Golgi-Cox stain', 'H&E (monochrome)', 'Stereomicroscopy']

const spanClass = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  square: '',
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(() => {
    return gallery.filter((g) => {
      const matchTech = filter === 'All' || g.technique === filter
      const q = query.trim().toLowerCase()
      const matchQ =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.species.toLowerCase().includes(q) ||
        g.id.toLowerCase().includes(q)
      return matchTech && matchQ
    })
  }, [filter, query])

  const activeSlide = activeIndex !== null ? filtered[activeIndex] : null

  const close = () => setActiveIndex(null)
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length))
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))

  return (
    <div>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-10">
        <SectionEyebrow index="Vol. II" label="Plate Gallery" />
        <div className="mt-6 grid lg:grid-cols-12 gap-8 items-end">
          <h1 className="lg:col-span-7 font-serif text-5xl lg:text-7xl leading-[0.98] tracking-tight text-ink">
            Twelve digital slides, photographed in monochrome.
          </h1>
          <p className="lg:col-span-5 text-charcoal/90 leading-relaxed">
            Select a plate to open the laboratory&apos;s reader: a high-resolution view accompanied
            by specimen identifier, magnification, technique and the collector&apos;s annotated notes.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {techniques.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={[
                  'rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors border',
                  filter === t
                    ? 'bg-ink text-parchment border-ink'
                    : 'bg-white/40 backdrop-blur-md border-white/60 text-charcoal hover:bg-white/60',
                ].join(' ')}
              >
                {t}
              </button>
            ))}
          </div>

          <label className="relative w-full lg:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by species or ID…"
              className="w-full pl-9 pr-3 py-2.5 rounded-full bg-white/45 backdrop-blur-md border border-white/60 text-sm text-ink placeholder:text-graphite focus-visible:ring-2 focus-visible:ring-ink/30 outline-none"
            />
          </label>
        </div>

        <div className="mt-6 rule-double" />
      </section>

      {/* Masonry grid (CSS columns for true masonry feel + grid-style spans on larger screens) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4 lg:gap-5"
        >
          {filtered.map((slide, i) => (
            <motion.button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (i % 6) * 0.04 }}
              className={[
                'group relative overflow-hidden plate-frame text-left',
                spanClass[slide.span] || '',
              ].join(' ')}
              aria-label={`Open plate ${slide.id} — ${slide.title}`}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={slide.img}
                  alt={`${slide.title} micrograph`}
                  loading="lazy"
                  className="w-full h-full object-cover micrograph transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                {/* ID corner */}
                <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.3em] text-bone/85 bg-ink/40 backdrop-blur-sm border border-white/15 px-2 py-1 rounded">
                  {slide.id}
                </span>
                <span className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-bone opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={13} />
                </span>

                {/* Caption */}
                <div className="absolute left-3 right-3 bottom-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/70">
                    {slide.technique} · {slide.magnification}
                  </p>
                  <p className="font-serif text-bone text-lg leading-tight mt-0.5">
                    {slide.title}
                  </p>
                  <p className="font-serif italic text-bone/85 text-xs">{slide.species}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="font-serif italic text-2xl text-charcoal">
              No plates match the present filter.
            </p>
            <p className="mt-2 text-sm text-graphite">Adjust the technique or query above.</p>
          </div>
        )}
      </section>

      <Lightbox
        slide={activeSlide}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </div>
  )
}
