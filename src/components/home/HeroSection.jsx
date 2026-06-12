import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
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
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-navy/85 z-10" />

      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-8" style={{color: '#C9A84C', borderColor: 'rgba(201,168,76,0.4)'}}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" style={{backgroundColor: '#C9A84C'}} />
            Precision Sheet Metal Solutions
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{color: '#F4F6F9'}}
          >
            Engineer the
            <span className="block" style={{color: '#C9A84C'}}>Perfect Fold.</span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subtitle"
            className="text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            style={{color: 'rgba(244,246,249,0.75)'}}
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines,
            sheet metal folders, and metal folding systems built for precision,
            durability, and efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors duration-200 group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 border-2 border-surface/40 text-surface px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-surface/15" style={{borderColor: 'rgba(244,246,249,0.15)'}}>
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold" style={{color: '#C9A84C'}}>{stat.value}</div>
                <div className="text-sm mt-1 tracking-wide" style={{color: 'rgba(244,246,249,0.6)'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-surface/50 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
