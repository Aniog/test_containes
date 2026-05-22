import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ slide, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!slide) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl bg-parchment/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-parchment hover:bg-white/30 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Image Panel */}
          <div className="relative flex-1 min-h-[300px] md:min-h-[500px] bg-ink/40 flex items-center justify-center overflow-hidden">
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.15)' }}
            />

            {/* Magnification overlay */}
            <div className="absolute bottom-4 left-4 bg-ink/70 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
              <ZoomIn className="w-3 h-3 text-parchment/80" />
              <span className="font-mono text-xs text-parchment">{slide.magnification}</span>
            </div>

            {/* Nav arrows */}
            {hasPrev && (
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-parchment hover:bg-white/25 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-parchment hover:bg-white/25 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Metadata Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0 bg-parchment/90 backdrop-blur-md p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <p className="label-caps text-graphite mb-2">{slide.category}</p>
              <h2 className="font-serif text-xl font-bold text-ink mb-1 leading-tight">{slide.title}</h2>
              <p className="font-serif text-sm italic text-graphite mb-6">{slide.latinName}</p>

              <div className="divider my-0 mb-6" />

              {/* Metadata fields */}
              <div className="space-y-4">
                {[
                  { label: 'Specimen ID', value: slide.specimenId },
                  { label: 'Magnification', value: slide.magnification },
                  { label: 'Staining Protocol', value: slide.stain },
                  { label: 'Section Plane', value: slide.section },
                  { label: 'Collector', value: slide.collector },
                  { label: 'Accession Date', value: slide.date },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="label-caps text-[10px] text-graphite mb-0.5">{field.label}</p>
                    <p className="font-mono text-sm text-ink">{field.value}</p>
                  </div>
                ))}
              </div>

              <div className="divider mb-6" />

              {/* Collector's Notes */}
              <div>
                <p className="label-caps text-[10px] text-graphite mb-2">Collector's Notes</p>
                <p className="font-sans text-xs text-charcoal leading-relaxed italic">
                  "{slide.notes}"
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-ink text-parchment rounded-full py-2.5 text-xs font-sans font-medium tracking-wide hover:bg-charcoal transition-colors">
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/50 border border-silver/40 text-ink rounded-full py-2.5 text-xs font-sans font-medium tracking-wide hover:bg-white/70 transition-colors">
                Cite Slide
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
