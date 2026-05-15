import { useEffect, useRef } from 'react';
import { ChevronDown, Shield, Award, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '20+', label: '年行业经验' },
  { value: '500+', label: '成功项目案例' },
  { value: '30+', label: '省市覆盖区域' },
  { value: '99.8%', label: '设备可靠性' },
];

const badges = [
  { icon: Shield, text: 'ISO 9001 认证' },
  { icon: Award, text: '国家高新技术企业' },
  { icon: Globe, text: '出口多个国家' },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const handleScroll = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/50" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(33,150,243,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(33,150,243,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#2196F3]/15 border border-[#2196F3]/30 text-[#2196F3] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest">
            <span className="w-2 h-2 bg-[#2196F3] rounded-full animate-pulse" />
            电力装备领域专业制造商
          </div>

          {/* Title */}
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            赋能电力基础设施
            <br />
            <span className="text-[#2196F3]">智造可靠未来</span>
          </h1>

          {/* Subtitle */}
          <p id="hero-subtitle" className="text-[#8BA3C1] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            温思达电力装备有限公司专注于高压开关设备、变压器及智能配电系统的研发与制造，
            为电力、工矿、市政等领域提供全生命周期解决方案。
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/5 border border-[#1E3A5F] text-[#E8EDF5] text-sm px-4 py-2 rounded-lg">
                <Icon className="w-4 h-4 text-[#2196F3]" />
                {text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#2196F3] hover:bg-[#1565C0] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
            >
              探索产品方案
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#2196F3]/50 text-[#2196F3] hover:bg-[#2196F3] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300"
            >
              联系我们
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-[#8BA3C1] text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#8BA3C1] hover:text-white transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
