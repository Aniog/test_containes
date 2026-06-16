import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1C33]/90 via-[#1B2A4A]/75 to-[#1B2A4A]/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">
              Precision Sheet Metal Solutions
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Industrial Folding
            <span className="block text-[#C9A84C]">Redefined.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class sheet metal folding machines — engineered for precision, built for performance, designed for the modern fabricator.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#C9A84C] hover:bg-[#b8963e] text-white font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Explore Products
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/40 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-[#C9A84C]">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-[#C9A84C] transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
