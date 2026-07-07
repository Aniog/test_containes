import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 bg-charcoal/20"
        data-strk-bg-id="homepage-hero-bg"
        data-strk-bg="[hero-title] close-up gold jewelry luxury editorial model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl slide-up">
        <h1 
          id="hero-title"
          className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-sm md:text-lg uppercase tracking-[0.3em] font-light mb-10">
          Demi-fine gold jewelry for the modern minimalist.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-charcoal px-12 py-4 tracking-velmora uppercase text-sm font-medium hover:bg-velmora-gold hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="w-[1px] h-12 bg-white/40"></span>
      </div>
    </section>
  );
};

export default Hero;
