import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
            2026 最新指南
          </span>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
          >
            办公桌购置指南
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8"
          >
            从尺寸、材质到人体工学，帮你全面了解如何挑选一张适合办公室的理想工作桌，提升工作效率与舒适度。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#tips"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-base"
            >
              查看选购要点
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-xl transition-colors text-base"
            >
              浏览推荐产品
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#why"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white flex flex-col items-center gap-1 transition-colors"
      >
        <span className="text-xs">向下滚动</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
