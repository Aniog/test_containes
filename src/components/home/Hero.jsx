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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/30 to-espresso/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-medium leading-tight mb-4 max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/80 text-sm md:text-base max-w-lg mb-10 leading-relaxed font-light"
        >
          Demi-fine gold jewelry designed for everyday elegance. Premium materials, timeless silhouettes, and a touch of quiet luxury.
        </p>
        <Link to="/shop" className="btn-gold">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
