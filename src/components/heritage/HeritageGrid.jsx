import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['全部', '表演艺术', '传统技艺', '民间美术', '传统医药'];

const heritageItems = [
  {
    id: 'shadow-puppet',
    titleId: 'item-shadow-puppet-title',
    descId: 'item-shadow-puppet-desc',
    imgId: 'heritage-img-shadow-puppet-a1b2c3',
    title: '皮影戏',
    category: '表演艺术',
    origin: '陕西 · 甘肃',
    desc: '皮影戏是中国民间古老的传统艺术，以兽皮或纸板做成人物剪影，在灯光照射下表演故事，配以音乐唱腔，生动传神。',
    year: '汉代起源',
    tag: '国家级',
  },
  {
    id: 'peking-opera',
    titleId: 'item-peking-opera-title',
    descId: 'item-peking-opera-desc',
    imgId: 'heritage-img-peking-opera-d4e5f6',
    title: '京剧',
    category: '表演艺术',
    origin: '北京',
    desc: '京剧是中国影响最大的戏曲剧种，融合唱、念、做、打四种艺术手段，以其独特的脸谱艺术和程式化表演享誉世界。',
    year: '清代形成',
    tag: '世界级',
  },
  {
    id: 'paper-cutting',
    titleId: 'item-paper-cutting-title',
    descId: 'item-paper-cutting-desc',
    imgId: 'heritage-img-paper-cutting-g7h8i9',
    title: '剪纸',
    category: '民间美术',
    origin: '全国各地',
    desc: '中国剪纸是一种用剪刀或刻刀在纸上剪刻花纹的民间艺术，寓意吉祥，广泛用于节日装饰，是中华民族的文化符号之一。',
    year: '汉代起源',
    tag: '世界级',
  },
  {
    id: 'porcelain',
    titleId: 'item-porcelain-title',
    descId: 'item-porcelain-desc',
    imgId: 'heritage-img-porcelain-j1k2l3',
    title: '景德镇陶瓷',
    category: '传统技艺',
    origin: '江西景德镇',
    desc: '景德镇陶瓷制作技艺历史悠久，以其精湛的工艺和独特的艺术风格闻名于世，"瓷都"之名享誉全球。',
    year: '宋代鼎盛',
    tag: '国家级',
  },
  {
    id: 'embroidery',
    titleId: 'item-embroidery-title',
    descId: 'item-embroidery-desc',
    imgId: 'heritage-img-embroidery-m4n5o6',
    title: '苏绣',
    category: '传统技艺',
    origin: '江苏苏州',
    desc: '苏绣是苏州地区刺绣产品的总称，以精细雅洁著称，图案秀丽，色彩和谐，线条明快，针法活泼，绣工精细。',
    year: '春秋时期',
    tag: '国家级',
  },
  {
    id: 'acupuncture',
    titleId: 'item-acupuncture-title',
    descId: 'item-acupuncture-desc',
    imgId: 'heritage-img-acupuncture-p7q8r9',
    title: '针灸',
    category: '传统医药',
    origin: '全国',
    desc: '中医针灸是中国传统医学的重要组成部分，通过刺激人体特定穴位来调节气血、防治疾病，已被列入世界非物质文化遗产。',
    year: '数千年历史',
    tag: '世界级',
  },
];

export default function HeritageGrid() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const filtered = activeCategory === '全部'
    ? heritageItems
    : heritageItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section id="items" className="py-20 md:py-28 bg-[#EDE5D4]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#8B1A1A] text-sm tracking-[0.3em] mb-3 font-medium">HERITAGE ITEMS</p>
          <h2 className="font-serif-cn text-[#1C1C1E] text-3xl md:text-4xl font-bold">非遗项目展览</h2>
          <div className="section-divider" />
          <p className="text-[#5C4A32] mt-6 max-w-xl mx-auto text-base">
            探索中华民族数千年积累的珍贵文化遗产，感受传统技艺的无穷魅力
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#8B1A1A] text-[#F8F3EA] border-[#8B1A1A]'
                  : 'bg-[#FDF8F0] text-[#5C4A32] border-[#C9A84C]/40 hover:border-[#8B1A1A] hover:text-[#8B1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="heritage-card bg-[#FDF8F0] rounded-2xl overflow-hidden shadow-sm gold-border-card"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Tag Badge */}
                <span className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium ${
                  item.tag === '世界级'
                    ? 'bg-[#C9A84C] text-[#1C1C1E]'
                    : 'bg-[#8B1A1A] text-[#F8F3EA]'
                }`}>
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    id={item.titleId}
                    className="font-serif-cn text-[#1C1C1E] text-xl font-semibold"
                  >
                    {item.title}
                  </h3>
                  <span className="text-[#8C7B6B] text-xs bg-[#EDE5D4] px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#8B1A1A] text-xs font-medium">📍 {item.origin}</span>
                  <span className="text-[#8C7B6B] text-xs">· {item.year}</span>
                </div>

                <p
                  id={item.descId}
                  className="text-[#5C4A32] text-sm leading-relaxed line-clamp-3"
                >
                  {item.desc}
                </p>

                <button className="mt-4 text-[#8B1A1A] text-sm font-medium hover:text-[#C9A84C] transition-colors bg-transparent border-none cursor-pointer p-0 flex items-center gap-1">
                  了解更多 →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
