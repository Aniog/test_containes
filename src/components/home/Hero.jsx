import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a7f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-6">
            Precision Engineering Since 1998
          </p>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Master the Art of{' '}
            <span className="text-gold">Metal Folding</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-10 max-w-2xl"
          >
            Industry-leading double folding machines and sheet metal folders engineered 
            for precision, durability, and unmatched performance in metal fabrication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
