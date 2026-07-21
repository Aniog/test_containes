import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-stone-900"
        data-strk-bg-id="hero-bg-velmora-a7f3c2"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl text-white font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 text-lg md:text-xl text-white/80 font-light leading-relaxed"
          >
            Demi-fine gold jewelry for the woman who values quiet elegance
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-8 py-3.5 bg-gold text-white text-sm font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors no-underline"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
