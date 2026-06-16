import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-gold text-xs font-semibold tracking-wider uppercase">
              Precision Engineering Since 1998
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Master the Art of{' '}
            <span className="text-gold">Metal Folding</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            Industry-leading double folding machines and sheet metal folders engineered 
            for precision, durability, and unmatched performance. Transform your 
            metalworking operations with ARTITECT MACHINERY.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-steel hover:bg-steel-dark text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200"
            >
              Explore Products
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 hover:border-gold text-gold px-8 py-4 rounded-full font-semibold transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>

          <div className="flex items-center gap-8 mt-14 pt-8 border-t border-slate-600/50">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '50+', label: 'Countries Served' },
              { value: '10K+', label: 'Machines Delivered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
