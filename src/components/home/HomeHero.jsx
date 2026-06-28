import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-title] [hero-subtitle] fine gold jewelry model editorial photography warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subtitle"
          className="text-base md:text-lg font-sans text-brand-sand/90 uppercase tracking-[0.3em] mb-10 max-w-2xl mx-auto"
        >
          Demi-fine gold jewelry for the modern minimalist.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-brand-charcoal px-10 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-sand transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Trust Bar (Part of Hero or just below) */}
      <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-sm border-t border-white/20 py-4 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-[10px] text-white uppercase tracking-[0.2em] font-sans">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;