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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-velmora-warm/90 text-sm tracking-[0.25em] uppercase mb-6 animate-fade-up font-medium">
          Demi-Fine Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.15] tracking-wide animate-fade-up">
          Crafted to be<br className="md:hidden" /> Treasured
        </h1>
        <p id="hero-subtitle" className="text-white/70 text-base md:text-lg max-w-md mb-10 font-light animate-fade-up leading-relaxed">
          Heirloom-worthy demi-fine gold jewelry for the modern woman. Accessible luxury, consciously crafted.
        </p>
        <Link to="/shop" className="btn-primary animate-fade-up">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
