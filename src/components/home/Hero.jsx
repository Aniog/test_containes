import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Precision Engineering
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Master the Art of
            <span className="block text-gold">Metal Folding</span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines and sheet metal folders engineered for precision, durability, and effortless operation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-steel hover:bg-sky-accent text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50 font-medium tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
