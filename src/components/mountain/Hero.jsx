import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-sky-500/30">
          Conquer the Impossible
        </span>
        <h1
          id="hero-title"
          className="font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6"
        >
          Where Earth<br />
          <span className="text-sky-400">Meets Sky</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Mountain climbing is the ultimate test of human endurance, courage, and spirit.
          Discover the world's greatest peaks and begin your ascent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#peaks"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Explore the Peaks
          </a>
          <a
            href="#about"
            className="border border-slate-500 hover:border-sky-400 text-slate-200 hover:text-sky-400 font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
