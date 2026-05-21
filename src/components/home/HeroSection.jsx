import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-steel-black">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-steel-black via-steel-black/85 to-steel-black/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="font-inter text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-6">
            Precision Engineered
          </p>
          <h1 id="hero-title" className="font-playfair text-5xl lg:text-6xl font-bold text-off-white leading-tight mb-6">
            Industrial Metal<br />
            <span className="italic text-gold">Folding Machines</span>
          </h1>
          <p id="hero-subtitle" className="font-inter text-lg text-platinum leading-relaxed mb-10 max-w-xl">
            ARTITECT MACHINERY delivers world-class sheet metal folding solutions — engineered for precision, built for performance, designed to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="font-inter font-semibold text-sm bg-gold text-steel-black px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200 shadow-gold-glow"
            >
              Explore Products
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-inter font-semibold text-sm border border-gold text-gold px-8 py-4 rounded hover:bg-gold hover:text-steel-black transition-colors duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-iron-gray">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair text-3xl font-bold text-gold">{stat.value}</p>
                <p className="font-inter text-sm text-silver mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-silver hover:text-gold transition-colors animate-bounce bg-transparent border-none"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
