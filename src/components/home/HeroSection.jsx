import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const val = 1 - window.scrollY / 200;
      setOpacity(Math.max(0, val));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-velmora-deep">
        <div className="w-full h-full bg-gradient-to-br from-velmora-charcoal via-velmora-deep to-velmora-charcoal opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-velmora-gold/20 via-transparent to-transparent" />
      </div>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/60 via-transparent to-velmora-deep/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 text-balance">
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p className="text-white/70 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Demi-fine gold jewelry for the modern woman. Elevated everyday pieces designed to layer, stack, and live in — forever.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-widest uppercase transition-opacity duration-200"
        style={{ color: `rgba(255,255,255,${0.4 * opacity})` }}
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" style={{ opacity }} />
      </div>
    </section>
  );
}
