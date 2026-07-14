import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg"
        data-strk-bg="[hero-headline] [hero-subheadline] gold jewelry close up on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1920&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 id="hero-headline" className="text-5xl md:text-7xl mb-6 tracking-wide drop-shadow-lg">
          Crafted to be Treasured
        </h1>
        <p id="hero-subheadline" className="text-sm md:text-lg uppercase letter-spacing-wide mb-10 max-w-lg mx-auto drop-shadow-md">
          Premium demi-fine jewelry for the modern woman.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-primary px-10 py-4 uppercase letter-spacing-wide text-xs hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase letter-spacing-wide text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default Hero;
