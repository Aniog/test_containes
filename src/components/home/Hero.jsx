import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-600/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              全新版本 2.0 已上线
            </span>

            <h1
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              构建更好的
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                数字未来
              </span>
            </h1>

            <p
              id="hero-subtitle"
              className="text-blue-200 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              BluePeak 为您提供强大的云端解决方案，帮助企业加速数字化转型，释放无限潜能。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition"
              >
                立即体验
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-full transition"
              >
                <Play className="w-4 h-4 fill-white" />
                观看演示
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-6 flex-wrap">
              <p className="text-blue-400 text-sm">已获信任：</p>
              {['Google', 'Microsoft', 'Alibaba', 'Tencent'].map((brand) => (
                <span key={brand} className="text-blue-300/70 font-semibold text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="hidden md:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-700/30">
              <img
                alt="BluePeak 平台界面"
                data-strk-img-id="hero-dashboard-d4e5f6"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
              {/* Floating card */}
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white">
                <p className="text-xs text-blue-200">今日新增用户</p>
                <p className="text-2xl font-bold">+2,847</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#eff6ff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
