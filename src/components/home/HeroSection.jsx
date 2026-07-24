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
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/50 via-velmora-ink/20 to-velmora-ink/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white font-light tracking-[0.03em] leading-tight animate-fade-in"
        >
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-sm sm:text-base font-sans text-white/80 font-light tracking-[0.05em] max-w-md animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the modern woman — designed for everyday elegance and lasting beauty.
        </p>
        <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/40 flex justify-center pt-2">
          <div className="w-0.5 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}