import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: "linear-gradient(to bottom, #0c1a2e, #1e3a5f)" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a2e]/60 via-transparent to-[#0c1a2e]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p id="hero-subtitle" className="text-sky-300 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Look Up and Wonder
        </p>
        <h1 id="hero-title" className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          The Sky Above Us
        </h1>
        <p className="text-sky-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          From the golden hues of sunrise to the infinite canvas of the night sky —
          explore the breathtaking beauty that unfolds above us every single day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#sky-types"
            className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-sky-500/40"
          >
            Explore the Sky
          </a>
          <a
            href="#gallery"
            className="inline-block border border-sky-400/60 hover:border-sky-300 text-sky-200 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sky-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
