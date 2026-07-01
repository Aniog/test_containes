import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-ocean"
        data-strk-bg-id="hero-bg-k1m2n3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-coral/90 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          Indonesia's Wild Paradise
        </span>
        <h1
          id="hero-title"
          className="font-serif font-bold text-5xl md:text-7xl text-white leading-tight mb-6"
        >
          Discover the Magic of Komodo
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Ancient dragons, pink sand beaches, and crystal-clear waters await you
          in one of the world's most extraordinary destinations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#attractions')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-coral hover:bg-coral-dark text-white font-semibold rounded-full px-8 py-4 text-base transition-colors border-none cursor-pointer"
          >
            Explore Komodo
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-ocean font-semibold rounded-full px-8 py-4 text-base transition-colors bg-transparent cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
