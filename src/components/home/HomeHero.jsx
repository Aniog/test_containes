import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-typhoon-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0f1e]/70 via-[#0a0f1e]/50 to-[#0a0f1e]" />

      {/* Animated spiral overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-10 animate-spin" style={{ animationDuration: '60s' }}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="100" r="90" stroke="#00b4d8" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" stroke="#48cae4" strokeWidth="0.5" strokeDasharray="3 6" />
            <circle cx="100" cy="100" r="50" stroke="#00b4d8" strokeWidth="0.5" strokeDasharray="2 8" />
            <circle cx="100" cy="100" r="30" stroke="#48cae4" strokeWidth="1" />
            <circle cx="100" cy="100" r="10" stroke="#48cae4" strokeWidth="1.5" />
            <path d="M100 10 C130 10 160 40 150 70 C140 100 110 100 100 80 C90 60 110 40 130 50" stroke="#48cae4" strokeWidth="1" fill="none"/>
            <path d="M190 100 C190 130 160 160 130 150 C100 140 100 110 120 100 C140 90 160 110 150 130" stroke="#00b4d8" strokeWidth="1" fill="none"/>
            <path d="M100 190 C70 190 40 160 50 130 C60 100 90 100 100 120 C110 140 90 160 70 150" stroke="#48cae4" strokeWidth="1" fill="none"/>
            <path d="M10 100 C10 70 40 40 70 50 C100 60 100 90 80 100 C60 110 40 90 50 70" stroke="#00b4d8" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 border border-[#00b4d8]/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-pulse" />
          <span className="text-[#48cae4] text-sm font-medium">台风科普与防灾知识平台</span>
        </div>

        <h1 id="hero-title" className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          了解台风
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48cae4] to-[#00b4d8]">
            守护家园
          </span>
        </h1>

        <p id="hero-subtitle" className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          深入了解台风的形成机制、历史记录与防灾知识，
          在自然力量面前做好充分准备。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/knowledge"
            className="bg-[#00b4d8] hover:bg-[#0096c7] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:-translate-y-0.5"
          >
            探索台风知识
          </Link>
          <Link
            to="/safety"
            className="border border-[#00b4d8] text-[#48cae4] hover:bg-[#00b4d8]/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            防灾指南
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs">向下滚动</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
