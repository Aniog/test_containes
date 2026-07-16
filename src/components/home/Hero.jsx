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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
      />

      {/* Gradient overlay — warm dark at bottom */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24 w-full">
        <div className="max-w-xl">
          <p className="text-xs font-manrope uppercase tracking-widest2 text-gold mb-4">
            New Collection 2024
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant font-light text-5xl md:text-7xl text-white leading-tight mb-5"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-manrope text-sm text-white/70 leading-relaxed mb-8 max-w-sm"
          >
            Demi-fine gold jewelry for the woman who wears her story. 18K gold-plated, hypoallergenic, made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-obsidian px-10 py-4 text-xs font-manrope uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
