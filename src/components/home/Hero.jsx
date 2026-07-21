import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-ink-800"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry luxury fashion close-up warm lighting model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/20 to-ink-900/50" />

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-3xl">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-300 mb-4 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream-50 leading-tight mb-6 animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-cream-200/80 max-w-lg mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          Demi-fine 18K gold jewelry designed for modern elegance. Hypoallergenic, waterproof, made to last.
        </p>
        <Link
          to="/shop"
          className="btn-gold inline-block animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="font-sans text-[10px] tracking-ultra-wide uppercase text-cream-300/50">Scroll</span>
        <div className="w-px h-8 bg-cream-300/30 animate-pulse" />
      </div>
    </section>
  );
}
