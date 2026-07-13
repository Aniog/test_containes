import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/92 via-brand-navy/75 to-brand-steel/50" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-accent" />
            <span className="font-inter font-medium text-brand-accent text-sm tracking-[0.25em] uppercase">
              Precision Engineering
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Sheet Metal
            <br />
            <span className="text-brand-accent">Folding</span>
            <br />
            Redefined.
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="font-inter text-lg md:text-xl text-white/75 max-w-xl mb-10 leading-relaxed"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines
            and sheet metal folders engineered for precision, durability, and
            unmatched performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-inter font-semibold text-base bg-brand-accent text-white px-8 py-4 rounded-full hover:bg-brand-accent-light transition-all duration-200 shadow-lg"
            >
              Explore Products
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-inter font-semibold text-base border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/15">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair font-bold text-3xl text-brand-accent">{stat.value}</div>
                <div className="font-inter text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 hover:text-brand-accent transition-colors bg-transparent border-none cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
