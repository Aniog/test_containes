import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function SpeciesModal({ species, onClose }) {
  const modalRef = useRef(null);
  const imgContainerRef = useRef(null);

  useEffect(() => {
    if (imgContainerRef.current) {
      ImageHelper.loadImages(strkImgConfig, imgContainerRef.current);
    }
  }, [species]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!species) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#2C2C2C]/70 backdrop-blur-sm" />

      {/* Modal panel */}
      <div
        ref={modalRef}
        className="relative z-10 bg-[#FAF7F2] w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-[modalIn_0.4s_ease-out]"
        style={{ animation: 'modalIn 0.4s ease-out' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center text-[#8B7355] hover:text-[#3D5C3A] transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div ref={imgContainerRef} className="flex flex-col md:flex-row">
          {/* Full-res image */}
          <div className="w-full md:w-[61.8%] flex-shrink-0 bg-[#E8E0D0]" style={{ minHeight: 320 }}>
            <img
              data-strk-img-id={`modal-img-${species.id}`}
              data-strk-img={`[modal-desc-${species.id}] [modal-title-${species.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={species.name}
              className="w-full h-full object-cover"
              style={{ minHeight: 320 }}
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-[38.2%] p-8 md:p-10 flex flex-col gap-5">
            <span className="font-mono text-xs text-[#7A9E7E] tracking-[0.25em] uppercase">
              {species.family}
            </span>
            <h2
              id={`modal-title-${species.id}`}
              className="font-serif text-3xl md:text-4xl font-light text-[#3D5C3A] leading-tight"
            >
              {species.name}
            </h2>
            <p className="font-serif italic text-base text-[#8B7355]">
              {species.latin}
            </p>
            <div className="w-8 h-px bg-[#7A9E7E]" />
            <p
              id={`modal-desc-${species.id}`}
              className="font-sans text-sm text-[#2C2C2C] leading-relaxed"
            >
              {species.description}
            </p>

            {/* Taxonomy grid */}
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[#E8E0D0] pt-6">
              {Object.entries(species.taxonomy).map(([key, val]) => (
                <div key={key}>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B7355] mb-0.5">{key}</p>
                  <p className="font-serif italic text-sm text-[#3D5C3A]">{val}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {species.tags.map(tag => (
                <span
                  key={tag}
                  className="font-sans text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-[#E8E0D0] text-[#8B7355]"
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
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
