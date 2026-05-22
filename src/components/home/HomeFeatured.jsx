import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-1',
    titleId: 'feat-title-1',
    subtitleId: 'feat-sub-1',
    title: '硅藻',
    subtitle: '水中的玻璃艺术家',
    description: '硅藻是单细胞藻类，拥有由二氧化硅构成的精美外壳，形态千变万化，是自然界最美丽的微观结构之一。',
    tag: '藻类',
    imgId: 'feat-img-mc002',
  },
  {
    id: 'org-2',
    titleId: 'feat-title-2',
    subtitleId: 'feat-sub-2',
    title: '水熊虫',
    subtitle: '地球上最顽强的生命',
    description: '水熊虫（缓步动物）能在极端环境下存活，包括真空、辐射和极端温度，被称为地球上最坚韧的生物。',
    tag: '缓步动物',
    imgId: 'feat-img-mc003',
  },
  {
    id: 'org-3',
    titleId: 'feat-title-3',
    subtitleId: 'feat-sub-3',
    title: '草履虫',
    subtitle: '单细胞的复杂生命',
    description: '草履虫是一种纤毛虫原生动物，尽管只有一个细胞，却能进行复杂的行为，包括觅食、逃避危险和繁殖。',
    tag: '原生动物',
    imgId: 'feat-img-mc004',
  },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium text-[#00d4c8] uppercase tracking-widest">精选生物</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            认识微观世界的居民
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            从优雅的硅藻到顽强的水熊虫，微观世界充满了令人惊叹的生命形式。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-[#0a1628] border border-[#1a3050] rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 hover:shadow-lg hover:shadow-[#00d4c8]/10 transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={org.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.subtitleId}] [${org.titleId}] microscopic organism`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#00d4c8]/10 text-[#00d4c8] text-xs font-medium px-3 py-1 rounded-full border border-[#00d4c8]/20">
                  {org.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 id={org.titleId} className="text-xl font-bold text-white mb-1">{org.title}</h3>
                <p id={org.subtitleId} className="text-[#00d4c8] text-sm font-medium mb-3">{org.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
