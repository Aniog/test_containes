import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-dark-surface"
        data-strk-bg-id="hero-bg-velmora-9f3a2b"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-[1.05]"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/70 text-base md:text-lg font-sans max-w-lg mx-auto mb-8"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces at an accessible luxury price point.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent text-cream px-8 py-3.5 text-sm uppercase tracking-wide-btn font-sans font-medium hover:bg-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
