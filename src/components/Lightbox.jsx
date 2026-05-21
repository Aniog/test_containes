import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Microscope, Tag, FileText, Calendar } from "lucide-react";

export default function Lightbox({ slide, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!slide) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Slide viewer: ${slide.name}`}
      >
        {/* Blurred backdrop */}
        <div className="absolute inset-0 bg-ink/70 backdrop-blur-xl" aria-hidden="true" />

        {/* Modal content */}
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col lg:flex-row h-full max-h-[85vh]">
            {/* Image panel */}
            <div className="relative flex-1 min-h-[300px] lg:min-h-0 bg-ink/20 flex items-center justify-center overflow-hidden">
              <img
                src={slide.imageSvg}
                alt={slide.imageAlt}
                className="w-full h-full object-contain grayscale contrast-125 max-h-[60vh] lg:max-h-full"
              />
              {/* Magnification badge */}
              <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-lg">
                <span className="font-mono text-xs text-ink font-medium">{slide.magnification}</span>
              </div>
              {/* Navigation arrows */}
              {hasPrev && (
                <button
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/50 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-ink" />
                </button>
              )}
              {hasNext && (
                <button
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/50 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-ink" />
                </button>
              )}
            </div>

            {/* Metadata sidebar */}
            <div className="w-full lg:w-80 bg-parchment/80 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-white/20 flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-lightgray/40">
                <div>
                  <p className="section-label mb-1">{slide.category}</p>
                  <h2 className="font-serif font-bold text-lg text-ink leading-tight">
                    {slide.name}
                  </h2>
                  <p className="font-serif italic text-midgray text-sm mt-0.5">
                    {slide.latinName}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-3 w-8 h-8 rounded-xl glass-dark flex items-center justify-center hover:bg-black/15 transition-colors shrink-0"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>

              {/* Metadata fields */}
              <div className="p-5 space-y-4 flex-1">
                <MetaRow icon={Tag} label="Specimen ID" value={slide.specimenId} />
                <MetaRow icon={Microscope} label="Magnification" value={slide.magnification} />
                <MetaRow icon={Calendar} label="Accession Date" value={slide.accessionDate} />
                <MetaRow icon={FileText} label="Stain Protocol" value={slide.stain} />

                <div className="pt-2">
                  <p className="section-label mb-2">Collector's Notes</p>
                  <p className="font-sans text-charcoal text-xs leading-relaxed">
                    {slide.notes}
                  </p>
                </div>

                {slide.observationPoints && (
                  <div className="pt-2">
                    <p className="section-label mb-2">Observation Points</p>
                    <ul className="space-y-1.5">
                      {slide.observationPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono text-[10px] text-midgray mt-0.5 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-sans text-xs text-charcoal leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-lightgray/40">
                <p className="font-mono text-[10px] text-midgray">
                  MicroCosmos Archive · {slide.specimenId}
                </p>
              </div>
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
      <div className="w-7 h-7 rounded-lg bg-ink/8 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-midgray" strokeWidth={1.5} />
      </div>
      <div>
        <p className="section-label text-[10px] mb-0.5">{label}</p>
        <p className="font-mono text-xs text-ink">{value}</p>
      </div>
    </div>
  );
}
