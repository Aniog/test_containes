import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const industries = [
  {
    id: 'power',
    title: '电力行业',
    subtitle: 'Power Utilities',
    desc: '为发电厂、变电站及输配电网络提供高压开关设备、变压器及综合自动化系统，保障电网安全稳定运行。',
    imgId: 'ind-power-s1t2u3',
    imgQuery: '[ind-title-power] [ind-subtitle-power]',
  },
  {
    id: 'metro',
    title: '轨道交通',
    subtitle: 'Rail Transit',
    desc: '为地铁、城轨、高铁牵引供电系统提供专用变压器、整流柜及智能配电解决方案，满足高可靠性要求。',
    imgId: 'ind-metro-v4w5x6',
    imgQuery: '[ind-title-metro] [ind-subtitle-metro]',
  },
  {
    id: 'industry',
    title: '工矿冶金',
    subtitle: 'Mining & Metallurgy',
    desc: '针对矿山、钢铁、有色金属等高耗能行业，提供耐高温、防爆型电力装备及节能改造整体方案。',
    imgId: 'ind-mining-y7z8a9',
    imgQuery: '[ind-title-industry] [ind-subtitle-industry]',
  },
  {
    id: 'datacenter',
    title: '数据中心',
    subtitle: 'Data Center',
    desc: '为超大规模数据中心提供模块化配电系统、UPS配套变压器及智能监控平台，确保零中断供电。',
    imgId: 'ind-dc-b1c2d3',
    imgQuery: '[ind-title-datacenter] [ind-subtitle-datacenter]',
  },
  {
    id: 'municipal',
    title: '市政建设',
    subtitle: 'Municipal Infrastructure',
    desc: '服务城市配电网改造、综合管廊、智慧城市等项目，提供紧凑型环网柜及地下配电解决方案。',
    imgId: 'ind-muni-e4f5g6',
    imgQuery: '[ind-title-municipal] [ind-subtitle-municipal]',
  },
  {
    id: 'renewable',
    title: '新能源',
    subtitle: 'Renewable Energy',
    desc: '为风电场、光伏电站及储能系统提供升压变压器、箱式变电站及并网配套装备，助力双碳目标实现。',
    imgId: 'ind-renew-h7i8j9',
    imgQuery: '[ind-title-renewable] [ind-subtitle-renewable]',
  },
];

export default function IndustriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="industries" className="py-20 bg-[#0F1923]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block text-[#2196F3] text-xs font-semibold tracking-widest uppercase mb-3">
            INDUSTRY APPLICATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">行业应用领域</h2>
          <div className="w-16 h-1 bg-[#2196F3] rounded-full mx-auto mb-6" />
          <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto">
            深耕多个关键行业，提供针对性的电力装备解决方案
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group relative rounded-xl overflow-hidden bg-[#162032] border border-[#1E3A5F] hover:border-[#2196F3]/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={ind.imgId}
                  data-strk-img={ind.imgQuery}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162032] via-[#162032]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3
                    id={`ind-title-${ind.id}`}
                    className="text-white font-bold text-lg leading-tight"
                  >
                    {ind.title}
                  </h3>
                  <p
                    id={`ind-subtitle-${ind.id}`}
                    className="text-[#2196F3] text-xs font-medium tracking-wider mt-0.5"
                  >
                    {ind.subtitle}
                  </p>
                </div>
                <p className="text-[#8BA3C1] text-sm leading-relaxed">{ind.desc}</p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2196F3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
