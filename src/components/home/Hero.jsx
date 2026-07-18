import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide leading-tight text-balance">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Demi-fine gold jewelry for the modern woman. Elevated everyday pieces designed with intention, made to last beyond the season.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block mt-10"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest animate-bounce">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
