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
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4"
        >
          Explore the Invisible Universe
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#e2f4ff] leading-tight mb-6"
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p className="text-[#94b8d0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A breathtaking journey into the hidden world of microscopic life — where bacteria, fungi, protozoa, and viruses shape the very fabric of existence.
        </p>
        <a
          href="#intro"
          className="inline-block bg-cyan-400 text-[#050a14] font-bold px-8 py-3 rounded-full text-base hover:bg-cyan-300 transition-colors duration-300 shadow-[0_0_30px_rgba(0,200,255,0.4)]"
        >
          Begin Exploring
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#4a7a9b]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
