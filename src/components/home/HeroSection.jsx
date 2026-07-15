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
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark gradient overlay — sits above the image */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(26,22,20,0.82) 0%, rgba(26,22,20,0.55) 45%, rgba(26,22,20,0.15) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content — above overlay */}
      <div className="relative h-full flex items-center" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p
              className="font-manrope text-xs tracking-widest uppercase mb-4"
              style={{ color: '#C9A96E' }}
            >
              New Collection — 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-5"
              style={{ color: '#FAF7F2' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm leading-relaxed mb-8 max-w-sm"
              style={{ color: 'rgba(250,247,242,0.72)' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to layer, stack, and wear every single day.
            </p>
            <Link
              to="/shop"
              className="inline-block font-manrope text-xs tracking-widest uppercase px-8 py-4 transition-colors duration-300"
              style={{
                backgroundColor: '#C9A96E',
                color: '#1A1614',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E2C98A'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A96E'; }}
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
        <div className="w-px h-10 animate-pulse" style={{ backgroundColor: 'rgba(250,247,242,0.35)' }} />
      </div>
    </section>
  );
}
