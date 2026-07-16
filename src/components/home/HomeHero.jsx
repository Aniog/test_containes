import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-991"
        data-strk-bg="a warm-lit close-up of premium gold jewelry on a model editorial style"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl">
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight">
          Crafted to be <br /> Treasured
        </h1>
        <p id="hero-subtitle" className="text-sm md:text-base uppercase tracking-[0.3em] mb-12 font-sans opacity-90 max-w-lg mx-auto leading-relaxed">
          Quiet luxury essentials for the modern woman. Timeless pieces designed for every day.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground text-xs md:text-sm font-sans uppercase tracking-[0.2em] py-5 px-10 hover:bg-accent/90 transition-all active:scale-[0.98] group"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="absolute bottom-12 left-0 w-full flex justify-center animate-bounce opacity-60">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default HomeHero;
