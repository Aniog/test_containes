import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <span className="text-xs md:text-sm tracking-[0.35em] uppercase font-medium opacity-80 mb-4 block">
          Velmora Fine Jewelry
        </span>
        <h1 id="hero-title" className="font-[var(--font-serif)] text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 tracking-tight">
          Crafted to be<br />Treasured
        </h1>
        <p id="hero-subtitle" className="text-base md:text-lg text-white/70 font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Demi-fine gold jewelry for the modern woman — designed in 18K gold plate, made to be worn, loved, and passed down.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-3.5 border border-white/60 text-white text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-[var(--color-surface-dark)] transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
