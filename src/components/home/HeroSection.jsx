import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto section-padding flex items-center">
        <div className="max-w-xl animate-fade-in">
          <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-6">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-display text-white mb-6 leading-tight"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed max-w-md"
          >
            18K gold plated jewelry designed for the modern woman. Premium quality, accessible luxury, made to wear every day.
          </p>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
