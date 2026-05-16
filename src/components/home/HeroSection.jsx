import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-brand-text/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-start gap-6">
        <span className="bg-brand-green-pale text-brand-green text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Fresh &amp; Natural
        </span>
        <h1 id="hero-title" className="text-white font-black text-5xl md:text-7xl leading-tight max-w-2xl">
          Bring Nature Into Your Home
        </h1>
        <p id="hero-subtitle" className="text-white/85 text-lg md:text-xl max-w-xl leading-relaxed">
          Beautiful, hand-picked green plants to brighten every corner of your living space. Easy to care for, delivered to your door.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#plants"
            className="bg-brand-green text-white rounded-full px-8 py-3 font-bold text-base hover:bg-brand-green-light transition-colors text-center"
          >
            Browse Plants
          </a>
          <a
            href="#why-us"
            className="border-2 border-white text-white rounded-full px-8 py-3 font-bold text-base hover:bg-white hover:text-brand-green transition-colors text-center"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#plants"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-7 h-7" />
      </a>
    </section>
  );
};

export default HeroSection;
