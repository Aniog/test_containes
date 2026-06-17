import { useEffect, useRef } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-navy"
        data-strk-bg-id="hero-bg-industrial"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-transparent" />

      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-brand-gold/10 rotate-45" />
      <div className="absolute bottom-32 left-10 w-32 h-32 border border-brand-gold/10 rotate-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-brand-gold" />
            <span className="text-brand-gold tracking-[0.3em] text-sm uppercase font-medium">
              Precision Metal Folding Solutions
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Engineering
            <br />
            <span className="text-brand-gold">Excellence</span> in
            <br />
            Every Fold
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            From double folding machines to precision sheet metal folders —
            ARTITECT MACHINERY delivers industrial-grade equipment trusted by
            manufacturers worldwide for accuracy, durability, and performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-brand-gold text-white px-8 py-3.5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              Explore Products
              <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white px-8 py-3.5 inline-flex items-center text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-brand-gold transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}