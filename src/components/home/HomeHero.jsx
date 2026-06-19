import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-headline] [hero-brand-name] warm editorial jewelry model close-up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 bg-brand-neutral/20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-text/20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto space-y-6">
        <span id="hero-brand-name" className="text-xs uppercase tracking-[0.4em] font-medium block animate-in fade-in slide-in-from-bottom-4 duration-1000">VELMORA FINE JEWELRY</span>
        <h1 id="hero-headline" className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Crafted to be Treasured
        </h1>
        <p className="text-sm md:text-base font-light italic opacity-90 tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          Quiet luxury pieces designed for the modern woman.
        </p>
        <div className="pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Link to="/shop" className="btn-primary px-10 py-4 text-xs">
            Shop the Collection
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default HomeHero;
