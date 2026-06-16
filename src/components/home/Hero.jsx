import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-7f3a2e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy/85 to-brand-navy-dark/70" />
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-40 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-60 w-48 h-48 border border-white/15 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-sm font-medium text-brand-gold-light">
              Precision Engineering Since 1998
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Superior Sheet Metal{' '}
            <span className="text-brand-gold">Folding</span>{' '}
            Solutions
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines
            and sheet metal folders engineered for unmatched precision, durability,
            and performance in every fold.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="btn-secondary text-base !px-8 !py-4">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-3 text-white/90 hover:text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">25+</div>
              <div className="text-sm text-slate-400 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">5000+</div>
              <div className="text-sm text-slate-400 mt-1">Machines Delivered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">98%</div>
              <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
