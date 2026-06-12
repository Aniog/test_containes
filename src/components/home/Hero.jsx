import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-body font-semibold tracking-widest uppercase">
              Precision Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="font-heading font-bold text-white text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight mb-6"
          >
            Engineered to
            <span className="block text-gold">Fold Perfectly.</span>
          </h1>

          {/* Subtext */}
          <p
            id="hero-subtitle"
            className="font-body text-silver text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers industrial-grade sheet metal folding machines — built for precision, durability, and the demands of modern fabrication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-heading font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-200 tracking-wide"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-heading font-semibold text-sm px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-colors duration-200 tracking-wide"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-gold text-3xl">{stat.value}</div>
                <div className="font-body text-silver text-xs tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-silver hover:text-gold transition-colors"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
