import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, User, Layers, FlaskConical, FileText } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Lightbox({ slide, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, modalRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slide?.id]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!slide) return null;

  const META = [
    { icon: Layers, label: 'Specimen ID', value: slide.id },
    { icon: ZoomIn, label: 'Magnification', value: slide.magnification },
    { icon: FlaskConical, label: 'Stain / Method', value: slide.stain },
    { icon: User, label: 'Collector', value: slide.collector },
    { icon: Calendar, label: 'Acquisition Date', value: slide.date },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="glass-overlay fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl flex flex-col md:flex-row"
          style={{
            background: 'rgba(242,240,233,0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.30)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
          }}
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-white/60 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-4 h-4 text-ink" />
          </button>

          {/* Image panel */}
          <div className="md:w-3/5 flex-shrink-0 bg-ink/5">
            <div className="h-64 md:h-full relative overflow-hidden">
              <img
                data-strk-img-id={`lb-${slide.imgId}`}
                data-strk-img={`[lb-desc-${slide.id}] [lb-title-${slide.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(1) contrast(1.2) brightness(0.92)' }}
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(transparent, rgba(26,26,26,0.7))' }}>
                <p className="specimen-label text-white/60 text-[0.6rem]" id={`lb-title-${slide.id}`}>{slide.specimen}</p>
                <p className="font-playfair text-lg font-bold text-parchment" id={`lb-desc-${slide.id}`}>{slide.title}</p>
              </div>
            </div>
          </div>

          {/* Metadata sidebar */}
          <div className="md:w-2/5 flex flex-col overflow-y-auto p-6 md:p-8">
            <div className="mb-6">
              <p className="specimen-label mb-2">{slide.category}</p>
              <h2 className="font-playfair text-2xl font-bold text-ink mb-1">{slide.title}</h2>
              <p className="font-inter text-xs text-graphite italic">{slide.specimen}</p>
            </div>

            <hr className="ink-divider mb-6" />

            {/* Metadata fields */}
            <div className="flex flex-col gap-4 mb-6">
              {META.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg border border-silver/50 flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/40">
                    <Icon className="w-3.5 h-3.5 text-graphite" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="specimen-label text-[0.6rem] mb-0.5">{label}</p>
                    <p className="font-courier text-sm text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="ink-divider mb-6" />

            {/* Collector's notes */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg border border-silver/50 flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/40">
                <FileText className="w-3.5 h-3.5 text-graphite" strokeWidth={1.5} />
              </div>
              <div>
                <p className="specimen-label text-[0.6rem] mb-2">Collector's Notes</p>
                <p className="font-inter text-xs text-charcoal leading-relaxed">{slide.notes}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
