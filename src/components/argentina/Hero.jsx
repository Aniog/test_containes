import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-arg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-navy/70" />

      {/* Diagonal blue stripe */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background: 'repeating-linear-gradient(135deg, #74ACDF 0px, #74ACDF 60px, transparent 60px, transparent 180px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-gold text-sm font-medium uppercase tracking-widest mb-4"
        >
          Selección Nacional de Fútbol
        </p>
        <h1
          id="hero-title"
          className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4"
        >
          阿根廷国家
          <br />
          <span className="text-argentina-blue">足球队</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          三届世界杯冠军，南美洲最辉煌的足球传奇。
          从马拉多纳到梅西，阿根廷蓝白军团书写着永恒的足球史诗。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#players"
            className="bg-gold text-navy font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors text-sm uppercase tracking-widest"
          >
            查看球员阵容
          </a>
          <a
            href="#achievements"
            className="border-2 border-argentina-blue text-argentina-blue font-bold px-8 py-3 rounded-full hover:bg-argentina-blue hover:text-navy transition-colors text-sm uppercase tracking-widest"
          >
            荣誉成就
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
