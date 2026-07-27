import { useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Sprout, TreePine } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10K+', label: '活跃用户' },
  { value: '98%', label: '满意度' },
  { value: '50+', label: '合作伙伴' },
  { value: '5年', label: '行业经验' },
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a5c38 0%, #2d9e5f 50%, #1a7a4a 100%)' }} />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage-light/10 rounded-full blur-3xl" />

      {/* Floating icons */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
          <Leaf className="w-7 h-7 text-sage-light" />
        </div>
      </div>
      <div className="absolute bottom-40 right-40 hidden lg:block">
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Sprout className="w-6 h-6 text-mint" />
        </div>
      </div>
      <div className="absolute top-60 left-20 hidden lg:block">
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
          <TreePine className="w-5 h-5 text-mint" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text */}
        <div>
          <span className="inline-flex items-center gap-2 bg-white/15 text-mint text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/20">
            <Leaf className="w-3.5 h-3.5" />
            绿色生活，从这里开始
          </span>

          <h1 id="hero-title" className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            拥抱自然，
            <br />
            <span className="text-sage-light">绿色未来</span>
            <br />
            从今天起
          </h1>

          <p id="hero-desc" className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
            我们致力于推广可持续生活方式，帮助每一个人在日常生活中做出更环保的选择，共同守护我们美丽的地球家园。
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll('#features')}
              className="flex items-center gap-2 bg-white text-forest px-7 py-3.5 rounded-full font-semibold hover:bg-mint transition-colors text-sm"
            >
              探索功能
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="flex items-center gap-2 border-2 border-white/50 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              联系我们
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/20">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-desc] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="绿色自然风景"
              className="w-full h-80 object-cover"
            />
            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-dark">碳排放减少</div>
                <div className="text-xs text-gray-500">今年已减少 2.4 吨 CO₂</div>
              </div>
              <div className="ml-auto text-emerald font-bold text-lg">↓ 32%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z" fill="#f0fdf4" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
