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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 text-white pt-20">
        <h1 id="hero-headline" className="text-5xl md:text-8xl font-serif mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Crafted to be Treasured
        </h1>
        <p id="hero-subheadline" className="text-lg md:text-xl font-light tracking-widest uppercase mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Demi-fine gold jewelry for modern luxury
        </p>
        <Link
          to="/shop"
          className="bg-primary text-primary-foreground px-10 py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-primary/90 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Sticky nav turns solid on scroll logic starts here - actually handled in Navbar.jsx */}
    </section>
  );
};

export default Hero;
