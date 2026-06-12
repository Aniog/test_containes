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
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        data-strk-bg-id="hero-bg-artitect-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/40 to-brand-navy/80" />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <p className="font-inter text-brand-gold text-xs uppercase tracking-widest mb-6">
          Precision Sheet Metal Fabrication Equipment
        </p>

        {/* Main Heading */}
        <h1
          id="hero-title"
          className="font-playfair font-bold text-brand-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Engineering the Art of
          <span className="block text-brand-gold">Perfect Folds</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="font-inter text-brand-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          ARTITECT MACHINERY delivers world-class sheet metal folding machines —
          double folding machines, metal folders, and industrial folding solutions
          built for precision, durability, and efficiency.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProducts}
            className="bg-brand-gold text-brand-navy font-inter font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 w-full sm:w-auto"
          >
            Explore Products
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-brand-gold text-brand-gold font-inter font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 w-full sm:w-auto"
          >
            Request a Quote
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-brand-steel pt-10">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair font-bold text-brand-gold text-3xl md:text-4xl">{stat.value}</p>
              <p className="font-inter text-brand-silver text-xs uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-silver hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
