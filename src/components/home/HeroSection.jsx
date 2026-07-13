import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
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
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-black/70 via-cosmos-black/50 to-cosmos-black" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-cosmos-teal/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cosmos-teal/10 border border-cosmos-teal/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
          <span className="text-cosmos-teal text-sm font-medium tracking-widest uppercase">
            Explore the Invisible World
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6 leading-none"
        >
          Micro
          <span className="text-cosmos-teal">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the breathtaking universe hidden beneath the lens — where single cells
          pulse with life and microscopic organisms shape our world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-cosmos-teal text-cosmos-black font-bold px-8 py-4 rounded-full hover:bg-cosmos-cyan transition-all duration-300 shadow-glow-teal"
          >
            Explore Gallery
          </a>
          <a
            href="#specimens"
            className="inline-flex items-center gap-2 border border-cosmos-border text-slate-200 font-semibold px-8 py-4 rounded-full hover:border-cosmos-teal hover:text-cosmos-teal transition-all duration-300"
          >
            View Specimens
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default HeroSection;
