import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Microscope, Calendar, User, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Lightbox({ slide, onClose, onPrev, onNext, total, currentIndex }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slide]);

  if (!slide) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Blurred backdrop */}
        <div className="absolute inset-0 bg-ink/70 backdrop-blur-xl" />

        {/* Modal */}
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          ref={containerRef}
        >
          {/* Image Panel */}
          <div className="relative flex-1 min-h-[300px] lg:min-h-0 bg-ink/80 backdrop-blur-md">
            <img
              data-strk-img-id={slide.lightboxImgId}
              data-strk-img={`[lb-notes-${slide.id}] [lb-title-${slide.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.15)' }}
            />

            {/* Navigation arrows */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-3 hover:bg-white/40 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-3 hover:bg-white/40 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-1.5">
              <p className="font-mono text-xs text-white/80">
                {currentIndex + 1} / {total}
              </p>
            </div>
          </div>

          {/* Metadata Sidebar */}
          <div className="w-full lg:w-80 xl:w-96 bg-parchment/95 backdrop-blur-lg overflow-y-auto flex-shrink-0">
            <div className="p-6 md:p-8">
              {/* Close */}
              <div className="flex items-center justify-between mb-6">
                <p className="section-label">Slide Record</p>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full border border-ink/20 hover:border-ink/50 hover:bg-ink/5 transition-all"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>

              {/* Specimen ID */}
              <div className="glass-card px-4 py-3 mb-5">
                <p className="font-mono text-xs text-silver mb-0.5">Specimen ID</p>
                <p className="font-mono text-sm font-medium text-ink">{slide.id}</p>
              </div>

              {/* Title */}
              <h2 id={`lb-title-${slide.id}`} className="font-serif text-xl font-bold text-ink mb-1">
                {slide.title}
              </h2>
              <p className="font-serif text-sm italic text-ash mb-5">{slide.scientificName}</p>

              {/* Key Metadata */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: Microscope, label: 'Magnification', value: slide.magnification },
                  { icon: Tag, label: 'Category', value: slide.category },
                  { icon: User, label: 'Collector', value: slide.collector },
                  { icon: Calendar, label: 'Acquisition', value: slide.date },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg border border-fog/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-ash" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-silver">{label}</p>
                      <p className="font-sans text-sm text-ink">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Staining */}
              <div className="border-t border-fog/40 pt-5 mb-5">
                <p className="section-label mb-2">Preparation</p>
                <div className="flex flex-wrap gap-2">
                  {slide.preparation.map((p) => (
                    <span
                      key={p}
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-fog/60 text-ash"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collector's Notes */}
              <div className="border-t border-fog/40 pt-5">
                <p className="section-label mb-3">Collector's Notes</p>
                <p id={`lb-notes-${slide.id}`} className="font-sans text-sm text-charcoal leading-relaxed">
                  {slide.notes}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
