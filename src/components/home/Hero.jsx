import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '3,000+', label: 'Machines Delivered' },
  { value: '60+', label: 'Countries Served' },
  { value: '99.2%', label: 'Uptime Reliability' },
];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy"
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/50" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 z-20 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/30 text-brand-sky text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse" />
            Industrial Precision Equipment
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold text-brand-white leading-tight tracking-tight mb-6"
          >
            Sheet Metal
            <span className="block text-brand-sky">Folding Machines</span>
            <span className="block text-3xl md:text-4xl font-light text-brand-silver mt-2">
              Built to Perform. Designed to Last.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-brand-silver leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class double folding machines, metal folders,
            and sheet metal forming solutions trusted by fabricators across the globe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base group"
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-silver/40 hover:border-brand-sky text-brand-white hover:text-brand-sky font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-brand-white">{stat.value}</div>
                <div className="text-xs text-brand-silver mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-brand-silver hover:text-brand-sky transition-colors flex flex-col items-center gap-1 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
