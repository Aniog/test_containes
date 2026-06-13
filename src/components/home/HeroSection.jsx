import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
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
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C8922A]" />
            <span className="text-[#C8922A] text-xs tracking-[0.4em] uppercase font-inter font-medium">
              Precision Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Master the Art of
            <span className="block text-[#C8922A]">Metal Folding</span>
          </h1>

          {/* Subheading */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/70 font-inter font-light leading-relaxed mb-10 max-w-xl"
          >
            Industrial-grade double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance on the production floor.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="flex items-center justify-center gap-2 bg-[#C8922A] hover:bg-[#E8B04A] text-white font-semibold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 font-inter group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-[#C8922A] text-white hover:text-[#C8922A] font-semibold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 font-inter"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold text-[#C8922A]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs tracking-wider uppercase font-inter mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40 hover:text-[#C8922A] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
