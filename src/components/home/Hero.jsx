import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
// Using a placeholder config since we don't have the final one yet
const strkImgConfig = {};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load if imported
    if (ImageHelper && ImageHelper.loadImages) {
      try {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch (e) {}
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-stone-900"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subhead] [hero-headline] warm gold jewelry on model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for text readability */}
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <h1 id="hero-headline" className="text-5xl md:text-7xl lg:text-8xl mb-6">
          Crafted to be Treasured
        </h1>
        <p id="hero-subhead" className="text-lg md:text-xl font-light mb-10 max-w-2xl text-stone-200">
          Discover our collection of demi-fine gold jewelry, designed to bring a quiet luxury to your every day.
        </p>
        <Link to="/collections/all" className="btn-primary bg-white text-foreground hover:bg-gold-500 hover:text-white border border-transparent">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;