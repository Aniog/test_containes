import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const highlights = [
  '12年专注广告行业深耕',
  '50+专业创意与策略人才',
  '覆盖全国20+城市市场',
  '荣获国内外多项广告大奖',
  '服务500+知名品牌客户',
  '全程数据驱动，效果可量化',
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                id="about-img"
                alt="秋易广告公司团队"
                data-strk-img-id="about-img-7s8t9u"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-gradient-to-br from-gold to-amber rounded-2xl p-5 shadow-2xl shadow-gold/30">
              <div className="text-white text-center">
                <div className="text-4xl font-bold">12</div>
                <div className="text-sm font-medium opacity-90">年行业经验</div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-gold/20 -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">关于我们</span>
            <h2 id="about-title" className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              创意驱动，<br />
              <span className="gold-gradient-text">成就品牌价值</span>
            </h2>
            <p id="about-subtitle" className="text-gray-400 text-lg leading-relaxed mb-6">
              秋易广告公司成立于2012年，是一家集品牌策划、创意设计、整合营销于一体的专业广告公司。
              我们相信，优秀的广告不仅仅是传递信息，更是连接品牌与消费者情感的桥梁。
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              凭借深厚的行业积累和对市场趋势的敏锐洞察，我们为客户提供从战略规划到创意执行的全链路服务，
              帮助品牌在竞争激烈的市场中建立独特的竞争优势。
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-amber text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
            >
              与我们合作
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
