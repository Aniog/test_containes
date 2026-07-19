import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="warm gold jewelry on model close up editorial dark background"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-velvet-950/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto animate-fade-in">
        <p className="text-sand-300 text-xs tracking-super uppercase mb-6 font-medium">New Collection 2026</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-velvet-200 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for the modern woman — ethically crafted, beautifully priced.
        </p>
        <Link to="/shop" className="btn-accent text-sm tracking-wider">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-super uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
