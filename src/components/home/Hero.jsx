import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          data-strk-img-id="hero-bg-velmora-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      <div className="relative z-10 container-narrow text-center px-4 py-32">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-wide">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 md:mt-8 text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for quiet luxury. Each piece is made to be worn, loved, and passed down.
        </p>
        <div className="mt-10">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
