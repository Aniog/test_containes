import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { num: '500+', label: '服务客户', desc: '覆盖全国各行业头部品牌' },
  { num: '10年', label: '行业经验', desc: '深耕广告创意领域' },
  { num: '1200+', label: '完成项目', desc: '每个项目都是精品' },
  { num: '98%', label: '客户满意度', desc: '口碑见证实力' },
];

export default function StatsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="stats-bg-a1b2c3"
        data-strk-bg="[stats-title] advertising agency team success achievement"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#E8431A]/90" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="stats-title" className="text-3xl md:text-4xl font-bold text-white">
            数字见证实力
          </h2>
          <p className="text-white/80 mt-3">十年深耕，用成绩说话</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.num}</div>
              <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-white/70 text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
