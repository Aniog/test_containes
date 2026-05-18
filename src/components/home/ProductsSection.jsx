import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'prod-1',
    titleId: 'prod-title-1',
    subtitleId: 'prod-sub-1',
    imgId: 'prod-img-d4e5f6',
    title: '精铸铁锅系列',
    subtitle: '传统铸铁工艺，均匀导热，锁住食材原汁原味，让家常菜更鲜美',
    tag: '热销爆款',
    tagColor: 'bg-brand-orange',
  },
  {
    id: 'prod-2',
    titleId: 'prod-title-2',
    subtitleId: 'prod-sub-2',
    imgId: 'prod-img-g7h8i9',
    title: '不锈钢刀具套装',
    subtitle: '德国工艺钢材，锋利耐用，人体工学手柄，切菜如行云流水',
    tag: '品质之选',
    tagColor: 'bg-brand-brown',
  },
  {
    id: 'prod-3',
    titleId: 'prod-title-3',
    subtitleId: 'prod-sub-3',
    imgId: 'prod-img-j1k2l3',
    title: '陶瓷餐具套装',
    subtitle: '温润陶瓷，釉色自然，一套精美餐具让每顿饭都成为家庭仪式',
    tag: '家庭首选',
    tagColor: 'bg-amber-600',
  },
  {
    id: 'prod-4',
    titleId: 'prod-title-4',
    subtitleId: 'prod-sub-4',
    imgId: 'prod-img-m4n5o6',
    title: '多功能砧板',
    subtitle: '天然竹木材质，抗菌防霉，分类设计，守护家人饮食健康',
    tag: '健康安心',
    tagColor: 'bg-green-600',
  },
  {
    id: 'prod-5',
    titleId: 'prod-title-5',
    subtitleId: 'prod-sub-5',
    imgId: 'prod-img-p7q8r9',
    title: '不粘炒锅系列',
    subtitle: '进口不粘涂层，少油烹饪，轻松翻炒，清洗方便，厨房好帮手',
    tag: '轻松烹饪',
    tagColor: 'bg-red-500',
  },
  {
    id: 'prod-6',
    titleId: 'prod-title-6',
    subtitleId: 'prod-sub-6',
    imgId: 'prod-img-s1t2u3',
    title: '厨房收纳套装',
    subtitle: '整洁有序的厨房，是幸福生活的开始。精心设计，让收纳变得简单',
    tag: '整洁生活',
    tagColor: 'bg-teal-600',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            精选产品
          </span>
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">
            为家庭厨房精心打造
          </h2>
          <p id="products-subtitle" className="text-text-sub text-lg max-w-2xl mx-auto">
            每一件厨具都凝聚着我们对品质的坚守，让烹饪成为一种享受，让厨房成为家中最温暖的角落
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  alt={p.title}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.subtitleId}] [${p.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {p.tag}
                </span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 id={p.titleId} className="text-xl font-bold text-brand-brown mb-2">{p.title}</h3>
                <p id={p.subtitleId} className="text-text-sub text-sm leading-relaxed mb-4">{p.subtitle}</p>
                <button className="text-brand-orange font-semibold text-sm hover:underline flex items-center gap-1 group/btn">
                  了解详情
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
