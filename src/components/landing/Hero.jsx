import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p id="hero-subtitle" className="text-green-leaf font-sans font-medium tracking-widest uppercase text-sm mb-4">
          Discover the beauty of our planet
        </p>
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Embrace the<br />
          <span className="text-green-leaf">Wild Nature</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
          Journey through breathtaking landscapes, ancient forests, and pristine wilderness.
          Nature is calling — are you ready to answer?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-green-forest hover:bg-green-leaf text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Start Exploring
          </a>
          <a
            href="#gallery"
            className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
