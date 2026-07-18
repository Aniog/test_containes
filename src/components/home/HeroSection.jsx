import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry luxury warm lighting editorial model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-primary/70 via-surface-primary/40 to-surface-primary/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-mega-wide text-gold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Velmora Fine Jewelry
        </p>
        <h1
          className="heading-serif text-5xl md:text-7xl lg:text-8xl text-brand-50 mb-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="text-brand-300 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Demi-fine gold jewelry designed for everyday elegance. Hypoallergenic, 18K gold-plated, and made to last.
        </p>
        <Link
          to="/shop"
          className="btn-gold animate-fade-in inline-block"
          style={{ animationDelay: '0.8s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-primary to-transparent" />
    </section>
  );
};

export default HeroSection;
