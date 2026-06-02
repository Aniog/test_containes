import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function SpeciesModal({ species, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [species.id])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 modal-backdrop bg-ink/40"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={species.name}
    >
      <div
        ref={containerRef}
        className="relative bg-clay w-full max-w-[900px] max-h-[90vh] overflow-y-auto border border-divider"
        style={{ animation: 'modalIn 0.35s cubic-bezier(0.25,0.46,0.45,0.94) both' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-8 h-8 flex items-center justify-center text-muted-ink hover:text-ink transition-colors"
          aria-label="Close"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image panel */}
          <div className="bg-parchment flex items-center justify-center p-12 md:p-16 min-h-[320px]">
            <div className="w-full max-w-[280px] aspect-square relative">
              {/* Circle-clipped image */}
              <div className="absolute inset-0 rounded-full overflow-hidden bg-parchment">
                <img
                  data-strk-img-id={`${species.imgId}-modal`}
                  data-strk-img={`[modal-desc-${species.id}] [modal-title-${species.id}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="560"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23EDE6D6' width='1' height='1'/%3E%3C/svg%3E"
                  alt={species.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* SVG ring overlay */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                <circle cx="50" cy="50" r="49" fill="none" stroke="#D8D0C0" strokeWidth="0.6" />
              </svg>
              {/* Hidden text for image query */}
              <span id={`modal-title-${species.id}`} className="sr-only">{species.name} {species.common}</span>
              <span id={`modal-desc-${species.id}`} className="sr-only">{species.detail}</span>
            </div>
          </div>

          {/* Info panel */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="font-sans text-xs tracking-widest uppercase text-sage mb-3">
              {species.family}
            </p>
            <h2 className="font-serif text-3xl font-light text-ink italic leading-tight">
              {species.name}
            </h2>
            <p className="font-sans text-sm text-muted-ink mt-1">
              {species.common}
            </p>

            <div className="mt-6 pt-6 border-t border-divider">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mb-1">Family</p>
                  <p className="font-sans text-sm text-ink">{species.family}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-muted-ink mb-1">Origin</p>
                  <p className="font-sans text-sm text-ink">{species.origin}</p>
                </div>
              </div>

              <p id={`modal-desc-${species.id}`} className="font-sans text-sm text-muted-ink leading-relaxed">
                {species.detail}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {species.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] tracking-widest uppercase text-sage border border-sage/40 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
