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
    <section ref={containerRef} className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-secondary"
        data-strk-bg-id="hero-bg-velmora-001"
        data-strk-bg="[hero-headline] close-up gold jewelry on model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="absolute inset-0 hero-gradient-bottom z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-white">
        <div className="max-w-2xl">
          <h1 id="hero-headline" className="text-5xl md:text-7xl mb-6 leading-[1.1]">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <p className="text-lg md:text-xl font-sans font-light mb-10 text-white/90 tracking-wide max-w-lg">
            Demi-fine gold jewelry for the modern woman. Sophisticated pieces designed for every day and special moments.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-primary/90 transition-editorial"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
