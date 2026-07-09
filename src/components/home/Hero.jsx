import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-velmora-ivory leading-tight mb-5 animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm md:text-base text-velmora-stone leading-relaxed mb-8 animate-fadeIn"
              style={{ animationDelay: '0.35s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth.
              Hypoallergenic, 18K gold-plated, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center border border-velmora-ivory/50 text-velmora-ivory font-manrope text-xs uppercase tracking-widest px-8 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-stone">Scroll</span>
        <div className="w-px h-8 bg-velmora-stone/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-velmora-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
