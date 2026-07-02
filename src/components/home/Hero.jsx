import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // In a real scenario, ImageHelper needs site config, but for this preview we'll rely on the tagging system
    // and manual simulation if needed.
    // ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-luxury scale-105 hover:scale-100"
        data-strk-bg-id="hero-jewelry-bg"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))`
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <p id="hero-subtitle" className="uppercase-spaced text-sm md:text-base mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Demi-Fine Essentials
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-10 font-serif leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Crafted to be <br /> Treasured
        </h1>
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Link 
            to="/shop"
            className="inline-block bg-white text-foreground hover:bg-accent hover:text-white px-10 py-4 uppercase-spaced text-xs font-semibold transition-luxury"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Hero Bottom - Trust Bar Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-background/10 backdrop-blur-sm border-t border-white/10 hidden md:block">
        <div className="container mx-auto py-4 px-8 flex justify-between text-[10px] uppercase-spaced font-medium text-white/90">
          <span>Free Worldwide Shipping</span>
          <span className="opacity-40">|</span>
          <span>30-Day Returns</span>
          <span className="opacity-40">|</span>
          <span>18K Gold Plated</span>
          <span className="opacity-40">|</span>
          <span>Hypoallergenic</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
