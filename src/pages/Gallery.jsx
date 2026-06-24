import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Maximize2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Lightbox from '@/components/microcosmos/Lightbox'
import { galleryPlates } from '@/data/specimens'

const FILTERS = [
  { id: 'all', label: 'All Plates' },
  { id: 'plant', label: 'Plant', match: ['stem', 'pinus', 'stomata', 'pollen', 'spirogyra', 'tradescantia'] },
  { id: 'protist', label: 'Protists', match: ['radiolaria', 'diatom', 'foraminifera', 'paramecium', 'hydra'] },
  { id: 'human', label: 'Cytology', match: ['cardiac', 'erythrocyte', 'neuron'] },
]

const aspectClass = {
  '1x1': 'aspect-square',
  '4x3': 'aspect-[4/3]',
  '3x2': 'aspect-[3/2]',
  '3x4': 'aspect-[3/4]',
}

export default function Gallery() {
  const containerRef = useRef(null)
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const filtered = galleryPlates.filter((p) => {
    const titleLower = p.title.toLowerCase()
    if (query && !titleLower.includes(query.toLowerCase()) && !p.collector.toLowerCase().includes(query.toLowerCase())) {
      return false
    }
    if (filter === 'all') return true
    const f = FILTERS.find((x) => x.id === filter)
    if (!f?.match) return true
    return f.match.some((m) => titleLower.includes(m))
  })

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(id)
  }, [filter, query])

  const openAt = (id) => {
    const idx = filtered.findIndex((p) => p.id === id)
    if (idx >= 0) setOpenIndex(idx)
  }

  const close = () => setOpenIndex(null)
  const prev = () => setOpenIndex((i) => (i == null ? 0 : (i - 1 + filtered.length) % filtered.length))
  const next = () => setOpenIndex((i) => (i == null ? 0 : (i + 1) % filtered.length))

  return (
    <div ref={containerRef}>
      {/* Header --------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-12">
        <div className="flex items-end justify-between gap-6 border-b border-bone pb-6">
          <p className="small-caps text-graphite">Section · III</p>
          <p className="font-mono text-xs text-graphite">/gallery</p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl text-ink mt-10 leading-[0.95]"
        >
          Slide<br /><span className="italic font-light">Archive.</span>
        </motion.h1>
        <p className="mt-8 max-w-2xl text-charcoal text-lg leading-relaxed">
          A working catalogue of digital slides. Click any plate to open a
          full-screen reading view, complete with collector's notes and
          magnification.
        </p>
      </section>

      {/* Toolbar ------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-md px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_10px_36px_rgba(26,26,26,0.06)]">
          <div className="flex flex-wrap items-center gap-1.5">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm transition border
                  ${filter === f.id
                    ? 'bg-ink text-parchment border-ink'
                    : 'bg-transparent text-charcoal border-ink/15 hover:border-ink/40 hover:text-ink'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-ink/15 min-w-[14rem]">
            <Search className="w-4 h-4 text-graphite" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search plates or collectors…"
              aria-label="Search slides"
              className="bg-transparent outline-none text-sm text-ink placeholder:text-graphite flex-1"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 mb-8 px-1">
          <p className="font-mono text-xs text-graphite">{filtered.length} of {galleryPlates.length} plates</p>
          <p className="small-caps text-graphite">Click to enlarge</p>
        </div>
      </section>

      {/* Masonry grid -------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="masonry">
          {filtered.map((plate, i) => (
            <motion.button
              key={plate.id}
              type="button"
              onClick={() => openAt(plate.id)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              whileHover="hover"
              className="block w-full text-left group"
            >
              <figure className="relative bg-parchment-dim ring-1 ring-bone p-3 rounded-sm overflow-hidden">
                <div className={`relative ${aspectClass[plate.aspect] || 'aspect-[4/3]'} overflow-hidden bg-ink`}>
                  <img
                    alt={plate.title}
                    data-strk-img-id={`gal-${plate.id}`}
                    data-strk-img={`[gal-title-${plate.id}] black and white microscopy`}
                    data-strk-img-ratio={plate.aspect}
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover grayscale contrast-110 transition duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Hover glass overlay */}
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] grid place-items-center"
                  >
                    <span className="grid place-items-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-parchment">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </motion.div>
                  <span className="absolute top-2.5 left-2.5 small-caps text-parchment/95 bg-ink/55 backdrop-blur-sm px-2 py-0.5 rounded">
                    {plate.mag}
                  </span>
                </div>
                <figcaption className="pt-3 pb-1 px-1 flex items-baseline justify-between gap-3">
                  <h3 id={`gal-title-${plate.id}`} className="font-serif text-lg text-ink leading-tight">{plate.title}</h3>
                  <span className="font-mono text-[10px] text-graphite shrink-0">№ {plate.id.toUpperCase()}</span>
                </figcaption>
                <p className="px-1 pb-1 text-charcoal text-xs">{plate.collector} · {plate.year}</p>
              </figure>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 border-t border-bone">
            <p className="font-serif text-2xl text-ink">No plates match your search.</p>
            <p className="mt-2 text-graphite">Try clearing the filter or searching another collector.</p>
          </div>
        )}
      </section>

      <Lightbox
        open={openIndex !== null}
        plates={filtered}
        index={openIndex ?? 0}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </div>
  )
}
