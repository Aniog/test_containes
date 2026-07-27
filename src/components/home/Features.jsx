import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Shield, Palette, Globe, BarChart2, Layers } from 'lucide-react';

const features = [
  {
    id: 'feat-speed',
    icon: Zap,
    title: '极速性能',
    desc: '毫秒级响应速度，让用户体验流畅如丝，告别卡顿与等待。',
    imgId: 'feat-img-speed-9b1e4d',
    titleId: 'feat-speed-title',
    descId: 'feat-speed-desc',
  },
  {
    id: 'feat-security',
    icon: Shield,
    title: '安全可靠',
    desc: '企业级安全防护，多重加密保障您的数据安全无忧。',
    imgId: 'feat-img-security-2c7f8a',
    titleId: 'feat-security-title',
    descId: 'feat-security-desc',
  },
  {
    id: 'feat-design',
    icon: Palette,
    title: '精美设计',
    desc: '专业设计师打造的紫色视觉体系，每个细节都令人赏心悦目。',
    imgId: 'feat-img-design-5d3a1b',
    titleId: 'feat-design-title',
    descId: 'feat-design-desc',
  },
  {
    id: 'feat-global',
    icon: Globe,
    title: '全球覆盖',
    desc: '遍布全球的服务节点，无论身处何地都能享受极致体验。',
    imgId: 'feat-img-global-8e6c2f',
    titleId: 'feat-global-title',
    descId: 'feat-global-desc',
  },
  {
    id: 'feat-analytics',
    icon: BarChart2,
    title: '智能分析',
    desc: '深度数据洞察，帮助您做出更明智的业务决策。',
    imgId: 'feat-img-analytics-4a9d7e',
    titleId: 'feat-analytics-title',
    descId: 'feat-analytics-desc',
  },
  {
    id: 'feat-layers',
    icon: Layers,
    title: '模块化架构',
    desc: '灵活的模块化设计，按需组合，轻松扩展您的产品功能。',
    imgId: 'feat-img-layers-1f5b3c',
    titleId: 'feat-layers-title',
    descId: 'feat-layers-desc',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="features" className="py-24 px-6 bg-[#0f0520]" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">核心功能</span>
          <h2
            id="features-title"
            className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            为什么选择 Lumina
          </h2>
          <p
            id="features-subtitle"
            className="text-violet-300 text-lg max-w-xl mx-auto"
          >
            我们提供一整套强大的工具，帮助您构建出色的产品
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative bg-gradient-to-br from-purple-900/20 to-violet-900/10 border border-purple-600/25 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/40"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-purple-700/40 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-600/50 transition-colors">
                  <Icon className="w-6 h-6 text-purple-300" />
                </div>

                {/* Feature image */}
                <div className="rounded-xl overflow-hidden mb-5 aspect-video">
                  <img
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [features-subtitle] [features-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={feat.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 id={feat.titleId} className="text-lg font-semibold text-purple-100 mb-2">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-violet-300 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
