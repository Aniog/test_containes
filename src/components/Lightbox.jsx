import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Lightbox({ slide, slides, onClose, onPrev, onNext }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;
    // Small delay ensures the motion.div animation frame has committed the ref
    const id = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, modalRef.current);
    });
    return () => cancelAnimationFrame(id);
  }, [slide]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!slide) return null;

  const currentIndex = slides.findIndex((s) => s.id === slide.id);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Blurred backdrop */}
        <div className="absolute inset-0 backdrop-blur-xl bg-ink/80" />

        {/* Modal container */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row
            backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center
              backdrop-blur-md bg-white/20 border border-white/20 rounded-full
              text-white hover:bg-white/40 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Image panel */}
          <div className="relative flex-1 min-h-[300px] md:min-h-0 bg-ink/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-pulse" />
            <img
              data-strk-img-id={slide.lbImgId}
              data-strk-img={`[${slide.lbNotesId}] [${slide.lbTitleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={slide.preloadedUrl || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
              alt={slide.title}
              className="relative z-10 w-full h-full object-contain max-h-[60vh] md:max-h-[80vh]"
              style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.95)' }}
            />

            {/* Magnification badge */}
            <div className="absolute bottom-4 left-4 backdrop-blur-md bg-ink/60 border border-white/10
              rounded-lg px-3 py-1.5 flex items-center gap-2">
              <ZoomIn className="w-3.5 h-3.5 text-silver" />
              <span className="font-mono text-xs text-parchment">{slide.magnification}</span>
            </div>

            {/* Prev / Next */}
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center
                backdrop-blur-md bg-white/15 border border-white/15 rounded-full
                text-white hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center
                backdrop-blur-md bg-white/15 border border-white/15 rounded-full
                text-white hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Metadata sidebar */}
          <div className="w-full md:w-80 flex-shrink-0 p-6 md:p-8 flex flex-col gap-5
            border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">

            {/* Specimen ID */}
            <div>
              <p className="font-inter text-xs tracking-widest uppercase text-white/50 mb-1">
                Specimen ID
              </p>
              <p className="font-mono text-sm text-parchment font-medium">{slide.specimenId}</p>
            </div>

            {/* Title */}
            <div>
              <p className="font-inter text-xs tracking-widest uppercase text-white/50 mb-1">
                Common Name
              </p>
              <h2 id={slide.lbTitleId} className="font-playfair text-xl font-semibold text-parchment leading-snug">
                {slide.title}
              </h2>
            </div>

            {/* Scientific name */}
            <div>
              <p className="font-inter text-xs tracking-widest uppercase text-white/50 mb-1">
                Scientific Name
              </p>
              <p className="font-playfair italic text-sm text-parchment/80">{slide.scientificName}</p>
            </div>

            {/* Metadata grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Magnification', value: slide.magnification },
                { label: 'Stain Protocol', value: slide.stain },
                { label: 'Category', value: slide.category },
                { label: 'Preparation', value: slide.preparation },
              ].map((m) => (
                <div key={m.label} className="backdrop-blur-sm bg-white/8 border border-white/10 rounded-lg p-2.5">
                  <p className="font-inter text-xs text-white/40 mb-0.5">{m.label}</p>
                  <p className="font-mono text-xs text-parchment font-medium">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Collector's Notes */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Microscope className="w-3.5 h-3.5 text-white/40" strokeWidth={1.5} />
                <p className="font-inter text-xs tracking-widest uppercase text-white/50">
                  Collector's Notes
                </p>
              </div>
              <p id={slide.lbNotesId} className="font-inter text-xs text-parchment/70 leading-relaxed">
                {slide.notes}
              </p>
            </div>

            {/* Slide counter */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-white/40">
                {currentIndex + 1} / {slides.length}
              </span>
              <div className="flex gap-1">
                {slides.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((s, i) => (
                  <div
                    key={s.id}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      s.id === slide.id ? 'bg-parchment' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
