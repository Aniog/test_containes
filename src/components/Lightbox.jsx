import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Download } from 'lucide-react';

export default function Lightbox({ slide, slides, onClose, onNavigate }) {
  const currentIndex = slides.findIndex((s) => s.id === slide.id);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    onNavigate(slides[prevIndex]);
  }, [currentIndex, slides, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    onNavigate(slides[nextIndex]);
  }, [currentIndex, slides, onNavigate]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Viewing: ${slide.name}`}
      >
        {/* Main container — stop propagation so clicking inside doesn't close */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-glass-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Panel */}
          <div className="flex-1 relative bg-black/30 flex items-center justify-center min-h-[300px] md:min-h-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                src={slide.imgSrc}
                alt={slide.name}
                className="w-full h-full object-contain max-h-[60vh] md:max-h-[85vh]"
                style={{ filter: 'grayscale(100%) contrast(1.12)' }}
              />
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/15">
              <span className="font-mono text-xs text-white/70">
                {currentIndex + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* Metadata Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0 bg-white/8 backdrop-blur-md border-t md:border-t-0 md:border-l border-white/15 p-6 md:p-8 flex flex-col overflow-y-auto">
            {/* Close button */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-inter text-xs text-white/50 tracking-widest uppercase">
                Specimen Record
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Specimen ID */}
            <div className="mb-6">
              <p className="font-mono text-xs text-white/50 tracking-wider mb-1">
                {slide.specimenId}
              </p>
              <h2 className="font-playfair text-xl font-semibold text-white leading-snug">
                {slide.name}
              </h2>
              {slide.latinName && (
                <p className="font-playfair text-sm italic text-white/60 mt-1">
                  {slide.latinName}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-white/15 mb-6" />

            {/* Technical Metadata */}
            <div className="space-y-4 mb-6">
              {[
                { label: 'Magnification', value: slide.magnification },
                { label: 'Staining Protocol', value: slide.stain },
                { label: 'Imaging Method', value: slide.method },
                { label: 'Domain', value: slide.domain },
                { label: 'Collector', value: slide.collector },
                { label: 'Date Acquired', value: slide.date },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-inter text-xs text-white/40 tracking-widest uppercase mb-0.5">
                    {label}
                  </p>
                  <p className="font-inter text-sm text-white/85 font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/15 mb-6" />

            {/* Collector's Notes */}
            <div className="flex-1">
              <p className="font-inter text-xs text-white/40 tracking-widest uppercase mb-3">
                Collector's Notes
              </p>
              <p className="font-inter text-sm text-white/70 leading-relaxed">
                {slide.notes}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white/80 font-inter text-xs font-medium hover:bg-white/20 transition-colors">
                <ZoomIn className="w-3.5 h-3.5" />
                Zoom
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white/80 font-inter text-xs font-medium hover:bg-white/20 transition-colors">
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
