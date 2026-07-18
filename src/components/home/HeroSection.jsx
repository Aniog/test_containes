import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f3a1c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p
          id="hero-subtitle"
          className="text-[13px] md:text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-[0.02em] mb-6 max-w-3xl animate-fade-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          Crafted to be Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 font-light max-w-md mb-10 animate-fade-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          18K gold-plated demi-fine jewelry — designed for everyday elegance, priced for real life.
        </p>
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <Link to="/shop" className="btn-primary text-xs tracking-widest">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in opacity-0"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">Scroll</span>
        <div className="w-px h-10 bg-white/30">
          <div className="w-px h-4 bg-white/80 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
