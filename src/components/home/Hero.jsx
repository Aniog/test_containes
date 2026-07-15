import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-steel/80 via-steel/70 to-steel/90" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto pt-24">
        <p className="font-inter text-xs text-gold tracking-[0.35em] uppercase mb-6 animate-fade-in">
          Precision Engineered · Perfectly Formed
        </p>
        <h1
          id="hero-title"
          className="font-playfair font-bold text-5xl md:text-7xl text-chalk leading-tight mb-6 animate-fade-in-up"
        >
          The Art of Sheet Metal Folding
        </h1>
        <p
          id="hero-subtitle"
          className="font-inter text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200"
        >
          ARTITECT MACHINERY delivers world-class double folding machines and metal folder solutions — built for precision, designed for performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <button
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-inter font-semibold bg-gold text-steel px-10 py-4 rounded-full hover:bg-gold-light transition-all duration-200 text-base border-none cursor-pointer"
          >
            Explore Products
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-inter font-semibold border-2 border-gold text-gold px-10 py-4 rounded-full hover:bg-gold hover:text-steel transition-all duration-200 text-base bg-transparent cursor-pointer"
          >
            Request a Quote
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-10 animate-fade-in-up delay-400">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '80+', label: 'Countries Served' },
            { value: '5,000+', label: 'Machines Delivered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair font-bold text-3xl md:text-4xl text-gold">{stat.value}</div>
              <div className="font-inter text-xs text-silver mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-silver hover:text-gold transition-colors animate-bounce bg-transparent border-none cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
