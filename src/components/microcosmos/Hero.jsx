import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Explore the invisible world</span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-none"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            MicroCosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the breathtaking universe hidden beneath the lens — where bacteria glow, cells dance, and crystals bloom in silence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-8 py-4 rounded-full transition text-lg"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-full transition text-lg"
          >
            View Gallery
          </a>
        </div>
      </div>

      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-cyan-400 transition animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
