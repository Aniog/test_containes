import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      {/* Gold glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            专业广告策划与创意设计
          </div>

          {/* Heading */}
          <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            让品牌<span className="gold-gradient-text">发声</span>，<br />
            让创意<span className="gold-gradient-text">落地</span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
            秋易广告公司专注于品牌策划、创意设计与整合营销，
            为企业打造有温度、有力量的广告解决方案。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-amber text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-gold/20"
            >
              开始合作
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-gold/60 hover:text-gold transition-all duration-200"
            >
              <Play size={16} className="fill-current" />
              查看作品集
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: '500+', label: '服务客户' },
              { value: '12年', label: '行业经验' },
              { value: '98%', label: '客户满意度' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-3xl font-bold gold-gradient-text">{item.value}</span>
                <span className="text-gray-400 text-sm mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
