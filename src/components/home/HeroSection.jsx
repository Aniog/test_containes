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
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline] gold jewelry model warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/65 via-obsidian/45 to-obsidian/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto" style={{ color: '#FAF7F2' }}>
        <p className="font-manrope text-xs tracking-[0.25em] uppercase mb-6 animate-fadeIn" style={{ color: '#E8D5A3' }}>
          18K Gold Plated · Demi-Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl sm:text-6xl lg:text-8xl font-light leading-[1.05] tracking-tight animate-fadeIn"
          style={{ color: '#FAF7F2', animationDelay: '0.1s' }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-manrope text-sm lg:text-base mt-6 leading-relaxed max-w-md mx-auto animate-fadeIn"
          style={{ color: 'rgba(250,247,242,0.80)', animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the woman who knows her worth. Designed to be worn every day, treasured forever.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="bg-champagne font-manrope text-xs tracking-wider uppercase px-10 py-4 hover:bg-champagne-light transition-colors duration-200 font-medium"
            style={{ color: '#1A1714' }}
          >
            Shop the Collection
          </Link>
          <Link
            to="/#about"
            className="font-manrope text-xs tracking-wider uppercase px-10 py-4 hover:bg-white/10 transition-colors duration-200"
            style={{ border: '1px solid rgba(250,247,242,0.6)', color: '#FAF7F2' }}
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <span className="font-manrope text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(250,247,242,0.5)' }}>Scroll</span>
        <div className="w-px h-8 bg-ivory/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-champagne animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
