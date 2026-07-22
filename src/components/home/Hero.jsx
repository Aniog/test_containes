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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-charcoal"
        data-strk-bg-id="hero-bg-vel-9x8w7v"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-white/80 text-base md:text-lg font-sans font-light mt-4 md:mt-6 max-w-md leading-relaxed"
          >
            Demi-fine gold jewelry designed for everyday elegance. Timeless pieces that tell your story.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-brand-gold text-white px-8 py-3.5 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
