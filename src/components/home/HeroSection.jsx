import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="font-body text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Industrial Precision
          </p>
          <h1
            id="hero-title"
            className="font-heading font-800 text-brand-white text-4xl md:text-6xl leading-tight mb-6"
          >
            Sheet Metal Folding Machines Built to Perform
          </h1>
          <p
            id="hero-subtitle"
            className="font-body text-brand-silver text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class double folding machines, metal folders, and sheet metal folding solutions engineered for precision, durability, and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-block bg-brand-gold text-brand-navy font-heading font-semibold px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors duration-200 text-center"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-block border-2 border-brand-gold text-brand-gold font-heading font-semibold px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-navy transition-colors duration-200 text-center"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-brand-navy/90 backdrop-blur-sm border-t border-brand-steel/50">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '500+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-800 text-brand-gold text-2xl md:text-3xl">{stat.value}</div>
              <div className="font-body text-brand-silver text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-28 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-brand-silver hover:text-brand-gold transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
