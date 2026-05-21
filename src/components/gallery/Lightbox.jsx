import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Microscope, User, Calendar, FileText } from 'lucide-react';

export default function Lightbox({ slide, onClose, onPrev, onNext, hasPrev, hasNext }) {
  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!slide) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8"
        onClick={onClose}
      >
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-6xl max-h-[90vh] glass-card overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/40"
        >
          {/* Image panel */}
          <div className="relative flex-1 min-h-[280px] lg:min-h-0 bg-ink/10 overflow-hidden">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover img-bw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />

            {/* Specimen ID */}
            <div className="absolute top-4 left-4">
              <span className="font-mono-data text-white/90 text-xs bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                {slide.specimenId}
              </span>
            </div>

            {/* Navigation arrows */}
            {hasPrev && (
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Metadata sidebar */}
          <div className="w-full lg:w-80 xl:w-96 flex flex-col bg-parchment/60 backdrop-blur-sm overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-silver/30">
              <div>
                <p className="font-mono-data text-ash text-xs mb-1">{slide.category}</p>
                <h2 className="font-playfair text-xl font-bold text-ink leading-tight">{slide.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-ink/8 flex items-center justify-center text-ash hover:bg-ink/15 hover:text-ink transition-colors flex-shrink-0 ml-3"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Metadata fields */}
            <div className="p-6 space-y-4 flex-1">
              <MetaRow icon={Microscope} label="Specimen ID" value={slide.specimenId} />
              <MetaRow icon={Microscope} label="Magnification" value={slide.magnification} />
              <MetaRow icon={FileText} label="Technique" value={slide.technique} />
              <MetaRow icon={FileText} label="Staining" value={slide.stain} />
              <MetaRow icon={User} label="Collector" value={slide.collector} />
              <MetaRow
                icon={Calendar}
                label="Date Prepared"
                value={new Date(slide.date).toLocaleDateString('en-GB', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              />

              {/* Collector's notes */}
              <div className="pt-4 border-t border-silver/30">
                <p className="font-mono-data text-ash mb-3">Collector's Notes</p>
                <p className="text-charcoal text-sm leading-relaxed">{slide.notes}</p>
              </div>
            </div>

            {/* Slide ID footer */}
            <div className="p-6 border-t border-silver/30">
              <p className="font-mono-data text-silver text-xs text-center">{slide.id}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MetaRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-lg bg-ink/6 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-ash" strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-mono-data text-ash text-xs mb-0.5">{label}</p>
        <p className="text-ink text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
