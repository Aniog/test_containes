import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #0f0520 0%, #3b0764 50%, #1a0a35 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-600/40 text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          全新版本 2.0 已发布
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          创造无限
          <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            紫色魔法
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-violet-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          用最优雅的紫色设计语言，打造令人惊叹的数字体验。
          让每一个像素都散发出神秘而迷人的光芒。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#features"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-900/60 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            立即体验
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 border border-purple-500/60 text-purple-200 hover:bg-purple-900/40 font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
          >
            <Play className="w-4 h-4 fill-current" />
            观看演示
          </a>
        </div>

        {/* Hero image */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-purple-600/30 shadow-2xl shadow-purple-900/60">
          <img
            data-strk-img-id="hero-main-img-7a3f2c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Hero visual"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 to-transparent pointer-events-none" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
          {[
            { value: '10K+', label: '活跃用户' },
            { value: '99.9%', label: '正常运行时间' },
            { value: '4.9★', label: '用户评分' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-200">{stat.value}</div>
              <div className="text-sm text-violet-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
