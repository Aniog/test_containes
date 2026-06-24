import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Hash, Aperture, Microscope, User, Calendar } from 'lucide-react'

/**
 * Lightbox — full-screen frosted glass overlay for a single slide.
 */
export default function Lightbox({ slide, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (!slide) return
    if (e.key === 'Escape') onClose?.()
    if (e.key === 'ArrowRight') onNext?.()
    if (e.key === 'ArrowLeft') onPrev?.()
  }, [slide, onClose, onNext, onPrev])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => {
    if (slide) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = original }
    }
  }, [slide])

  return (
    <AnimatePresence>
      {slide && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          {/* Backdrop: blurred glass over a dimmed parchment field */}
          <button
            aria-label="Close lightbox"
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-2xl"
          />

          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl max-h-[88vh] grid lg:grid-cols-[1.45fr_1fr] gap-0 rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
          >
            {/* Image side */}
            <div className="relative bg-ink/80">
              <img
                src={slide.img}
                alt={`${slide.title} micrograph`}
                className="w-full h-[42vh] lg:h-[88vh] object-cover micrograph"
              />
              {/* Reticle */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 ring-1 ring-bone/20 m-4" />
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-bone/25" />
                <div className="absolute top-1/2 left-4 right-4 h-px bg-bone/25" />
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/85 bg-ink/40 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded">
                  {slide.id}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/85 bg-ink/40 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded">
                  {slide.magnification}
                </span>
              </div>
              {/* Prev / Next */}
              <button
                aria-label="Previous slide"
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-bone hover:bg-white/25"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next slide"
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-bone hover:bg-white/25"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Sidebar */}
            <aside className="relative bg-[rgba(242,240,233,0.92)] text-ink p-6 lg:p-8 overflow-y-auto thin-scroll">
              <button
                aria-label="Close"
                onClick={onClose}
                className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-ink/10 text-ink hover:bg-white"
              >
                <X size={18} />
              </button>

              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-graphite">
                Plate · {slide.id}
              </p>
              <h2 className="mt-2 font-serif text-3xl lg:text-4xl text-ink leading-tight">
                {slide.title}
              </h2>
              <p className="mt-2 font-serif italic text-charcoal text-lg">{slide.species}</p>

              <div className="my-5 rule-double" />

              <dl className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                <Meta icon={<Hash size={14} />} label="Specimen ID" value={slide.id} mono />
                <Meta icon={<Microscope size={14} />} label="Magnification" value={slide.magnification} mono />
                <Meta icon={<Aperture size={14} />} label="Technique" value={slide.technique} />
                <Meta icon={<Calendar size={14} />} label="Date logged" value={slide.date} />
                <Meta
                  icon={<User size={14} />}
                  label="Collector"
                  value={slide.collector}
                  className="col-span-2"
                />
              </dl>

              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
                  Collector’s notes
                </p>
                <p className="mt-2 text-charcoal text-[15px] leading-relaxed">{slide.notes}</p>
              </div>

              <div className="mt-8 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">
                  Navigation
                </p>
                <p className="mt-1.5 text-xs text-charcoal/80">
                  Use ← → keys to traverse plates, or press Esc to close.
                </p>
              </div>
            </aside>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Meta({ icon, label, value, mono = false, className = '' }) {
  return (
    <div className={className}>
      <dt className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-graphite">
        <span aria-hidden>{icon}</span>
        {label}
      </dt>
      <dd className={`mt-1 ${mono ? 'font-mono' : 'font-sans'} text-ink`}>{value}</dd>
    </div>
  )
}
