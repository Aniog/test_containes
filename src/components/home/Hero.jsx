import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="max-w-2xl">
          <p className="text-brand-gold text-xs tracking-widest uppercase font-sans font-semibold mb-4">
            Precision Sheet Metal Forming
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight mb-6"
          >
            Engineering
            <span className="block text-brand-gold">Perfection</span>
            in Metal.
          </h1>
          <p
            id="hero-subtitle"
            className="text-brand-silver text-lg md:text-xl leading-relaxed mb-10 font-sans font-light"
          >
            Artitect Machinery delivers world-class double folding machines, sheet metal folders, and metal folding solutions — built for precision, reliability, and industrial excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="bg-brand-gold text-brand-navy text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-brand-gold-light transition-colors duration-200"
            >
              Explore Products
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="border-2 border-brand-gold text-brand-gold text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-brand-gold hover:text-brand-navy transition-colors duration-200"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-brand-steel/50 pt-10">
          {[
            { value: '25+', label: 'Years of Excellence' },
            { value: '500+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl font-bold text-brand-gold">{stat.value}</div>
              <div className="text-brand-silver text-xs tracking-wide uppercase mt-1 font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-brand-silver hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
