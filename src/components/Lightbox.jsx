import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Microscope, Calendar, User, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Lightbox({ slide, onClose, onPrev, onNext }) {
  const lightboxRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (lightboxRef.current && slide) {
      ImageHelper.loadImages(strkImgConfig, lightboxRef.current);
    }
  }, [slide]);

  if (!slide) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-6xl bg-parchment/95 backdrop-blur-xl border border-mist/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
          ref={lightboxRef}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-ink/10 hover:bg-ink/20 border border-ink/15 transition-all duration-200"
            aria-label="Close lightbox"
          >
            <X className="w-4 h-4 text-ink" />
          </button>

          {/* Image panel */}
          <div className="relative flex-1 min-h-[300px] md:min-h-[500px] bg-ink/5">
            <img
              data-strk-img-id={`lightbox-${slide.imgId}`}
              data-strk-img={slide.imgQuery}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Navigation arrows */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Magnification badge */}
            <div className="absolute bottom-4 left-4 bg-ink/70 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-full border border-white/15">
              {slide.magnification}
            </div>
          </div>

          {/* Metadata sidebar */}
          <div className="w-full md:w-80 p-7 flex flex-col gap-6 border-t md:border-t-0 md:border-l border-mist/60 overflow-y-auto max-h-[500px] md:max-h-none">
            {/* Specimen ID */}
            <div>
              <p className="section-label mb-1">Specimen ID</p>
              <p className="font-mono text-sm text-ink font-medium">{slide.id}</p>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink leading-tight mb-1">
                {slide.title}
              </h2>
              <p className="font-serif text-sm italic text-graphite">{slide.latinName}</p>
            </div>

            {/* Technical specs */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Microscope, label: 'Magnification', value: slide.magnification },
                { icon: Tag,        label: 'Stain',         value: slide.stain },
                { icon: User,       label: 'Collector',     value: slide.collector },
                { icon: Calendar,   label: 'Acquired',      value: slide.date },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-ink/4 border border-mist/60 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="w-3 h-3 text-graphite" strokeWidth={1.5} />
                    <span className="text-xs font-sans text-graphite tracking-wide">{label}</span>
                  </div>
                  <div className="font-mono text-xs font-medium text-ink">{value}</div>
                </div>
              ))}
            </div>

            {/* Collector's notes */}
            <div>
              <p className="section-label mb-2">Collector's Notes</p>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                {slide.notes}
              </p>
            </div>

            {/* Tags */}
            <div>
              <p className="section-label mb-2">Classification</p>
              <div className="flex flex-wrap gap-2">
                {slide.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-ink/8 border border-ink/12 text-xs font-sans text-charcoal">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
