import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-aw-9f3b2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-20">
        <p id="hero-eyebrow" className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
          The Ultimate Device
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6">
          Apple Watch
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto mb-10">
          The most powerful Apple Watch ever. Advanced health sensors, stunning display, and all-day battery life — on your wrist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Explore Features
          </a>
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="border border-zinc-500 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-zinc-600 animate-pulse" />
      </div>
    </section>
  );
}
