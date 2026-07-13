import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/50" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Eyebrow */}
          <p className="text-brand-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase mb-6">
            Precision Sheet Metal Solutions
          </p>

          {/* Headline */}
          <h1
            id="hero-title"
            className="font-heading font-extrabold text-brand-white text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
          >
            Engineered to
            <span className="block text-brand-gold">Fold Perfectly.</span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subtitle"
            className="font-body text-brand-silver text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
          >
            ARTITECT MACHINERY delivers industrial-grade sheet metal folding machines
            built for precision, durability, and efficiency — trusted by fabricators worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="bg-brand-gold text-brand-navy font-heading font-bold text-sm rounded-full px-8 py-4 hover:bg-brand-gold-light transition-colors duration-200 border-none cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="border border-brand-gold/60 text-brand-white font-heading font-semibold text-sm rounded-full px-8 py-4 hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-200 bg-transparent cursor-pointer"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 border-t border-brand-silver/20 pt-8">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '80+', label: 'Countries Served' },
              { value: '5,000+', label: 'Machines Installed' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-extrabold text-brand-gold text-2xl lg:text-3xl">{stat.value}</p>
                <p className="font-body text-brand-silver text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image card */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-silver/10">
            <img
              alt="Sheet metal folding machine in operation"
              data-strk-img-id="hero-machine-img-9b3c1d"
              data-strk-img="[hero-subtitle] [hero-title] sheet metal folding machine industrial"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 bg-brand-navy/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-brand-gold/30">
              <p className="font-heading font-bold text-brand-white text-sm">ISO 9001 Certified</p>
              <p className="font-body text-brand-silver text-xs mt-0.5">Quality Assured Manufacturing</p>
            </div>
          </div>
          {/* Decorative accent */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-brand-gold/30 rounded-2xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-gold/10 rounded-xl -z-10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-brand-silver hover:text-brand-gold transition-colors bg-transparent border-none cursor-pointer flex flex-col items-center gap-1 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
};

export default HeroSection;
