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
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet-base/70 via-velvet-base/20 to-velvet-base/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 max-w-3xl">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
          Crafted to be<br className="hidden md:block" /> Treasured
        </h1>
        <p id="hero-subtitle" className="text-white/70 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Demi-fine gold jewelry for the everyday extraordinary. 18K gold-plated, hypoallergenic, designed to layer and live in.
        </p>
        <Link to="/shop" className="btn-primary inline-block text-sm">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
