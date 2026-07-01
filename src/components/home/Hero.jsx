import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 pt-20"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200 rounded-full opacity-30 blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-100 rounded-full opacity-40 blur-2xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 rounded-full px-4 py-1.5 text-sm font-semibold w-fit">
            <Sparkles className="w-4 h-4" />
            <span id="hero-badge">全新体验，绽放美丽</span>
          </div>

          <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            让每一天<br />
            <span className="text-pink-500">充满色彩</span>
          </h1>

          <p id="hero-subtitle" className="text-lg text-gray-500 leading-relaxed max-w-md">
            我们致力于为您提供最优质的体验，用粉色的温柔与热情，陪伴您走过每一个美好时刻。
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-pink-200 transition-all duration-200 hover:scale-105"
            >
              探索更多
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full px-8 py-3.5 font-semibold transition-all duration-200"
            >
              了解我们
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-4 pt-6 border-t border-pink-100">
            {[
              { value: '10K+', label: '满意用户' },
              { value: '500+', label: '精选产品' },
              { value: '99%', label: '好评率' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-pink-500">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-300 rounded-3xl rotate-3 opacity-30" />
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Hero"
              className="relative w-full rounded-3xl shadow-2xl shadow-pink-200 object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg shadow-pink-100 px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🌸</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">今日新品</p>
                <p className="text-sm font-bold text-gray-800">春季限定系列</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
