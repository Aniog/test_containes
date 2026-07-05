import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 
          id="hero-headline"
          className="text-5xl md:text-7xl lg:text-8xl mb-6 font-serif leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subheadline"
          className="text-lg md:text-xl mb-10 font-light tracking-wide opacity-90"
        >
          Timeless demi-fine jewelry for your everyday luxury.
        </p>
        <Button 
          className="bg-white text-primary hover:bg-accent hover:text-white px-10 py-6 text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-none h-auto"
        >
          <a href="/shop">Shop the Collection</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
