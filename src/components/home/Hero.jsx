import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-brand-gold" />
          <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-medium">
            Precision Sheet Metal Solutions
          </span>
          <div className="h-px w-12 bg-brand-gold" />
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-brand-white leading-tight mb-6"
        >
          Engineering
          <span className="block text-brand-gold">Perfection</span>
          in Every Fold
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subtitle"
          className="text-brand-silver text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          ARTITECT MACHINERY delivers world-class double folding machines and sheet metal folding solutions — built for precision, engineered for durability.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#products')}
            className="bg-brand-gold text-brand-navy font-semibold rounded-full px-10 py-4 text-base hover:bg-brand-gold-light transition-colors duration-200 uppercase tracking-wide w-full sm:w-auto"
          >
            Explore Products
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="border border-brand-gold text-brand-gold rounded-full px-10 py-4 text-base hover:bg-brand-gold hover:text-brand-navy transition-colors duration-200 uppercase tracking-wide w-full sm:w-auto"
          >
            Get a Quote
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-brand-gold text-3xl font-bold">{stat.value}</div>
              <div className="text-brand-silver text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-brand-silver hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
