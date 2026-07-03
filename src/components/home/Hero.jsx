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
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="font-manrope text-xs uppercase tracking-widest mb-6 animate-fadeIn" style={{ color: '#C9A96E' }}>
              New Collection · 2026
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6 animate-fadeInUp"
              style={{ color: '#FAF7F2', animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic" style={{ color: '#E8D5A3' }}>Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subhead"
              className="font-manrope text-sm md:text-base leading-relaxed mb-10 max-w-sm animate-fadeInUp"
              style={{ color: 'rgba(250,247,242,0.70)', animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth. Hypoallergenic, 18K gold plated, made to last.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                to="/shop"
                className="inline-block bg-champagne font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:bg-champagne-dark transition-all duration-300 text-center"
                style={{ color: '#1A1714' }}
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-block font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:border-champagne transition-all duration-300 text-center"
                style={{ border: '1px solid rgba(250,247,242,0.40)', color: '#FAF7F2' }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-widest" style={{ color: 'rgba(250,247,242,0.40)' }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
