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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velvet/50 via-velvet/20 to-velvet/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p id="hero-subtitle" className="font-sans text-xs md:text-sm tracking-widest uppercase text-goldpale mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-stone/90 font-light mb-10 max-w-xl mx-auto leading-relaxed">
          Heirloom-worthy demi-fine jewelry in 18K gold plate. Designed for the woman who collects moments — and the pieces that mark them.
        </p>
        <Link to="/shop" className="btn-primary text-sm tracking-wider">
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
