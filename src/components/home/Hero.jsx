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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-brand-dark"
        data-strk-bg-id="hero-bg-velmora-k9m2n4"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 md:mt-6 text-white/80 font-sans text-sm md:text-base leading-relaxed max-w-md"
          >
            Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
          </p>
          <Link
            to="/collection"
            className="inline-block mt-8 bg-brand-gold text-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-brand-gold-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
