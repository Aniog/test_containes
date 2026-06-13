import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/70 to-navy-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-gold text-sm font-medium tracking-wide">
            Precision Engineering Since 1998
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Master the Art of
          <br />
          <span className="text-gold">Metal Folding</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Industry-leading double folding machines and sheet metal folders
          engineered for precision, durability, and unmatched performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-gold hover:bg-gold-light text-navy-dark font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 flex items-center gap-2"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#about"
            className="border border-white/30 hover:border-gold/60 text-white hover:text-gold font-medium text-base px-8 py-4 rounded-full transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '5000+', label: 'Machines Delivered' },
            { value: '60+', label: 'Countries Served' },
            { value: '99.8%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
