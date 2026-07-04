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
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Strong dark overlay — ensures white text is always readable over bright gold image */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-fadeInUp">
            {/* Eyebrow */}
            <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-5">
              New Collection 2026
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-5"
            >
              Crafted to be<br />
              <em className="italic text-velmora-gold-light">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="font-manrope text-sm text-white/80 leading-relaxed mb-8 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated. Hypoallergenic. Made to last.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-4 hover:bg-velmora-gold-light transition-colors duration-300 text-center font-medium"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-white/50 text-white font-manrope text-xs tracking-widest uppercase px-8 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
        <span className="font-manrope text-[10px] tracking-widest uppercase text-white/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-gold/60 to-transparent" />
      </div>
    </section>
  );
}
