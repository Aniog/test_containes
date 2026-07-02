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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-obsidian">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4 fade-in-up">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-parchment font-light leading-tight fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="not-italic text-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-parchment/70 mt-5 leading-relaxed fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold-plated, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300 text-center font-medium"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block border border-parchment/40 text-parchment font-sans text-xs tracking-widest uppercase px-10 py-4 hover:border-gold hover:text-gold transition-colors duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-widest uppercase text-parchment/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-parchment/40 to-transparent" />
      </div>
    </section>
  );
}
