import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
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

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-steel-900"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-steel-900/95 via-steel-900/80 to-steel-900/40" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
              Precision Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-steel-100 leading-tight mb-6"
          >
            Engineering
            <span className="block text-gold-500">Excellence</span>
            in Metal Folding
          </h1>

          {/* Subheading */}
          <p
            id="hero-subtitle"
            className="text-steel-200 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers industrial-grade sheet metal folding machines
            built for precision, durability, and unmatched performance on the production floor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 border border-steel-600 hover:border-gold-500 text-steel-200 hover:text-gold-500 font-medium px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-steel-600/40">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-gold-500">{stat.value}</div>
                <div className="text-steel-400 text-xs tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-steel-400 hover:text-gold-500 transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
