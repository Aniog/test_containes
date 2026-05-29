import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full mb-6 border border-teal-500/30">
          Explore the Invisible World
        </span>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            MicroCosmos
          </span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Dive into the breathtaking universe of microscopic life — bacteria, viruses,
          fungi, and protozoa that shape our world in ways invisible to the naked eye.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/gallery"
            className="bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Explore Gallery
          </Link>
          <Link
            to="/organisms"
            className="border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-3 rounded-full transition-colors"
          >
            Meet the Organisms
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
