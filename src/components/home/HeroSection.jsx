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
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(135deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.75) 60%, rgba(13,17,23,0.88) 100%)' }}
      />

      {/* Gold accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: '#C9A84C' }} />
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: '#C9A84C' }}
            >
              Precision Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", serif', color: '#E6EDF3' }}
          >
            Master the Art of
            <span style={{ color: '#C9A84C' }}> Metal Folding</span>
          </h1>

          {/* Subheading */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ color: '#8B949E' }}
          >
            Industrial-grade double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance on every bend.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="flex items-center justify-center gap-2 text-sm tracking-widest uppercase font-semibold px-8 py-4 transition-all duration-200 cursor-pointer"
              style={{ background: '#C9A84C', color: '#0D1117', border: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#D4B96A')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#C9A84C')}
            >
              Explore Products
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="flex items-center justify-center gap-2 text-sm tracking-widest uppercase font-semibold px-8 py-4 transition-all duration-200 cursor-pointer"
              style={{ border: '1px solid #C9A84C', color: '#C9A84C', background: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10" style={{ borderTop: '1px solid #21262D' }}>
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: '"Playfair Display", serif', color: '#C9A84C' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: '#8B949E' }}>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer animate-bounce"
        style={{ color: '#8B949E' }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#8B949E' }}>Scroll</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
