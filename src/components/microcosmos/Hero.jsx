import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-xs md:text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4"
        >
          Explore the Invisible Universe
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            Micro
          </span>
          <span className="text-sky-50">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the microscopic world — where single cells, bacteria, and tiny organisms reveal the hidden architecture of life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-block px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#050d1a] font-bold rounded-full transition-all duration-200 no-underline text-sm tracking-wide shadow-lg shadow-cyan-500/30"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-3.5 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 font-semibold rounded-full transition-all duration-200 no-underline text-sm tracking-wide"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
