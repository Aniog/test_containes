import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cosmos-deep"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmos-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cosmos-violet/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmos-cyan/3 rounded-full blur-3xl" />
      </div>

      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-mc-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-deep/40 via-transparent to-cosmos-deep" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cosmos-cyan/10 border border-cosmos-cyan/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cosmos-cyan animate-pulse" />
          <span className="text-cosmos-cyan text-xs font-semibold uppercase tracking-widest">
            The Invisible Universe
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="text-white">Explore the</span>
          <br />
          <span className="bg-gradient-to-r from-cosmos-cyan via-blue-400 to-cosmos-violet bg-clip-text text-transparent">
            MicroCosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking world invisible to the naked eye — where
          cells dance, crystals bloom, and life pulses in extraordinary forms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-cosmos-cyan text-cosmos-deep font-bold px-8 py-3.5 rounded-full hover:bg-white transition-colors duration-200 text-base"
          >
            Begin the Journey
          </a>
          <a
            href="#gallery"
            className="border border-cosmos-cyan/40 text-cosmos-cyan font-semibold px-8 py-3.5 rounded-full hover:bg-cosmos-cyan/10 transition-colors duration-200 text-base"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cosmos-cyan transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
