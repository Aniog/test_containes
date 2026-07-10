import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am9x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              Precision Sheet Metal Machinery
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-extrabold text-text-primary leading-tight tracking-tight mb-6"
          >
            Engineer the
            <span className="block text-gradient-gold">Perfect Fold.</span>
          </h1>

          {/* Subheading */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200 text-sm tracking-wide"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold font-semibold px-8 py-4 rounded-sm hover:bg-gold hover:text-navy transition-colors duration-200 text-sm tracking-wide"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-gold">{stat.value}</div>
                <div className="text-xs text-text-secondary tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-secondary hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
