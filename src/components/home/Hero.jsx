import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/60 via-cosmos-bg/40 to-cosmos-bg" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-cosmos-cyan mb-6">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-cosmos-text mb-6 leading-none"
        >
          Micro<span className="text-cosmos-cyan">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the hidden universe beneath our eyes — where bacteria, cells, and crystals reveal nature's most extraordinary art.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-cosmos-cyan text-cosmos-bg font-bold rounded-full text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-cosmos-border text-cosmos-text font-semibold rounded-full text-sm uppercase tracking-widest hover:border-cosmos-cyan hover:text-cosmos-cyan transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-cosmos-muted uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cosmos-cyan to-transparent" />
      </div>
    </section>
  );
}
