import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/70 via-teal-900/60 to-teal-950/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <span className="inline-block bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Premium Fishing Gear
        </span>
        <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Gear Up for the<br />
          <span className="text-amber-400">Perfect Catch</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover professional-grade fishing rods, reels, lures, and accessories trusted by anglers worldwide. From freshwater to deep sea — we have everything you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-10 py-4 text-base font-bold transition-colors shadow-lg"
          >
            Shop Equipment
          </a>
          <a
            href="#categories"
            className="border-2 border-white text-white hover:bg-white hover:text-teal-800 rounded-full px-10 py-4 text-base font-bold transition-colors"
          >
            Browse Categories
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Products' },
            { value: '50K+', label: 'Happy Anglers' },
            { value: '15+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-amber-400">{stat.value}</div>
              <div className="text-sm text-teal-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
