import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-bg/70 via-cosmos-bg/50 to-cosmos-bg" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-4"
        >
          Discover the invisible world
        </p>
        <h1
          id="hero-title"
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-slate-50 leading-tight mb-6"
        >
          Micro<span className="text-cosmos-primary">Cosmos</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Journey into the breathtaking universe that exists beyond the naked eye —
          where tardigrades roam, diatoms bloom, and life thrives in every drop of water.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="inline-flex items-center justify-center gap-2 bg-cosmos-primary text-cosmos-bg font-heading font-semibold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors duration-200"
          >
            Explore Gallery
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 border border-cosmos-border text-slate-200 font-heading font-medium px-8 py-3 rounded-full hover:border-cosmos-primary hover:text-cosmos-primary transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      <a
        href="#featured"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cosmos-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HomeHero;
