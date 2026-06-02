import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Lightbox from '../components/gallery/Lightbox';

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleOpenLightbox = (item) => setLightboxItem(item);
  const handleCloseLightbox = (nextItem) => {
    if (nextItem) setLightboxItem(nextItem);
    else setLightboxItem(null);
  };

  return (
    <div ref={containerRef} className="bg-black min-h-screen">
      {/* Page header */}
      <div
        className="bg-pixel-grid py-16 px-4 md:px-8"
        style={{ borderBottom: '1px solid rgba(0,255,255,0.2)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="font-pixel text-neon-magenta text-glow-magenta mb-4"
            style={{ fontSize: '9px', letterSpacing: '0.3em' }}
          >
            ARCHIVE / VISUAL
          </div>
          <h1
            className="font-pixel text-white mb-4"
            style={{
              fontSize: 'clamp(16px, 3vw, 32px)',
              textShadow: '0 0 20px rgba(255,255,255,0.3)',
              letterSpacing: '0.05em',
            }}
          >
            LIGHT{' '}
            <span style={{ color: '#00FFFF', textShadow: '0 0 20px #00FFFF' }}>GALLERY</span>
          </h1>
          <p className="font-mono-tech text-neon-cyan/70 max-w-2xl" style={{ fontSize: '14px', lineHeight: '1.8' }}>
            Macro photography of vintage LED displays, fiber optic bundles, neon discharge tubes,
            and CRT phosphor arrays. Each image documents light at the sub-pixel level.
          </p>

          {/* Decorative stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: 'SPECIMENS', value: '09', color: '#00FFFF' },
              { label: 'CATEGORIES', value: '07', color: '#FF00FF' },
              { label: 'MAGNIFICATION', value: 'UP TO 100x', color: '#00FF41' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span
                  className="font-pixel"
                  style={{ fontSize: '14px', color: s.color, textShadow: `0 0 8px ${s.color}` }}
                >
                  {s.value}
                </span>
                <span className="font-mono-tech text-xs" style={{ color: 'rgba(0,255,255,0.4)', letterSpacing: '0.1em' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <GalleryGrid onOpenLightbox={handleOpenLightbox} />
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={handleCloseLightbox} />
      )}
    </div>
  );
}
