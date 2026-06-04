import { useEffect, useRef } from 'react';
import { X, Ruler, Hash, User, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Lightbox({ slide, onClose }) {
  const overlayRef = useRef(null);
  const lightboxRef = useRef(null);

  useEffect(() => {
    if (lightboxRef.current) {
      return ImageHelper.loadImages(strkImgConfig, lightboxRef.current);
    }
  }, [slide]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      >
        <div className="absolute inset-0 bg-ink/70 backdrop-blur-xl" />

        <motion.div
          ref={lightboxRef}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] glass-card overflow-hidden flex flex-col md:flex-row"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center
                       hover:bg-white/40 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-ink" />
          </button>

          {/* Image Panel */}
          <div className="md:w-3/5 bg-parchment-dark flex items-center justify-center p-4 min-h-[300px]">
            <img
              alt={slide.title}
              data-strk-img-id={`lightbox-${slide.id}`}
              data-strk-img={`[lightbox-desc-${slide.id}] [lightbox-title-${slide.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="max-w-full max-h-[70vh] object-contain rounded-md shadow-lg"
            />
          </div>

          {/* Metadata Sidebar */}
          <div className="md:w-2/5 p-6 md:p-8 flex flex-col overflow-y-auto">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-1">
              Digital Slide
            </p>
            <h2
              id={`lightbox-title-${slide.id}`}
              className="font-serif text-xl md:text-2xl font-bold text-ink mb-1"
            >
              {slide.title}
            </h2>
            <p
              id={`lightbox-desc-${slide.id}`}
              className="font-serif italic text-sm text-ink-muted mb-6"
            >
              {slide.species}
            </p>

            <div className="space-y-4">
              <MetadataRow icon={Hash} label="Specimen ID" value={slide.specimenId} />
              <MetadataRow icon={Ruler} label="Magnification" value={slide.magnification} />
              <MetadataRow icon={User} label="Collected By" value={slide.collector} />
              <MetadataRow icon={Calendar} label="Date" value={slide.date} />
            </div>

            <div className="w-full h-px bg-ink/10 my-6" />

            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint mb-2">
                Collector&rsquo;s Notes
              </p>
              <p className="font-sans text-sm text-ink-light leading-relaxed italic">
                &ldquo;{slide.notes}&rdquo;
              </p>
            </div>

            <div className="mt-auto pt-6">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint mb-1">
                Staining Method
              </p>
              <p className="font-sans text-sm text-ink-muted">
                {slide.stain}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MetadataRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-4 h-4 text-ink-faint mt-0.5 shrink-0" />
      <div>
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-faint">
          {label}
        </p>
        <p className="font-sans text-sm text-ink font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}