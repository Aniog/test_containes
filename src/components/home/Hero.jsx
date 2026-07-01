import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#1D3557] overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#457B9D] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E63946] opacity-10 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <span className="inline-block bg-[#E63946] text-[#F1FAEE] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            全新体验
          </span>
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-bold text-[#F1FAEE] leading-tight mb-6"
          >
            创造无限
            <span className="text-[#FF6B6B] block">可能性</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-[#A8DADC] text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            我们提供专业的数字解决方案，帮助您的业务在竞争激烈的市场中脱颖而出，实现快速增长。
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#E63946] hover:bg-[#C1121F] text-[#F1FAEE] font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 shadow-lg">
              开始探索
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 border-2 border-[#A8DADC] text-[#A8DADC] hover:bg-[#A8DADC] hover:text-[#1D3557] font-semibold px-8 py-3.5 rounded-full transition-colors duration-200">
              <Play className="w-4 h-4" />
              观看演示
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            {[
              { value: '500+', label: '成功案例' },
              { value: '98%', label: '客户满意度' },
              { value: '10年', label: '行业经验' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#F1FAEE]">{stat.value}</div>
                <div className="text-[#A8DADC] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative hidden md:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Hero visual"
              className="w-full h-80 object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-[#E63946] text-[#F1FAEE] rounded-2xl px-5 py-3 shadow-xl">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-xs text-red-200">满意客户</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
