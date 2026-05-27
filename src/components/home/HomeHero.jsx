import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-microbg/70 via-microbg/50 to-microbg" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-microteal/10 rounded-full blur-3xl z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-micropurple/10 rounded-full blur-3xl z-10 animate-pulse-slow" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <p
          id="hero-subtitle"
          className="text-microteal text-sm font-semibold uppercase tracking-widest mb-6"
        >
          Welcome to the invisible universe
        </p>
        <h1
          id="hero-title"
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-microtext leading-tight mb-6"
        >
          The World
          <br />
          <span className="text-microteal">Beneath</span> the Lens
        </h1>
        <p className="text-micromuted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Dive into the breathtaking microscopic realm — where bacteria dance, crystals bloom,
          and life reveals its most intricate secrets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-microteal text-microbg font-semibold px-8 py-4 rounded-full hover:bg-microglow transition-colors text-base"
          >
            Start Exploring <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border border-microteal/60 text-microteal px-8 py-4 rounded-full hover:bg-microteal/10 transition-colors text-base"
          >
            View Gallery
          </Link>
        </div>
      </div>

      <a
        href="#featured"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-microdim hover:text-microteal transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
};

export default HomeHero;
