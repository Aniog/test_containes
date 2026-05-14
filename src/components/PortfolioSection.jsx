import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['全部', '品牌策划', '创意设计', '数字营销', '影视制作'];

const portfolioItems = [
  {
    id: 'port-1',
    titleId: 'port-title-1',
    title: '星辰科技品牌重塑',
    category: '品牌策划',
    client: '星辰科技',
    imgId: 'port-img-v1w2x3',
    imgQuery: '[port-title-1] [portfolio-title]',
    featured: true,
  },
  {
    id: 'port-2',
    titleId: 'port-title-2',
    title: '悦享生活产品包装设计',
    category: '创意设计',
    client: '悦享生活',
    imgId: 'port-img-y4z5a6',
    imgQuery: '[port-title-2] [portfolio-title]',
    featured: false,
  },
  {
    id: 'port-3',
    titleId: 'port-title-3',
    title: '云端金融数字营销',
    category: '数字营销',
    client: '云端金融',
    imgId: 'port-img-b7c8d9',
    imgQuery: '[port-title-3] [portfolio-title]',
    featured: false,
  },
  {
    id: 'port-4',
    titleId: 'port-title-4',
    title: '绿野有机品牌广告片',
    category: '影视制作',
    client: '绿野有机',
    imgId: 'port-img-e1f2g3',
    imgQuery: '[port-title-4] [portfolio-title]',
    featured: false,
  },
  {
    id: 'port-5',
    titleId: 'port-title-5',
    title: '远航汽车整合营销',
    category: '品牌策划',
    client: '远航汽车',
    imgId: 'port-img-h4i5j6',
    imgQuery: '[port-title-5] [portfolio-title]',
    featured: false,
  },
  {
    id: 'port-6',
    titleId: 'port-title-6',
    title: '美颜护肤社交媒体运营',
    category: '数字营销',
    client: '美颜护肤',
    imgId: 'port-img-k7l8m9',
    imgQuery: '[port-title-6] [portfolio-title]',
    featured: false,
  },
];

export default function PortfolioSection() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = activeCategory === '全部'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" ref={containerRef} className="py-24 md:py-32 bg-[#0D1220]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">精选案例</span>
          <h2 id="portfolio-title" className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            我们的<span className="gold-gradient-text">作品集</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            每一个作品都是我们与客户共同创造的成果，见证品牌成长的每一步。
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold to-amber text-white border-transparent shadow-lg shadow-gold/20'
                  : 'border-white/20 text-gray-400 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={item.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-gold/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-500 text-xs mb-1">{item.client}</p>
                <h3 id={item.titleId} className="text-white font-semibold text-base leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gold/40 text-gold font-semibold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-all duration-200"
          >
            查看更多案例
          </a>
        </div>
      </div>
    </section>
  );
}
