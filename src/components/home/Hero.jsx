import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json'; // We'll create a dummy one if it doesn't exist

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // If the config isn't populated, the sdk handles it gracefully or we mock it
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image using data-strk-bg */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-sub] [hero-title] female model wearing elegant gold jewelry warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 
          id="hero-title"
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight drop-shadow-md"
        >
          CRAFTED TO BE <br className="hidden md:block"/> TREASURED
        </h1>
        <p 
          id="hero-sub"
          className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light tracking-wide drop-shadow-sm"
        >
          Discover premium demi-fine jewelry designed for everyday elegance. 
          Hypoallergenic, water-resistant, and endlessly stackable.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-primary px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white/90 transition-colors shadow-lg"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Trust bar at bottom - moved outside hero in main layout but fits well attached here */}
      <div className="absolute bottom-0 w-full bg-background border-t border-border z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-between items-center text-xs tracking-wider uppercase text-muted-foreground font-sans gap-4 md:gap-0">
            <span className="flex-1 text-center md:flex-none">Free Worldwide Shipping</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="flex-1 text-center md:flex-none">30-Day Returns</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="flex-1 text-center md:flex-none">18K Gold Plated</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="flex-1 text-center md:flex-none">Hypoallergenic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
