import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry on model close-up warm lighting editorial luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-base/60 via-deep-base/40 to-deep-base/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold-light mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] mb-6">
          Crafted to be
          <br />
          <span className="font-medium italic">Treasured</span>
        </h1>
        <p className="font-sans text-sm md:text-base text-cream/80 max-w-md mx-auto mb-10 leading-relaxed">
          Premium 18K gold-plated jewelry designed for the modern woman. Elegant, accessible, and made to last.
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
