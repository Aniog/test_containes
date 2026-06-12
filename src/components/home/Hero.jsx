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
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-brand-navy"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />

      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-brand-accent" />
            <span className="text-brand-accent text-xs font-semibold tracking-[0.25em] uppercase">
              Precision Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Engineering
            <span className="block text-brand-accent">Excellence</span>
            in Metal Folding
          </h1>

          {/* Subheading */}
          <p
            id="hero-subtitle"
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class double folding machines and sheet metal folders — built for precision, durability, and the demands of modern fabrication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="flex items-center justify-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-brand-accent-light transition-all duration-200 shadow-lg"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-base hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15">
            {[
              { value: '25+', label: 'Years of Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-brand-accent text-3xl font-bold">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
