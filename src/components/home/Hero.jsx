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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f3a2b"
        data-strk-bg="[hero-subhead] [hero-headline] warm gold jewelry model editorial luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay — strong at bottom so ivory text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-espresso/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-28 w-full">
        <div className="max-w-xl">
          <p className="font-sans text-xs uppercase tracking-[0.2em] mb-4" style={{ color: '#C9A96E' }}>
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-wide mb-5"
            style={{ color: '#FAF7F2' }}
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-base md:text-lg mb-8 leading-relaxed max-w-sm"
            style={{ color: 'rgba(250,247,242,0.72)' }}
          >
            Demi-fine gold jewelry for the woman who wears her story.
          </p>
          <Link
            to="/shop"
            className="inline-block font-sans text-xs uppercase tracking-[0.15em] px-10 py-4 transition-colors duration-300"
            style={{ backgroundColor: '#C9A96E', color: '#1C1410' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E2C98A'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A96E'; }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
