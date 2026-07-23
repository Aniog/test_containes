import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, ShieldCheck, Users, Activity } from 'lucide-react';

const stats = [
  { icon: Users, value: '15亿+', label: '全球听力损失人数' },
  { icon: Activity, value: '50%', label: '可通过预防避免' },
  { icon: ShieldCheck, value: '早发现', label: '早干预效果更佳' },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollDown = () => {
    const el = document.querySelector('#knowledge');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50"
    >
      {/* Background decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              世界听力日专题
            </span>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              守护您的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                听力健康
              </span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              听力是我们感知世界的重要方式。了解听力损失的成因、预防方法和早期干预，让每一个声音都清晰可闻。
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector('#selftest');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                立即自测听力
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#knowledge');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                了解更多
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-600" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-slate-900">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-3xl blur-xl" />
              <img
                data-strk-img-id="hero-main-img-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="听力健康"
                className="relative w-full rounded-3xl shadow-2xl object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">专业认证</div>
                  <div className="text-sm font-semibold text-slate-800">医学级健康指南</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-600 transition-colors animate-bounce"
      >
        <span className="text-xs">向下滚动</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
