import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['全部', '品牌设计', '数字营销', '影视广告', '户外广告'];

const projects = [
  {
    id: 1,
    title: '星辰科技品牌重塑',
    category: '品牌设计',
    client: '星辰科技',
    result: '品牌认知度提升 240%',
    imgId: 'port-img-a1b2c3',
    imgQuery: '[port-title-1] technology brand redesign modern corporate identity',
    size: 'large',
  },
  {
    id: 2,
    title: '悦享生活双十一营销',
    category: '数字营销',
    client: '悦享生活',
    result: '销售额增长 380%',
    imgId: 'port-img-d4e5f6',
    imgQuery: '[port-title-2] e-commerce shopping festival digital marketing campaign',
    size: 'small',
  },
  {
    id: 3,
    title: '清风茶业品牌TVC',
    category: '影视广告',
    client: '清风茶业',
    result: '播放量突破 1000万',
    imgId: 'port-img-g7h8i9',
    imgQuery: '[port-title-3] tea brand commercial video production elegant',
    size: 'small',
  },
  {
    id: 4,
    title: '城市地标户外广告',
    category: '户外广告',
    client: '万象城',
    result: '日均曝光 50万次',
    imgId: 'port-img-j1k2l3',
    imgQuery: '[port-title-4] outdoor billboard advertising city landmark',
    size: 'small',
  },
  {
    id: 5,
    title: '美妆品牌社媒爆款',
    category: '数字营销',
    client: '花颜美妆',
    result: '粉丝增长 15万',
    imgId: 'port-img-m4n5o6',
    imgQuery: '[port-title-5] beauty cosmetics social media influencer marketing',
    size: 'small',
  },
  {
    id: 6,
    title: '新能源汽车发布会',
    category: '品牌设计',
    client: '极光汽车',
    result: '媒体曝光 2亿次',
    imgId: 'port-img-p7q8r9',
    imgQuery: '[port-title-6] electric vehicle car launch event brand design',
    size: 'large',
  },
  {
    id: 7,
    title: '餐饮连锁品牌升级',
    category: '品牌设计',
    client: '味道江湖',
    result: '门店数量增长 60%',
    imgId: 'port-img-s1t2u3',
    imgQuery: '[port-title-7] restaurant chain food brand identity upgrade',
    size: 'small',
  },
  {
    id: 8,
    title: '地产项目整合推广',
    category: '数字营销',
    client: '绿城地产',
    result: '到访量提升 200%',
    imgId: 'port-img-v4w5x6',
    imgQuery: '[port-title-8] real estate property marketing integrated campaign',
    size: 'small',
  },
];

export default function PortfolioSection() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filtered = activeCategory === '全部'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" ref={containerRef} className="py-20 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest">成功案例</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">精选作品展示</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            每一个案例背后，都是我们与客户共同创造的品牌传奇
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#E8431A] text-white shadow-lg shadow-[#E8431A]/30'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((project, idx) => {
            const titleId = `port-title-${project.id}`;
            const isLarge = project.size === 'large';
            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  isLarge ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${isLarge ? 'h-80' : 'h-48'}`}>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-strk-img-id={project.imgId}
                    data-strk-img={project.imgQuery}
                    data-strk-img-ratio={isLarge ? '16x9' : '4x3'}
                    data-strk-img-width={isLarge ? '800' : '400'}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[#F5A623] text-xs font-medium">{project.category}</span>
                    <h3 id={titleId} className="text-white font-bold text-sm mt-0.5">{project.title}</h3>
                    <p className="text-white/70 text-xs mt-1">{project.result}</p>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#E8431A]/90 text-white text-xs font-medium">
                    {project.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-[#E8431A] text-[#E8431A] font-semibold hover:bg-[#E8431A] hover:text-white transition-all duration-200"
          >
            查看更多案例
          </a>
        </div>
      </div>
    </section>
  );
}
