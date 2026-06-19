import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-velvet-950/30 to-velvet-950/10" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide leading-tight animate-fade-in"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-base md:text-lg text-white/70 font-light tracking-wide max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry designed for the modern woman — everyday luxury at an attainable price.
        </p>
        <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
