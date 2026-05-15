import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Hash, Layers, FileText, User } from 'lucide-react';

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
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(10,10,10,0.88)', backdropFilter: 'blur(20px)' }}
          onClick={onClose}
        >
          <motion.div
            key="lightbox-panel"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden rounded-2xl"
            style={{
              background: 'rgba(26,26,26,0.75)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(24px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              aria-label="Close lightbox"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Image panel */}
            <div className="flex-1 relative min-h-[260px] md:min-h-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.05) brightness(0.95)' }}
              />
              {/* Magnification overlay */}
              <div
                className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{ background: 'rgba(26,26,26,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <ZoomIn className="w-3 h-3 text-[#C8C6BF]" />
                <span
                  className="text-white text-xs tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {slide.magnification}
                </span>
              </div>
            </div>

            {/* Metadata sidebar */}
            <div
              className="w-full md:w-72 flex-shrink-0 p-7 flex flex-col gap-5 overflow-y-auto"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Header */}
              <div>
                <p
                  className="text-[#9E9E9E] text-[10px] tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {slide.category}
                </p>
                <h2
                  className="text-white text-xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {slide.name}
                </h2>
                <p
                  className="text-[#9E9E9E] text-xs italic mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {slide.latinName}
                </p>
              </div>

              <div className="h-px bg-white/10" />

              {/* Metadata rows */}
              <div className="flex flex-col gap-4">
                <MetaRow icon={Hash} label="Specimen ID" value={slide.id} />
                <MetaRow icon={ZoomIn} label="Magnification" value={slide.magnification} />
                <MetaRow icon={Layers} label="Staining Protocol" value={slide.stain} />
                <MetaRow icon={User} label="Collector" value={slide.collector} />
              </div>

              <div className="h-px bg-white/10" />

              {/* Collector's notes */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-3.5 h-3.5 text-[#9E9E9E]" />
                  <p
                    className="text-[#9E9E9E] text-[10px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Collector's Notes
                  </p>
                </div>
                <p
                  className="text-[#C8C6BF] text-xs leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {slide.notes}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-3.5 h-3.5 text-[#6B6B6B] mt-0.5 flex-shrink-0" />
      <div>
        <p
          className="text-[#6B6B6B] text-[10px] tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {label}
        </p>
        <p
          className="text-white text-xs font-medium"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
