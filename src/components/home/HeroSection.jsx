import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-base/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-velmora-gold-light text-xs tracking-super-wide uppercase mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-fade-in-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto mb-8 font-light animate-fade-in-up">
          18K gold plated pieces designed for everyday luxury. Hypoallergenic, timeless, and made to be worn.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-velmora-gold text-velmora-base px-8 py-3.5 text-xs tracking-ultra-wide uppercase font-medium hover:bg-velmora-gold-light transition-all duration-300 animate-fade-in-up"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
