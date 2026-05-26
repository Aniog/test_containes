import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc099"
        data-strk-bg="fluorescent microscopy cell biology colorful glowing neon"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6 border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 rounded-full">
          Explore the Invisible World
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight"
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the hidden universe beneath our feet — where microscopic life forms create worlds of extraordinary beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition text-base"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="border border-cyan-400 text-cyan-400 px-8 py-3.5 rounded-full hover:bg-cyan-400/10 transition text-base"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
