import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

// Resolve a high-resolution URL for a plate by reusing the gallery card's
// already-resolved entry from strk-img-config.json. The gallery cards use the
// id pattern `gal-${plate.id}`, so the lightbox piggy-backs on those entries
// and avoids round-tripping through ImageHelper at runtime.
function resolvePlateUrl(plate) {
  if (!plate || !plate.id) return ''
  const entry = strkImgConfig[`gal-${plate.id}`]
  if (!entry) return ''
  const results = Array.isArray(entry.results) ? entry.results : []
  if (!results.length) return ''
  const picked = entry.picked
  const match = (picked && results.find((r) => r && r.id === picked)) || results[0]
  return (match && match.url) || ''
}

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Lightbox({ open, plates, index, onClose, onPrev, onNext }) {
  const containerRef = useRef(null)
  const safeIndex = typeof index === 'number' && index >= 0 ? index : 0
  const plate = plates && plates.length ? plates[safeIndex] : null
  const imageUrl = resolvePlateUrl(plate)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {open && plate && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
        >
          {/* Frosted backdrop — dark ink to give the glass real depth */}
          <button
            aria-label="Close lightbox"
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-2xl"
          />

          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-6xl grid lg:grid-cols-[1.65fr_1fr] gap-4 lg:gap-6"
          >
            {/* Image plate ----------------------------------------------- */}
            <div className="relative rounded-2xl overflow-hidden bg-ink ring-1 ring-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[78vh] relative bg-ink">
                <img
                  key={plate.id}
                  alt={plate.title}
                  src={imageUrl || PLACEHOLDER_SRC}
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>

              {/* Plate label overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                  className="small-caps bg-ink/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full"
                  style={{ color: '#F2F0E9' }}
                >
                  Specimen № {plate.id.toUpperCase()}
                </span>
              </div>

              {/* DEBUG: show resolution result in the AX tree */}
              <div
                aria-label={`debug url ${imageUrl ? 'OK' : 'EMPTY'} ${(imageUrl || '').slice(0, 80)}`}
                className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/70 px-2 py-1 rounded"
                style={{ color: '#F2F0E9', maxWidth: '90%', wordBreak: 'break-all' }}
              >
                {imageUrl ? `URL: ${imageUrl.slice(0, 70)}…` : 'URL: (empty)'}
              </div>

              {/* Prev / Next */}
              <button
                onClick={(e) => { e.stopPropagation(); onPrev() }}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
                style={{ color: '#F2F0E9' }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext() }}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
                style={{ color: '#F2F0E9' }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Metadata sidebar — fully opaque parchment for bullet-proof
                contrast. The frosted-glass effect comes from the inset white
                hairline + drop-shadow, not from background translucency. */}
            <aside
              className="relative rounded-2xl border border-white/60 p-7 lg:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden"
              style={{ backgroundColor: '#F2F0E9', color: '#1A1A1A' }}
            >

              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 grid place-items-center w-9 h-9 rounded-full bg-white/70 border border-black/10 hover:bg-white transition"
                style={{ color: '#1A1A1A' }}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative">
                <p className="small-caps" style={{ color: '#5C5C5C' }}>
                  Plate {String(safeIndex + 1).padStart(2, '0')} · {plate.year}
                </p>
                <h2
                  className="font-serif text-3xl lg:text-4xl mt-3 leading-[1.1]"
                  style={{ color: '#1A1A1A' }}
                >
                  {plate.title}
                </h2>

                <div className="mt-7 h-px" style={{ backgroundColor: 'rgba(26,26,26,0.18)' }} />

                <dl className="mt-6 grid grid-cols-3 gap-y-5 text-sm">
                  <dt className="small-caps col-span-1" style={{ color: '#5C5C5C' }}>Specimen</dt>
                  <dd className="col-span-2 font-mono" style={{ color: '#1A1A1A' }}>
                    № {plate.id.toUpperCase()}
                  </dd>

                  <dt className="small-caps col-span-1" style={{ color: '#5C5C5C' }}>Magnif.</dt>
                  <dd className="col-span-2 font-mono" style={{ color: '#1A1A1A' }}>
                    {plate.mag}
                  </dd>

                  <dt className="small-caps col-span-1" style={{ color: '#5C5C5C' }}>Collector</dt>
                  <dd className="col-span-2" style={{ color: '#1A1A1A' }}>{plate.collector}</dd>

                  <dt className="small-caps col-span-1" style={{ color: '#5C5C5C' }}>Year</dt>
                  <dd className="col-span-2 font-mono" style={{ color: '#1A1A1A' }}>
                    {plate.year}
                  </dd>
                </dl>

                <div className="mt-7 h-px" style={{ backgroundColor: 'rgba(26,26,26,0.18)' }} />

                <p className="mt-6 small-caps" style={{ color: '#5C5C5C' }}>
                  Collector's Notes
                </p>
                <p
                  className="mt-3 leading-relaxed text-[15px] italic font-serif"
                  style={{ color: '#3A3A3A' }}
                >
                  &ldquo;Mounted in Canada balsam. Observed under brightfield illumination.
                  Specimen displays exceptional preservation of fine structural detail &mdash;
                  an instructive plate for the introductory cytology course.&rdquo;
                </p>

                <div
                  className="mt-8 flex items-center justify-between text-xs font-mono"
                  style={{ color: '#5C5C5C' }}
                >
                  <span>0.01 mm reticle</span>
                  <span>{safeIndex + 1} / {plates.length}</span>
                </div>
              </div>
            </aside>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
