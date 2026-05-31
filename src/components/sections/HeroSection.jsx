import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BUBBLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 14 + 4,
  left: Math.random() * 100,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 10,
}));

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector('#cities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Animated bubbles */}
      {BUBBLES.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,212,255,0.08)_0%,transparent_70%)]" />

      {/* Depth lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full border-t border-bio-cyan/30"
            style={{ top: `${(i + 1) * 12}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-3 bg-bio-cyan/5 border border-bio-cyan/20 rounded-full px-5 py-2">
          <div className="w-2 h-2 rounded-full bg-glow-aqua animate-pulse" />
          <span className="font-heading text-xs text-bio-cyan uppercase tracking-[0.3em] font-semibold">
            Classified — Deep Ocean Intelligence
          </span>
        </div>

        <h1
          id="hero-title"
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-pearl mb-4 tracking-widest"
          style={{ textShadow: '0 0 60px rgba(0,212,255,0.3), 0 0 120px rgba(0,212,255,0.1)' }}
        >
          ABYSSIA
        </h1>

        <p
          id="hero-subtitle"
          className="font-heading text-lg md:text-2xl text-bio-cyan font-light tracking-[0.2em] uppercase mb-6"
        >
          The Hidden Civilization of the Deep
        </p>

        <p className="font-sans text-muted-slate text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          For 14,000 years, a civilization of extraordinary intelligence has flourished
          4,200 meters beneath the ocean surface — unseen, undetected, and far beyond
          anything the surface world has ever imagined.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToNext}
            className="font-heading font-semibold text-sm uppercase tracking-widest bg-bio-cyan text-abyss px-8 py-4 rounded-full hover:bg-glow-aqua transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,204,0.5)]"
          >
            Begin Descent
          </button>
          <button
            onClick={() => document.querySelector('#government')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-heading font-medium text-sm uppercase tracking-widest border border-bio-cyan/30 text-bio-cyan px-8 py-4 rounded-full hover:border-bio-cyan hover:bg-bio-cyan/5 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-xl mx-auto">
          {[
            { value: '14,000', label: 'Years Old' },
            { value: '2.4B', label: 'Citizens' },
            { value: '4,200m', label: 'Depth' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-bio-cyan">{stat.value}</div>
              <div className="font-heading text-xs text-muted-slate uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bio-cyan/60 hover:text-bio-cyan transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
