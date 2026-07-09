import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-ski-main-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-deep-navy/60 via-deep-navy/40 to-deep-navy" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block bg-sky-blue/20 border border-sky-blue/40 text-sky-blue text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          2025–2026 雪季
        </span>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-snow-white leading-none mb-6"
        >
          征服雪山<br />
          <span className="text-sky-blue">极速滑行</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-glacier max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          探索全球顶级滑雪胜地，掌握专业技巧，感受白雪皑皑的山峰带来的极致速度与自由
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#destinations"
            className="bg-sky-blue text-snow-white font-bold px-10 py-4 rounded-full hover:bg-blue-500 transition text-lg shadow-lg shadow-sky-blue/30"
          >
            探索目的地
          </a>
          <a
            href="#skills"
            className="border-2 border-ice-white/60 text-ice-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition text-lg"
          >
            学习技巧
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '50+', label: '滑雪目的地' },
            { value: '200+', label: '专业技巧教程' },
            { value: '10K+', label: '滑雪爱好者' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-sky-blue">{stat.value}</div>
              <div className="text-sm text-glacier mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#destinations"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-glacier animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
