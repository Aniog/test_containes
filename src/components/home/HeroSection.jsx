import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/50" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="font-body text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Precision Engineering
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="font-heading text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Engineered to
            <span className="block text-brand-gold">Fold Perfectly.</span>
          </h1>

          {/* Subheading */}
          <p
            id="hero-subtitle"
            className="font-body text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class double folding machines and
            sheet metal folders — built for precision, designed for productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-body font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-lg shadow-brand-gold/20 text-base"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-8 py-4 rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-base"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-brand-gold text-3xl font-bold">{stat.value}</div>
                <div className="font-body text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40 hover:text-brand-gold transition-colors"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
