import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Shield, Award, Cpu } from 'lucide-react';

const stats = [
  { value: '20+', label: '年行业经验' },
  { value: '500+', label: '成功项目案例' },
  { value: '30+', label: '省市覆盖区域' },
  { value: '99.8%', label: '设备可靠性' },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col" ref={containerRef}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-brand-navy"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Cpu className="w-4 h-4" />
            <span>国家高新技术企业 · 电力装备专业制造商</span>
          </div>

          {/* Main Title */}
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            智能电力装备
            <br />
            <span className="text-brand-orange">赋能能源未来</span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            温思达电力装备有限公司专注高压开关柜、智能变压器及配电系统研发制造，
            为电力、工矿、市政等行业提供安全可靠的全套电力解决方案。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-orange hover:bg-amber-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-base"
            >
              查看产品方案
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-base"
            >
              联系我们
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, text: 'ISO 9001 质量认证' },
              { icon: Award, text: '国家电网合格供应商' },
              { icon: Cpu, text: '智能电网解决方案' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon className="w-4 h-4 text-brand-orange" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 bg-brand-navy/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-brand-orange">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
