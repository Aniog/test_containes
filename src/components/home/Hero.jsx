import { useEffect, useRef } from 'react';
import { ChevronDown, Award, Wrench, Globe } from 'lucide-react';
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
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
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
      <div className="absolute inset-0 z-0 bg-navy/80" />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-widest uppercase font-sans font-semibold">
              Precision Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="font-serif text-surface text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Engineering
            <span className="block text-gold">Excellence</span>
            in Metal Folding
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-surface/70 text-lg lg:text-xl font-sans leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines and sheet metal folders engineered for precision, built for performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="bg-gold text-navy text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200 font-sans"
            >
              Explore Products
            </button>
            <button
              onClick={scrollToContact}
              className="border border-gold text-gold text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gold hover:text-navy transition-colors duration-200 font-sans"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy/60 px-6 py-6 text-center">
              <div className="font-serif text-gold text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-surface/60 text-xs tracking-widest uppercase font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold/60 hover:text-gold transition-colors duration-200 animate-bounce focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
};

export default Hero;
