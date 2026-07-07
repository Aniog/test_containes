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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              className="text-xs uppercase tracking-widest font-sans text-gold mb-6 animate-fadeIn"
            >
              New Collection — 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight tracking-wide animate-fadeIn"
              style={{ animationDelay: '0.15s' }}
            >
              Crafted to be
              <br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="mt-6 text-sm md:text-base font-sans text-ivory/70 leading-relaxed max-w-sm animate-fadeIn"
              style={{ animationDelay: '0.3s' }}
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold-plated, hypoallergenic, made to last.
            </p>
            <div
              className="mt-10 flex items-center gap-5 animate-fadeIn"
              style={{ animationDelay: '0.45s' }}
            >
              <Link
                to="/shop"
                className="bg-gold text-ivory px-8 py-3.5 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-200"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="text-ivory/70 text-xs uppercase tracking-widest font-sans hover:text-gold transition-colors duration-200 flex items-center gap-2"
              >
                Our Story
                <span className="text-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <div className="w-px h-10 bg-ivory/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-gold animate-[shimmer_2s_ease-in-out_infinite]" style={{ height: '40%' }} />
        </div>
      </div>
    </section>
  );
}
