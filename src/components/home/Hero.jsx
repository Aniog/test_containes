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
    <section className="relative h-screen min-h-[600px] w-full" ref={containerRef}>
      <div
        className="absolute inset-0 bg-black/30 z-10"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl tracking-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 max-w-xl opacity-90 tracking-wide">
          Elevated demi-fine jewelry for the modern woman. Timeless pieces to celebrate every moment.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
