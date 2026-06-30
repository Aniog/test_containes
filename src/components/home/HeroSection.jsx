import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-headline] luxury gold jewelry editorial warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-charcoal-950/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="max-w-xl animate-fade-in-up">
          <p className="text-gold-400 text-xs uppercase tracking-mega-wide font-medium mb-4 md:mb-6">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 font-light leading-tight mb-4 md:mb-6"
          >
            Crafted to be<br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="text-cream-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Premium demi-fine jewelry designed for the modern woman. 
            18K gold plated, hypoallergenic, and made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/shop">
              <Button variant="accent" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="secondary" size="lg" className="border-cream-300 text-cream-100 hover:bg-cream-50 hover:text-charcoal-950">
                View Bestsellers
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-cream-400 text-[10px] uppercase tracking-ultra-wide">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream-400 to-transparent" />
      </div>
    </section>
  );
}
