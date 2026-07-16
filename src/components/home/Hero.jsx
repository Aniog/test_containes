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
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry on model editorial closeup dark background"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl italic text-white mb-4 tracking-wide animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base text-white/80 tracking-[0.12em] uppercase max-w-md animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          Demi-fine gold jewelry for the modern woman
        </p>
        <Link
          to="/shop"
          className="mt-8 btn-primary animate-fade-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
