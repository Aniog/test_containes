import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-brand-navy"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-6">
          Precision Engineering Since 2005
        </p>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold text-brand-white leading-tight tracking-tight mb-6"
        >
          The Art of
          <span className="block text-brand-gold">Metal Folding</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-brand-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          ARTITECT MACHINERY delivers world-class sheet metal folding machines —
          engineered for precision, built for performance, designed for your workshop.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProducts}
            className="flex items-center gap-2 bg-brand-gold text-brand-navy font-bold rounded-full px-8 py-4 hover:bg-brand-gold-light transition-all duration-300 text-base"
          >
            Explore Machines
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 border-2 border-brand-gold text-brand-gold font-bold rounded-full px-8 py-4 hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-base"
          >
            Request a Quote
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '500+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-gold">{stat.value}</div>
              <div className="text-brand-silver text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-silver hover:text-brand-gold transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
