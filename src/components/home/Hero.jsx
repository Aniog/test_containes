import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-a7f3e1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-espresso-950/80 via-espresso-950/50 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-espresso-950/40 via-transparent to-espresso-950/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-0">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-mega-wide text-gold-400 mb-4 animate-fade-in">
            18K Gold Plated Collection
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be<br />
            <span className="italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-base md:text-lg text-warm-200 leading-relaxed mb-8 max-w-lg animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Discover demi-fine gold jewelry designed for the modern woman.
            Premium quality, accessible luxury — pieces you'll reach for every day.
          </p>
          <Link
            to="/shop"
            className="btn-primary animate-fade-in inline-block"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[2] bg-gradient-to-t from-brand-50 to-transparent" />
    </section>
  );
}
