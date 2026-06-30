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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-champagne mb-6 animate-fadeIn">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-velmora-ivory leading-tight mb-6 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm text-velmora-ivory/70 leading-relaxed mb-10 animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth.
              18K gold plated. Hypoallergenic. Made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-velmora-champagne text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:bg-velmora-ivory transition-all duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-velmora-ivory/40 text-velmora-ivory font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:border-velmora-ivory hover:bg-velmora-ivory/10 transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-ivory/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
