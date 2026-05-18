import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <p id="hero-label" className="text-teal-400 text-xs tracking-widest uppercase font-semibold mb-6">
          Explore the Invisible Universe
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          A breathtaking journey into the microscopic world — where bacteria, cells, and organisms invisible to the naked eye reveal the hidden architecture of life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-teal-400 text-[#050d1a] font-semibold rounded-full hover:bg-teal-300 transition-colors duration-300 text-sm tracking-wide"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-teal-400/40 text-teal-300 font-semibold rounded-full hover:border-teal-400 hover:text-teal-200 transition-colors duration-300 text-sm tracking-wide"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-teal-400/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
