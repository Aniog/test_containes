import { useEffect, useRef } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden bg-cinema-black">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-strk-bg-id="hero-noir-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Multi-layer gradient overlay for noir atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-cinema-black via-cinema-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-cinema-black/40" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">

          {/* Pre-title label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-cinema-gold" />
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-cinema-gold">
              Now Screening
            </span>
          </div>

          {/* Hidden text refs for image search */}
          <span id="hero-title" className="sr-only">classic noir film shadows darkness mystery</span>
          <span id="hero-subtitle" className="sr-only">cinematic black and white dramatic lighting</span>

          {/* Main Title */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-[7rem] xl:text-[9rem] font-light leading-none tracking-widest uppercase text-cinema-white mb-6">
            Noir
            <br />
            <span className="text-cinema-pearl/80">Cinema</span>
          </h1>

          {/* Tagline */}
          <p className="font-sans text-sm font-light tracking-[0.15em] text-cinema-smoke mb-12 max-w-md leading-relaxed">
            Where shadows speak and silence tells the story.
            <br />
            A curated selection of the world's finest films.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 bg-cinema-white text-cinema-black text-[10px] font-sans font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-cinema-pearl transition-colors duration-300">
              <Play className="w-3 h-3 fill-current" />
              Watch Trailer
            </button>
            <button className="flex items-center gap-3 border border-white/40 text-cinema-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-8 py-4 hover:border-cinema-white transition-colors duration-300">
              View Programme
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-cinema-silver">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cinema-silver" />
      </div>

      {/* Side label */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <div className="h-16 w-px bg-white/20" />
        <span
          className="text-[9px] font-sans tracking-[0.25em] uppercase text-cinema-silver"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Est. 1924
        </span>
        <div className="h-16 w-px bg-white/20" />
      </div>
    </section>
  );
}
