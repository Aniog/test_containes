import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-velmora-espresso/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight max-w-2xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="mt-5 text-base md:text-lg text-white/80 font-light tracking-wide max-w-md"
        >
          Demi-fine gold jewelry for the woman who invests in herself — and the moments that matter.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-8 btn-primary text-sm tracking-widest"
        >
          Shop the Collection
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
