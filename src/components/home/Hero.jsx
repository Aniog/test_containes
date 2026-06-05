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
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-600/80 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-500/30 border border-blue-400/40 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            全新一代蓝色体验
          </span>

          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            让您的业务
            <span className="text-blue-300"> 腾飞起航</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl"
          >
            我们提供专业的数字化解决方案，帮助企业在竞争激烈的市场中脱颖而出，实现可持续增长与创新突破。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-full transition text-base"
            >
              立即开始
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full transition text-base"
            >
              <Play className="w-4 h-4 fill-white" />
              了解更多
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: '10,000+', label: '活跃用户' },
              { value: '98%', label: '客户满意度' },
              { value: '50+', label: '合作伙伴' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
