import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3d4"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          18K gold plated pieces designed for the modern woman. Hypoallergenic, timeless, and made to be worn every day.
        </p>
        <Link to="/shop" className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const benefits = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-foreground text-background py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-xs tracking-widest uppercase">
              <benefit.icon className="w-4 h-4 text-primary" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { HeroSection, TrustBar };
