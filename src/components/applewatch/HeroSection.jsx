import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-40"
        data-strk-bg-id="hero-bg-aw-9f3b2c"
        data-strk-bg="[hero-subtitle-aw] [hero-title-aw]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto">
        <p
          id="hero-label-aw"
          className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4"
        >
          Introducing
        </p>

        <h1
          id="hero-title-aw"
          className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-none mb-6"
        >
          Apple Watch
        </h1>

        <p
          id="hero-subtitle-aw"
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The most powerful Apple Watch ever. Built for health, fitness, and everything in between.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3.5 font-semibold text-base transition-colors"
          >
            Shop Now
          </button>
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/30 hover:border-white/60 text-white rounded-full px-8 py-3.5 font-semibold text-base transition-colors bg-white/5 hover:bg-white/10"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Watch image */}
      <div className="relative z-10 mt-16 w-full max-w-sm mx-auto px-8">
        <img
          alt="Apple Watch on wrist"
          data-strk-img-id="hero-watch-img-aw-7a1d4e"
          data-strk-img="[hero-subtitle-aw] [hero-title-aw] Apple Watch smartwatch wrist"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full rounded-3xl shadow-2xl"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
