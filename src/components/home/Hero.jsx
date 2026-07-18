import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] close-up gold jewelry luxury editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-luxury-black/30" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight animate-fade-in-up">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-sm md:text-base tracking-[0.2em] uppercase mb-10 max-w-xl mx-auto animate-fade-in-up delay-100">
          Demi-fine jewelry for the modern woman, designed for every moment.
        </p>
        <Link
          to="/shop"
          className="bg-white text-luxury-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-luxury-black hover:text-white transition-all duration-500 animate-fade-in-up delay-200 flex items-center gap-2 group"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
