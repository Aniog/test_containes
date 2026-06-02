import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from './GalleryGrid';

export default function Lightbox({ item, onClose }) {
  const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);

  const goNext = useCallback(() => {
    const next = GALLERY_ITEMS[(currentIndex + 1) % GALLERY_ITEMS.length];
    onClose(next);
  }, [currentIndex, onClose]);

  const goPrev = useCallback(() => {
    const prev = GALLERY_ITEMS[(currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length];
    onClose(prev);
  }, [currentIndex, onClose]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={() => onClose(null)}
    >
      {/* CRT scanline on lightbox */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        }}
      />

      <div
        className="relative max-w-4xl w-full"
        style={{
          border: `1px solid ${item.color}`,
          boxShadow: `0 0 40px ${item.color}40, 0 0 80px ${item.color}20`,
          background: '#050505',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ borderBottom: `1px solid ${item.color}30` }}
        >
          <div className="flex items-center gap-3">
            <span
              className="font-pixel"
              style={{ fontSize: '8px', color: item.color, textShadow: `0 0 6px ${item.color}`, letterSpacing: '0.1em' }}
            >
              {item.category}
            </span>
            <span className="font-mono-tech text-xs" style={{ color: 'rgba(0,255,255,0.4)' }}>
              {currentIndex + 1} / {GALLERY_ITEMS.length}
            </span>
          </div>
          <button
            onClick={() => onClose(null)}
            className="font-pixel text-neon-cyan hover:text-white transition-colors"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Image */}
        <div className="relative" style={{ aspectRatio: '16/9', background: '#000' }}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={`lightbox-${item.imgId}`}
            data-strk-img={`[lightbox-desc-${item.id}] [lightbox-title-${item.id}]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <span id={`lightbox-title-${item.id}`} className="hidden">{item.title}</span>
          <span id={`lightbox-desc-${item.id}`} className="hidden">{item.desc}</span>

          {/* Nav arrows */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-all"
            style={{
              background: 'rgba(0,0,0,0.7)',
              border: `1px solid ${item.color}`,
              color: item.color,
              cursor: 'pointer',
              boxShadow: `0 0 8px ${item.color}`,
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-all"
            style={{
              background: 'rgba(0,0,0,0.7)',
              border: `1px solid ${item.color}`,
              color: item.color,
              cursor: 'pointer',
              boxShadow: `0 0 8px ${item.color}`,
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h2
              className="font-pixel"
              style={{ fontSize: '12px', color: item.color, textShadow: `0 0 10px ${item.color}`, letterSpacing: '0.1em' }}
            >
              {item.title}
            </h2>
            <span
              className="font-pixel ml-4 shrink-0"
              style={{ fontSize: '10px', color: 'rgba(0,255,255,0.5)' }}
            >
              {item.year}
            </span>
          </div>
          <p className="font-mono-tech text-sm leading-relaxed" style={{ color: 'rgba(0,255,255,0.75)' }}>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
