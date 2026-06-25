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
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-f1-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#e10600] z-20" />

      {/* Speed lines decoration */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e10600]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block mb-6">
          <span className="text-[#e10600] font-bold uppercase tracking-[0.3em] text-sm md:text-base border border-[#e10600]/40 px-4 py-2">
            The Pinnacle of Motorsport
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none mb-6 text-white"
          style={{ letterSpacing: '-0.02em' }}
        >
          Formula
          <span className="text-[#e10600]"> 1</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Where engineering brilliance meets raw speed. Twenty drivers. Ten teams. One world championship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className="bg-[#e10600] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#b30500] transition-colors cursor-pointer border-none"
          >
            Explore F1
          </button>
          <button
            onClick={() => document.querySelector('#teams')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/40 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-[#e10600] hover:text-[#e10600] transition-colors cursor-pointer bg-transparent"
          >
            Meet the Teams
          </button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8">
          {[
            { value: '75+', label: 'Years of Racing' },
            { value: '20', label: 'Grand Prix Races' },
            { value: '10', label: 'Constructor Teams' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#e10600]">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors animate-bounce bg-transparent border-none cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
