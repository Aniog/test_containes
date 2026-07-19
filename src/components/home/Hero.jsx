import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E')`,
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white max-w-3xl leading-tight animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base text-white/70 mt-6 max-w-md leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          18K gold-plated pieces designed for everyday elegance and lasting beauty
        </p>
        <Link
          to="/shop"
          className="mt-10 px-10 py-4 bg-velmora-gold text-white font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:bg-velmora-golddark transition-colors duration-300 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
