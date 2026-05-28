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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />

      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-cyan-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-4"
        >
          Explore the Invisible
        </p>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none mb-6"
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the microscopic world — where bacteria, cells, and organisms reveal the universe hidden beneath our eyes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-gray-600 hover:border-cyan-400 text-gray-200 hover:text-cyan-400 font-semibold rounded-full transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
