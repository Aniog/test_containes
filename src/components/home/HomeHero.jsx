import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top:  `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() > 0.8 ? 'w-1.5 h-1.5' : 'w-1 h-1',
  opacity: Math.random() * 0.6 + 0.2,
  delay: `${Math.random() * 4}s`,
}));

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div
        data-strk-bg-id="hero-bg-a3f9c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 opacity-0 bg-cosmos"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-cosmos/70" />

      {/* Decorative stars */}
      {STARS.map((s) => (
        <span
          key={s.id}
          className={`absolute rounded-full bg-moonlight ${s.size} animate-pulse`}
          style={{ top: s.top, left: s.left, opacity: s.opacity, animationDelay: s.delay }}
        />
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(79,110,247,0.12)_0%,transparent_60%)] pointer-events-none" />

      {/* Hidden text references for image query */}
      <span id="hero-title" className="sr-only">Milky Way galaxy night sky stars nebula deep space</span>
      <span id="hero-subtitle" className="sr-only">stunning wide field astrophotography dark mountain landscape cosmos</span>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 space-y-8">
        <p className="font-inter text-xs uppercase tracking-widest text-aurora">
          Physics · Astronomy · Wonder
        </p>

        <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-moonlight leading-tight">
          The Universe<br />
          <em className="text-amber-star not-italic">Awaits</em>
        </h1>

        <p className="font-inter text-base md:text-lg text-comet leading-relaxed max-w-xl mx-auto">
          From the brushstrokes of Van Gogh's Starry Night to the equations of Einstein —
          physics and art converge in the infinite canvas of the cosmos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <NavLink
            to="/knowledge"
            className="inline-flex items-center gap-2 bg-aurora text-white font-inter text-sm px-6 py-3 rounded-lg hover:bg-aurora/90 active:scale-95 transition-all duration-200 shadow-aurora"
          >
            Begin Exploring
            <ArrowRight className="w-4 h-4" />
          </NavLink>
          <NavLink
            to="/gallery"
            className="inline-flex items-center gap-2 border border-stardust text-comet font-inter text-sm px-6 py-3 rounded-lg hover:border-aurora/40 hover:text-moonlight transition-all duration-200"
          >
            <Star className="w-4 h-4" />
            View Sky Map
          </NavLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-inter text-xs tracking-widest text-comet uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-comet to-transparent" />
      </div>
    </section>
  );
}
