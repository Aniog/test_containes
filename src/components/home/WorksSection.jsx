import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const works = [
  {
    id: 'work-1',
    title: '极光品牌重塑',
    category: '品牌设计',
    year: '2024',
    imgId: 'work-img-aurora-9a3b2c',
    titleId: 'work-aurora-title',
    descId: 'work-aurora-desc',
    desc: '为科技公司打造全新视觉识别系统',
  },
  {
    id: 'work-2',
    title: '黑曜石电商平台',
    category: '网站开发',
    year: '2024',
    imgId: 'work-img-obsidian-7d4e1f',
    titleId: 'work-obsidian-title',
    descId: 'work-obsidian-desc',
    desc: '高端奢侈品电商平台全栈开发',
  },
  {
    id: 'work-3',
    title: '星际动效系统',
    category: '动效设计',
    year: '2023',
    imgId: 'work-img-stellar-2c8f5a',
    titleId: 'work-stellar-title',
    descId: 'work-stellar-desc',
    desc: '沉浸式交互动画体验设计',
  },
  {
    id: 'work-4',
    title: '暗夜数据看板',
    category: '数据可视化',
    year: '2023',
    imgId: 'work-img-darkboard-6e1b3d',
    titleId: 'work-darkboard-title',
    descId: 'work-darkboard-desc',
    desc: '企业级实时数据分析仪表盘',
  },
];

export default function WorksSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="works" ref={containerRef} className="bg-black py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                精选作品
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              我们的
              <span className="text-[#c8a96e]"> 代表作品</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-xs leading-relaxed">
            每一个项目都是我们对卓越品质的承诺与追求。
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative bg-[#0d0d0d] border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <img
                  alt={work.title}
                  data-strk-img-id={work.imgId}
                  data-strk-img={`[${work.descId}] [${work.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={15} className="text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#c8a96e]">
                    {work.category}
                  </span>
                  <span className="text-xs text-neutral-600">{work.year}</span>
                </div>
                <h3 id={work.titleId} className="text-xl font-semibold text-white mb-1">
                  {work.title}
                </h3>
                <p id={work.descId} className="text-sm text-neutral-500">
                  {work.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
