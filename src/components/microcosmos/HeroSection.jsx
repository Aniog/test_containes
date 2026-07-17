import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/60 via-cosmos-bg/30 to-cosmos-bg" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-cosmos-teal text-sm font-semibold tracking-[0.3em] uppercase mb-6"
        >
          A Journey Into the Invisible World
        </p>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-slate-50 leading-none mb-6"
        >
          Micro<span className="text-gradient">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-slate-300 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Discover the breathtaking universe hidden beneath the lens — where single cells
          dance, bacteria thrive, and life pulses in forms too small to see.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#gallery"
            className="px-8 py-3 rounded-full bg-cosmos-teal text-cosmos-bg font-semibold text-base hover:bg-cosmos-teal/90 transition-colors duration-200"
          >
            Explore the Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-medium text-base hover:border-cosmos-teal hover:text-cosmos-teal transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-slate-500 hover:text-cosmos-teal transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
