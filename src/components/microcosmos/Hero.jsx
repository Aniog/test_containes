import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-xs uppercase tracking-widest font-medium">Explore the Invisible</span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none mb-6"
        >
          The World<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            Beneath the Eye
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the breathtaking universe of microscopic life — bacteria, cells, fungi, plankton, and organisms invisible to the naked eye.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold rounded-full px-8 py-4 text-base transition shadow-lg shadow-cyan-500/20"
          >
            Start Exploring
          </a>
          <a
            href="#gallery"
            className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-8 py-4 text-base transition"
          >
            View Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
