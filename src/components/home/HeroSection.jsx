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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[#2c2825]"
        data-strk-bg-id="hero-bg-main-4f8a2c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714]/70 via-[#1a1714]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#c9a96e] mb-4 md:mb-6">
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.1] text-[#fdfaf6] mb-4 md:mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-[#e8d5b0]/80 mb-8 md:mb-10 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Worn every day, remembered forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#c9a96e] text-[#1a1714] font-sans text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#b8935a] transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/60 text-white font-sans text-xs font-medium tracking-[0.12em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#e8d5b0]">Scroll</span>
        <div className="w-px h-8 bg-[#c9a96e] animate-pulse" />
      </div>
    </section>
  );
}
