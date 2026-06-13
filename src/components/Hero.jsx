import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleExplore = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image via stock system */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-am-9f2a1c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 100%)' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-dark/80" />

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-brand-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4">
          Precision Engineering Since 1987
        </span>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          ARTITECT
          <br />
          <span className="text-brand-gold">MACHINERY</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Industry-leading double folding machines and sheet metal folders
          engineered for precision, built for performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleExplore}
            className="flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded font-semibold uppercase tracking-wider hover:bg-brand-bronze transition-colors"
          >
            Explore Products
            <ChevronRight size={18} />
          </button>
          <button
            onClick={handleContact}
            className="border border-white/30 text-white px-8 py-4 rounded font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Get a Quote
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            ISO 9001 Certified
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            30+ Years Experience
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Global Shipping
          </span>
        </div>
      </div>
    </section>
  );
}
