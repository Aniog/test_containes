import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: '创意驱动', desc: '以独特创意为核心，打造令人印象深刻的品牌故事与视觉体验。' },
  { icon: Users, title: '以客为本', desc: '深度理解客户需求，量身定制专属广告策略，实现精准传播。' },
  { icon: TrendingUp, title: '效果导向', desc: '数据驱动决策，持续优化投放效果，最大化广告投资回报率。' },
  { icon: Award, title: '品质保证', desc: '严格把控每一个创作细节，确保输出作品达到行业最高标准。' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#E8431A] font-semibold text-sm uppercase tracking-widest">关于我们</span>
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-2">
            十年匠心，铸就品牌传奇
          </h2>
          <p id="about-subtitle" className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            秋易广告成立于2014年，是一家集品牌策划、创意设计、数字营销于一体的综合性广告公司。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="广告创意团队"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-1a2b3c"
                data-strk-img="[about-subtitle] [about-title] creative advertising team office"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mt-8">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="品牌设计工作"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-4d5e6f"
                data-strk-img="brand design branding creative work [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="广告策划会议"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-7g8h9i"
                data-strk-img="advertising planning meeting strategy [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mt-8">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="数字营销分析"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-j1k2l3"
                data-strk-img="digital marketing analytics data [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              我们拥有一支由资深创意总监、品牌策略师、视觉设计师和数字营销专家组成的精英团队，
              累计服务超过500家企业客户，涵盖快消品、科技、地产、餐饮等多个行业领域。
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-base">
              秋易广告始终坚持"创意无界，广告有道"的核心理念，将艺术创意与商业逻辑完美融合，
              为客户提供从品牌定位到落地执行的全链路广告服务。
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#E8431A]/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#E8431A]" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A2E] text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
