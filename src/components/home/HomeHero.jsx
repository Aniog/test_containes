import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-hero-bg-a1b2c3"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 md:px-8">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Discover the Invisible World
        </div>

        <h1
          id="home-hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none"
        >
          Micro<span className="text-teal-400">Cosmos</span>
        </h1>

        <p
          id="home-hero-subtitle"
          className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Journey into the hidden universe of microscopic life — where bacteria dance, crystals bloom, and entire worlds exist beyond the naked eye.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-8 py-4 rounded-full transition-all text-base"
          >
            Start Exploring <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 px-8 py-4 rounded-full transition-all text-base"
          >
            View Gallery
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-500 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
