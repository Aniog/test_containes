import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, User, Layers } from 'lucide-react';

export default function Lightbox({ slide, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {slide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Blurred backdrop */}
          <div className="absolute inset-0 bg-ink-black/75 backdrop-blur-xl" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row
              rounded-3xl overflow-hidden
              bg-white/12 backdrop-blur-2xl border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full
                bg-ink-black/50 backdrop-blur-sm border border-white/15
                flex items-center justify-center text-white/80
                hover:bg-ink-black/80 hover:text-white transition-all duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image Panel */}
            <div className="relative flex-1 min-h-[300px] md:min-h-0 bg-ink-black/30">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover img-bw"
                style={{ minHeight: '300px' }}
              />
              {/* Zoom indicator */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2
                bg-ink-black/50 backdrop-blur-sm rounded-full px-3 py-1.5
                border border-white/10">
                <ZoomIn className="w-3.5 h-3.5 text-white/60" />
                <span className="font-mono text-[11px] text-white/60">{slide.magnification}</span>
              </div>
            </div>

            {/* Metadata Sidebar */}
            <div className="w-full md:w-80 flex-shrink-0 p-7 flex flex-col gap-6
              bg-parchment/95 backdrop-blur-sm overflow-y-auto">

              {/* Header */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-light">
                  {slide.classification}
                </span>
                <h2 className="font-serif text-2xl font-bold text-ink-black mt-1 leading-tight">
                  {slide.title}
                </h2>
                <p className="font-serif italic text-sm text-ink-mid mt-1">{slide.latinName}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-ink-faint/40" />

              {/* Metadata Grid */}
              <div className="space-y-4">
                <MetaRow
                  icon={Layers}
                  label="Specimen ID"
                  value={slide.specimenId}
                  mono
                />
                <MetaRow
                  icon={ZoomIn}
                  label="Magnification"
                  value={slide.magnification}
                  mono
                />
                <MetaRow
                  icon={User}
                  label="Collector"
                  value={slide.collector}
                />
                <MetaRow
                  icon={Calendar}
                  label="Acquisition Date"
                  value={slide.date}
                  mono
                />
              </div>

              {/* Divider */}
              <div className="h-px bg-ink-faint/40" />

              {/* Preparation */}
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink-light mb-2">
                  Preparation Method
                </p>
                <p className="font-sans text-xs text-ink-mid leading-relaxed">{slide.preparation}</p>
              </div>

              {/* Collector's Notes */}
              <div className="flex-1">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink-light mb-2">
                  Collector's Notes
                </p>
                <p className="font-sans text-sm text-ink-charcoal leading-relaxed">{slide.notes}</p>
              </div>

              {/* Plate reference */}
              <div className="mt-auto pt-4 border-t border-ink-faint/30">
                <p className="font-mono text-[10px] text-ink-light">
                  Plate {slide.plate} · MicroCosmos Digital Archive
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaRow({ icon: Icon, label, value, mono }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-lg bg-ink-black/6 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-ink-mid" strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-sans text-[10px] uppercase tracking-widest text-ink-light">{label}</p>
        <p className={`text-sm text-ink-charcoal font-medium mt-0.5 ${mono ? 'font-mono' : 'font-sans'}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
