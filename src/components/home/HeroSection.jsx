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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-7a8b9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay — stronger for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-obsidian/10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-manrope text-xs uppercase tracking-widest text-gold mb-5 animate-fadeIn"
            >
              New Collection — Summer 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-wide mb-6 animate-fadeIn"
              style={{ color: '#FAF7F2', animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm leading-relaxed mb-10 max-w-sm animate-fadeIn"
              style={{ color: 'rgba(250,247,242,0.70)', animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows exactly who she is.
              18K gold plated. Hypoallergenic. Made to last.
            </p>
            <div className="flex items-center gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="bg-gold font-manrope text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-dark transition-colors inline-block"
                style={{ color: '#FAF7F2' }}
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="font-manrope text-xs uppercase tracking-widest hover:text-gold transition-colors border-b pb-0.5"
                style={{ color: 'rgba(250,247,242,0.70)', borderColor: 'rgba(250,247,242,0.30)' }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
