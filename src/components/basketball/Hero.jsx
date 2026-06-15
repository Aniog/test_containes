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
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-bk001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-court-black/70 via-court-black/50 to-court-black" />

      {/* Orange accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-hoop-orange/10 blur-[120px] z-10 rounded-full" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p
          id="hero-eyebrow"
          className="inline-block text-hoop-orange text-xs md:text-sm font-body font-semibold uppercase tracking-[0.3em] mb-6 border border-hoop-orange/40 px-4 py-1.5 rounded-full"
        >
          2025–2026 赛季
        </p>

        <h1
          id="hero-title"
          className="font-heading font-black text-white uppercase leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
        >
          热血
          <span className="text-hoop-orange"> 篮球</span>
          <br />
          燃烧赛场
        </h1>

        <p
          id="hero-subtitle"
          className="text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          感受每一次扣篮的震撼，每一次三分的激情。
          <br className="hidden md:block" />
          这里是篮球的世界，这里是冠军的舞台。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#schedule"
            className="bg-hoop-orange hover:bg-hoop-orange-dark text-white font-body font-bold text-base px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-200 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]"
          >
            查看赛程
          </a>
          <a
            href="#players"
            className="border border-white/30 hover:border-hoop-orange text-white hover:text-hoop-orange font-body font-semibold text-base px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-200"
          >
            认识球员
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs font-body uppercase tracking-widest">向下滚动</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
