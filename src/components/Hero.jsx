import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/60 via-cosmos-bg/40 to-cosmos-bg" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-cosmos-cyan text-sm font-medium tracking-widest uppercase mb-6">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none"
        >
          Micro<span className="text-cosmos-cyan">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the microscopic universe — where bacteria, cells, crystals, and fungi reveal a hidden world of extraordinary beauty.
        </p>
        <a
          href="#introduction"
          className="inline-block bg-cosmos-cyan text-cosmos-bg font-bold px-8 py-4 rounded-full text-base hover:bg-white transition-colors duration-300"
        >
          Begin Exploring
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cosmos-cyan to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
