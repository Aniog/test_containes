import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feature-formation',
    imgId: 'feature-img-formation-d4e5f6',
    title: '台风的形成',
    titleId: 'feature-formation-title',
    desc: '了解台风如何在温暖的热带海洋上形成，探索其独特的螺旋结构与台风眼的奥秘。',
    descId: 'feature-formation-desc',
    link: '/knowledge',
    linkLabel: '了解更多',
    icon: '🌀',
  },
  {
    id: 'feature-scale',
    imgId: 'feature-img-scale-g7h8i9',
    title: '台风等级划分',
    titleId: 'feature-scale-title',
    desc: '从热带低压到超强台风，掌握台风强度分级标准，理解不同等级台风的破坏力。',
    descId: 'feature-scale-desc',
    link: '/knowledge#scale',
    linkLabel: '查看分级',
    icon: '📊',
  },
  {
    id: 'feature-history',
    imgId: 'feature-img-history-j1k2l3',
    title: '历史台风记录',
    titleId: 'feature-history-title',
    desc: '回顾影响中国的重大历史台风事件，了解这些自然灾害留下的深刻印记。',
    descId: 'feature-history-desc',
    link: '/history',
    linkLabel: '查看历史',
    icon: '📜',
  },
];

export default function HomeFeatures() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 id="features-section-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            探索台风的世界
          </h2>
          <p id="features-section-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            从科学原理到防灾实践，全面了解台风这一自然现象
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#0d1b2a] border border-[#00b4d8]/20 rounded-2xl overflow-hidden hover:border-[#00b4d8]/60 hover:shadow-lg hover:shadow-[#00b4d8]/10 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={feature.title}
                  data-strk-img-id={feature.imgId}
                  data-strk-img={`[${feature.descId}] [${feature.titleId}] [features-section-subtitle] [features-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
                <div className="absolute top-4 left-4 text-3xl">{feature.icon}</div>
              </div>
              <div className="p-6">
                <h3 id={feature.titleId} className="text-white font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p id={feature.descId} className="text-slate-400 text-sm leading-relaxed mb-4">
                  {feature.desc}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 text-[#48cae4] text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  {feature.linkLabel}
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
