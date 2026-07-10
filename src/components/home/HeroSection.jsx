import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-steel-900/95 via-steel-900/80 to-steel-900/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-steel-900/80 via-transparent to-steel-900/30" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-500 text-xs font-inter font-semibold uppercase tracking-widest">
              Industrial Grade Precision
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="font-barlow font-extrabold text-5xl md:text-6xl lg:text-7xl text-steel-100 leading-tight tracking-tight mb-6"
          >
            Master Every
            <span className="block text-gold-500">Metal Fold.</span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subtitle"
            className="font-inter text-lg md:text-xl text-steel-200 leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class sheet metal folding machines — double folding machines, metal folders, and industrial folding solutions engineered for precision and built to last.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-steel-900 font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-gold-500/25 text-base"
            >
              Explore Products
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center justify-center gap-2 border border-steel-200/40 hover:border-gold-500 text-steel-100 hover:text-gold-500 font-inter font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base backdrop-blur-sm"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-steel-700/60">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-barlow font-bold text-3xl text-gold-500">{stat.value}</div>
                <div className="font-inter text-sm text-steel-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-steel-400 hover:text-gold-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-inter uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
};

export default HeroSection;
