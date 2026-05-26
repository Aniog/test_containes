import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a3f9c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span
          id="hero-subtitle"
          className="inline-block accent-text text-xs font-bold uppercase tracking-widest mb-6 border accent-border px-4 py-1 rounded-full border-opacity-40"
          style={{ borderColor: 'var(--accent)', opacity: 1 }}
        >
          Street. Park. Vert. All of it.
        </span>

        <h1
          id="hero-title"
          className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-zinc-100 leading-none uppercase mb-6"
        >
          Skate<br />
          <span className="accent-text">Or Die</span>
        </h1>

        <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto mb-10 font-body">
          The ultimate destination for skaters of every level. Learn tricks, find gear, and connect with the global skate community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tricks"
            className="accent-bg accent-text-on font-bold uppercase tracking-widest px-8 py-4 rounded-full hover-accent-bg transition text-sm"
          >
            Learn Tricks
          </a>
          <a
            href="#community"
            className="border-2 border-zinc-600 text-zinc-100 font-bold uppercase tracking-widest px-8 py-4 rounded-full hover-accent-border hover-accent-text transition text-sm"
          >
            Join the Crew
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;

