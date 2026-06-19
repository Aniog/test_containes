import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora-a3f7c1"
          data-strk-bg="[hero-headline] [hero-subtext]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-500/50 via-charcoal-500/30 to-charcoal-500/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-2xl mx-auto">
        <h1
          id="hero-headline"
          className="font-serif text-cream-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-5"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtext"
          className="font-sans text-cream-100/80 text-sm md:text-base tracking-wide max-w-md mx-auto mb-10 leading-relaxed"
        >
          Premium demi-fine jewelry, designed for the modern woman. 
          18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold-500 text-cream-50 px-10 py-4 text-xs font-medium uppercase tracking-widest-xl font-sans transition-all duration-300 hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/20"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-cream-100/40 text-[10px] uppercase tracking-widest-xl font-sans">Scroll</span>
        <div className="w-px h-8 bg-cream-100/20" />
      </div>
    </section>
  );
}
