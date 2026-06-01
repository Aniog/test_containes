import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Microscope, User, Calendar, Tag } from 'lucide-react';

export default function Lightbox({ slide, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Slide: ${slide.title}`}
      >
        {/* Blurred backdrop */}
        <div className="absolute inset-0 bg-ink/75 backdrop-blur-xl" />

        {/* Modal content */}
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row
                     bg-parchment/95 backdrop-blur-lg rounded-3xl overflow-hidden
                     border border-white/20 shadow-2xl shadow-black/40"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Panel */}
          <div className="relative flex-1 min-h-[300px] md:min-h-0 bg-ink overflow-hidden">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
              
            />

            {/* Magnification overlay */}
            <div className="absolute top-4 left-4 glass-card rounded-xl px-4 py-2 border-white/30">
              <div className="flex items-center gap-2">
                <Microscope className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                <span className="font-mono text-sm font-medium text-ink">{slide.magnification}</span>
              </div>
            </div>

            {/* Specimen ID */}
            <div className="absolute top-4 right-4 bg-ink/70 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="font-mono text-xs text-parchment/80 tracking-widest uppercase">
                {slide.specimenId}
              </span>
            </div>

            {/* Navigation arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20
                           flex items-center justify-center transition-all duration-200
                           hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-parchment" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                onClick={onNext}
                disabled={!hasNext}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20
                           flex items-center justify-center transition-all duration-200
                           hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-parchment" />
              </button>
            </div>
          </div>

          {/* Metadata Sidebar */}
          <div className="w-full md:w-80 flex flex-col overflow-y-auto border-t md:border-t-0 md:border-l border-ink/10">
            {/* Header */}
            <div className="p-6 border-b border-ink/8">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-1">
                    {slide.domain}
                  </p>
                  <h2 className="font-serif text-xl font-bold text-ink leading-tight">
                    {slide.title}
                  </h2>
                  <p className="font-sans text-xs italic text-mid-grey mt-1">{slide.latinName}</p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-ink/8 border border-ink/10
                             flex items-center justify-center hover:bg-ink hover:text-parchment
                             transition-all duration-200"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>
            </div>

            {/* Metadata fields */}
            <div className="p-6 space-y-5 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card-dark rounded-xl p-3">
                  <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-1">
                    Magnification
                  </p>
                  <p className="font-serif text-lg font-bold text-ink">{slide.magnification}</p>
                </div>
                <div className="glass-card-dark rounded-xl p-3">
                  <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-1">
                    Specimen ID
                  </p>
                  <p className="font-mono text-sm font-medium text-ink">{slide.specimenId}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-ink/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Tag className="w-3.5 h-3.5 text-mid-grey" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-0.5">Staining Protocol</p>
                    <p className="font-sans text-sm text-charcoal">{slide.stain}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-ink/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5 text-mid-grey" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-0.5">Collector</p>
                    <p className="font-sans text-sm text-charcoal">{slide.collector}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-ink/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-mid-grey" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey mb-0.5">Acquisition Date</p>
                    <p className="font-sans text-sm text-charcoal">{slide.date}</p>
                  </div>
                </div>
              </div>

              {/* Collector's Notes */}
              <div className="pt-4 border-t border-ink/8">
                <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-3">
                  Collector's Notes
                </p>
                <blockquote className="font-serif text-sm italic text-charcoal leading-relaxed
                                       border-l-2 border-ink/20 pl-4">
                  "{slide.notes}"
                </blockquote>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-ink/8">
                <p className="font-mono text-[10px] tracking-widest uppercase text-mid-grey mb-3">
                  Classification Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {slide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-ink/6 border border-ink/10
                                 font-mono text-[10px] tracking-wide text-charcoal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-ink/8 bg-ink/3">
              <p className="font-mono text-[9px] tracking-widest uppercase text-mid-grey text-center">
                MicroCosmos Digital Slide Archive · {slide.specimenId}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
