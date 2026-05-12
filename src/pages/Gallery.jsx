import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="gallery-hero-bg-a1b2"
          data-strk-bg="[gallery-hero-desc] [gallery-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0a0e1a]/50 to-[#0a0e1a]" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#f5c842] mb-4">Visual Archive</p>
          <h1 id="gallery-hero-title" className="font-serif text-4xl md:text-6xl font-light text-[#f0f4ff] mb-4">
            Sky Gallery
          </h1>
          <p id="gallery-hero-desc" className="text-[#8892b0] text-lg max-w-2xl leading-relaxed">
            A curated collection of astronomical phenomena — auroras, eclipses,
            deep sky objects, and the grand structures of the cosmos. Each image
            is accompanied by the physics that makes it possible.
          </p>
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { value: '12', label: 'Featured Objects' },
              { value: '6', label: 'Categories' },
              { value: '∞', label: 'Wonders to Discover' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-3xl text-[#f5c842] font-light">{value}</p>
                <p className="text-xs text-[#8892b0] tracking-wide mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GalleryGrid />
    </>
  );
}
