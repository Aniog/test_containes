import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">
          Introducing Lumora X1
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
        >
          See the World<br />in Full Detail
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10"
        >
          Professional-grade photography in the palm of your hand. Capture every moment with stunning clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-8 py-3 hover:bg-amber-300 transition-colors"
          >
            Explore Features
          </a>
          <a
            href="#gallery"
            className="border border-zinc-600 text-white rounded-full px-8 py-3 hover:border-amber-400 transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}
