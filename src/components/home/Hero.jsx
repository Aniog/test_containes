import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-5 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
          <span className="text-brand-gold text-xs font-medium tracking-widest uppercase">
            Precision Sheet Metal Solutions
          </span>
        </div>

        <h1
          id="hero-title"
          className="font-heading font-bold text-brand-white text-5xl md:text-7xl leading-tight tracking-tight mb-6"
        >
          Engineering
          <span className="block text-brand-gold">Perfection</span>
          in Every Fold
        </h1>

        <p
          id="hero-subtitle"
          className="text-brand-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          ARTITECT MACHINERY delivers world-class sheet metal folding machines —
          built for precision, designed for productivity, engineered to last.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200 flex items-center gap-2 text-base tracking-wide"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="border-2 border-brand-gold/60 text-brand-white font-semibold px-8 py-4 rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-200 text-base tracking-wide"
          >
            Request a Quote
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-brand-gold text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="text-brand-silver text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-brand-silver hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
