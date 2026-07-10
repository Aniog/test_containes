import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-dark/90 via-brand-navy/80 to-brand-navy/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">
              Industrial Precision
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight mb-6"
          >
            Sheet Metal Folding
            <span className="block text-brand-gold">Redefined.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-brand-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers precision-engineered double folding machines and metal folders built for demanding industrial environments. Uncompromising quality, exceptional performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200 text-sm tracking-wide"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-white/30 text-brand-white font-semibold px-8 py-4 rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-200 text-sm tracking-wide"
            >
              Request a Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-brand-gold font-serif font-bold text-3xl">{stat.value}</div>
                <div className="text-brand-white/50 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-brand-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
