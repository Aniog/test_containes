import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-8 pt-20">
        <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
          The Ultimate Challenge
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-6"
        >
          Conquer the<br />
          <span className="text-amber-400">World's Peaks</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          From the Himalayas to the Andes — explore the geography, gear, and elite teams
          that push human limits to the top of the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/geography"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-colors"
          >
            Explore Now
          </Link>
          <Link
            to="/teams"
            className="border border-slate-600 hover:border-amber-500 text-white px-8 py-4 rounded-xl text-base transition-colors"
          >
            Meet the Teams
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 border-t border-slate-700 pt-10">
          {[
            { value: '8,849m', label: 'Highest Peak' },
            { value: '7 Summits', label: 'Continents' },
            { value: '~800', label: 'Everest Summits/yr' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-amber-400">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#geography"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
