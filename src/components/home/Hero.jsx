import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-navy/75" />

      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold z-20 hidden lg:block" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-sans text-xs font-semibold text-gold tracking-[0.3em] uppercase mb-6">
            Precision Engineering Since 1998
          </p>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="font-serif text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Engineered for
            <span className="block text-gold italic">Perfection.</span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="font-sans text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class sheet metal folding machines — 
            built for precision, designed for productivity, trusted by industry leaders worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-sans font-semibold text-sm bg-gold text-navy px-10 py-4 hover:bg-gold-dark transition-colors duration-200 tracking-widest uppercase"
            >
              Explore Products
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-sans font-semibold text-sm border-2 border-white/50 text-white px-10 py-4 hover:border-gold hover:text-gold transition-colors duration-200 tracking-widest uppercase"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/15">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '80+', label: 'Countries Served' },
              { value: '5,000+', label: 'Machines Delivered' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                <p className="font-sans text-xs text-white/60 tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-gold transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
