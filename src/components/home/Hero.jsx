import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Award, Globe, Wrench } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Machines Delivered' },
  { value: '60+', label: 'Countries Served' },
  { value: '99%', label: 'Client Satisfaction' },
];

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
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-steel-navy">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-navy via-steel-navy/95 to-iron-blue/80" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-precision-blue via-copper-gold to-precision-blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-copper-gold/15 border border-copper-gold/30 text-copper-gold text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
              <Award size={12} />
              <span>Industry-Leading Precision</span>
            </div>

            <h1 id="hero-title" className="font-heading font-bold text-white leading-tight mb-6">
              <span className="text-5xl md:text-6xl lg:text-7xl block">
                PRECISION
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl block text-sky-accent">
                SHEET METAL
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl block">
                FOLDING
              </span>
            </h1>

            <p id="hero-subtitle" className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg font-body">
              Engineering excellence in double folding machines, metal folders, and sheet metal folding solutions. Built for precision, designed for productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToProducts}
                className="flex items-center justify-center gap-2 bg-precision-blue hover:bg-sky-accent text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-precision-blue/30 group"
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                Request a Quote
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-copper-gold" />
                <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-copper-gold" />
                <span>Global Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench size={16} className="text-copper-gold" />
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-iron-blue/40">
              <img
                alt="Artitect Machinery sheet metal folding machine"
                data-strk-img-id="hero-machine-img-9p3q1r"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full object-cover"
              />
              {/* Image overlay badge */}
              <div className="absolute bottom-4 left-4 bg-steel-navy/90 backdrop-blur-sm border border-iron-blue/50 rounded-xl px-4 py-3">
                <div className="text-copper-gold font-heading font-bold text-lg">Double Folder Series</div>
                <div className="text-gray-300 text-xs">High-precision sheet metal folding</div>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="absolute -top-4 -right-4 bg-precision-blue rounded-xl px-4 py-3 shadow-xl">
              <div className="text-white font-heading font-bold text-2xl">±0.1mm</div>
              <div className="text-blue-200 text-xs">Folding Accuracy</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-iron-blue/40 pt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-4xl text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
