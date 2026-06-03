import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import GalleryGrid from '@/components/gallery/GalleryGrid';

function GalleryHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="gallery-hero-bg-8c2d4e"
        data-strk-bg="[gallery-hero-desc] [gallery-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-[#0B0F19]/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0B0F19]" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-amber-400">Sky Gallery</span>
        <h1 id="gallery-hero-title" className="text-5xl md:text-6xl font-light text-white mt-4 mb-6 leading-tight">
          Phenomena of
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
            the Physical Sky
          </span>
        </h1>
        <p id="gallery-hero-desc" className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          A curated archive of astronomical phenomena — each image paired with the physics 
          that explains its beauty. Hover to reveal. Click to explore.
        </p>
      </div>
    </section>
  );
}

export default function Gallery() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
