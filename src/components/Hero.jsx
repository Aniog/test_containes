import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-text-muted text-xs uppercase tracking-extra-wide font-medium">
            Premium Industrial Equipment
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-text-primary leading-tight mb-6 text-shadow-glow"
        >
          Precision Folding
          <br />
          <span className="text-accent">Machinery</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Engineering excellence in double folding machines, sheet metal folders,
          and metal folding solutions. Built for industries that demand accuracy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToProducts();
            }}
            className="bg-accent text-bg text-sm font-semibold uppercase tracking-wide-btn px-8 py-3.5 rounded hover:bg-accent-hover transition-all duration-200 flex items-center gap-2 group"
          >
            Explore Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border border-accent text-accent text-sm font-semibold uppercase tracking-wide-btn px-8 py-3.5 rounded hover:bg-accent/10 transition-all duration-200"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
