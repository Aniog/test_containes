import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Ruler, Layers, Zap, Package, Palette, DollarSign } from 'lucide-react';

const tips = [
  {
    id: 'tip-size',
    icon: Ruler,
    title: '尺寸与空间规划',
    desc: '根据办公室面积选择合适的桌面尺寸。标准单人桌宽度建议 120–160cm，深度 60–80cm，确保有足够的操作空间。',
    tag: '基础要素',
    imgId: 'tip-img-size-g7h8i9',
    titleId: 'tip-size-title',
    descId: 'tip-size-desc',
  },
  {
    id: 'tip-height',
    icon: Zap,
    title: '高度与人体工学',
    desc: '桌面高度应与肘部齐平（坐姿时约 70–75cm）。升降桌可在坐站之间切换，有效缓解久坐疲劳。',
    tag: '健康关键',
    imgId: 'tip-img-height-j1k2l3',
    titleId: 'tip-height-title',
    descId: 'tip-height-desc',
  },
  {
    id: 'tip-material',
    icon: Layers,
    title: '材质与耐用性',
    desc: '实木桌质感好但价格较高；钢木结合兼顾美观与耐用；密度板桌面经济实惠，适合预算有限的采购。',
    tag: '材质选择',
    imgId: 'tip-img-material-m4n5o6',
    titleId: 'tip-material-title',
    descId: 'tip-material-desc',
  },
  {
    id: 'tip-storage',
    icon: Package,
    title: '收纳与走线设计',
    desc: '带抽屉或侧柜的桌子能保持桌面整洁。内置走线槽或穿线孔可有效管理电源线，避免杂乱。',
    tag: '实用功能',
    imgId: 'tip-img-storage-p7q8r9',
    titleId: 'tip-storage-title',
    descId: 'tip-storage-desc',
  },
  {
    id: 'tip-style',
    icon: Palette,
    title: '风格与整体搭配',
    desc: '办公桌应与整体办公室风格协调。现代简约、北欧风、工业风各有特色，选择与公司文化相符的款式。',
    tag: '美观设计',
    imgId: 'tip-img-style-s1t2u3',
    titleId: 'tip-style-title',
    descId: 'tip-style-desc',
  },
  {
    id: 'tip-budget',
    icon: DollarSign,
    title: '预算与性价比',
    desc: '单人桌预算建议 800–3000 元，批量采购可争取折扣。优先保证质量，避免因低价购入频繁更换。',
    tag: '采购建议',
    imgId: 'tip-img-budget-v4w5x6',
    titleId: 'tip-budget-title',
    descId: 'tip-budget-desc',
  },
];

export default function TipsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="tips" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            选购指南
          </span>
          <h2
            id="tips-title"
            className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4"
          >
            六大选购要点
          </h2>
          <p
            id="tips-subtitle"
            className="text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            掌握这六个核心维度，让你的办公桌采购决策更加科学、精准，避免踩坑。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    data-strk-img-id={tip.imgId}
                    data-strk-img={`[${tip.descId}] [${tip.titleId}] [tips-subtitle] [tips-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={tip.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {tip.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <h3 id={tip.titleId} className="text-base font-semibold text-slate-900">
                      {tip.title}
                    </h3>
                  </div>
                  <p id={tip.descId} className="text-sm text-slate-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
