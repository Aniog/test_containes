import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, User, Microscope, FlaskConical, FileText } from 'lucide-react';

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

  if (!slide) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-label={`Specimen slide: ${slide.title}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl glass-dark flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Image Panel */}
          <div className="relative flex-1 min-h-[280px] md:min-h-0 bg-black/40 flex items-center justify-center overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={slide.title}
              data-strk-img-id={`lb-${slide.imageId}`}
              data-strk-img={`[lb-title-${slide.id}] [lb-tech-${slide.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            />
            {/* Magnification badge */}
            <div className="absolute bottom-4 left-4">
              <span className="font-mono text-xs tracking-widest text-white/80 glass-dark px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <ZoomIn className="w-3 h-3" />
                {slide.magnification}
              </span>
            </div>
          </div>

          {/* Metadata Sidebar */}
          <div className="w-full md:w-80 flex-shrink-0 overflow-y-auto p-6 border-t md:border-t-0 md:border-l border-white/10">
            {/* Title */}
            <div className="mb-6">
              <p className="text-[10px] font-mono text-silver tracking-widest uppercase mb-1">
                Digital Slide
              </p>
              <h2
                id={`lb-title-${slide.id}`}
                className="font-serif text-xl font-semibold text-white leading-tight"
              >
                {slide.title}
              </h2>
              <p className="font-mono text-xs text-silver mt-1">{slide.specimenId}</p>
            </div>

            {/* Metadata grid */}
            <div className="space-y-4 mb-6">
              <MetaRow
                icon={<Microscope className="w-3.5 h-3.5" />}
                label="Magnification"
                value={slide.magnification}
              />
              <MetaRow
                icon={<ZoomIn className="w-3.5 h-3.5" />}
                label="Technique"
                value={slide.technique}
                id={`lb-tech-${slide.id}`}
              />
              <MetaRow
                icon={<FlaskConical className="w-3.5 h-3.5" />}
                label="Stain / Preparation"
                value={slide.stain}
              />
              <MetaRow
                icon={<User className="w-3.5 h-3.5" />}
                label="Collector"
                value={slide.collector}
              />
              <MetaRow
                icon={<Calendar className="w-3.5 h-3.5" />}
                label="Date Acquired"
                value={new Date(slide.date).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              />
            </div>

            {/* Collector's Notes */}
            <div className="border-t border-white/10 pt-5">
              <p className="text-[10px] font-mono text-silver tracking-widest uppercase mb-3 flex items-center gap-1.5">
                <FileText className="w-3 h-3" /> Collector's Notes
              </p>
              <p className="text-xs text-white/75 leading-relaxed">{slide.notes}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MetaRow({ icon, label, value, id }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-silver mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[9px] font-mono text-silver tracking-widest uppercase">{label}</p>
        <p id={id} className="text-sm text-white/90 mt-0.5 font-medium">{value}</p>
      </div>
    </div>
  );
}
