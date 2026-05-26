import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['全部', '卧室系列', '客厅系列', '厨房系列', '浴室系列'];

const products = [
  {
    id: 'p1',
    category: '卧室系列',
    name: '云朵棉麻四件套',
    desc: '100%天然棉麻，亲肤透气，让每一夜都是甜蜜的休憩。',
    price: '¥ 398',
    tag: '热销',
    imgId: 'prod-img-a1b2c3',
    imgQuery: '[prod-desc-p1] [prod-name-p1] [prod-cat-p1]',
  },
  {
    id: 'p2',
    category: '客厅系列',
    name: '原木茶几托盘',
    desc: '精选北欧白橡木，手工打磨，纹理自然，为客厅增添温润质感。',
    price: '¥ 268',
    tag: '新品',
    imgId: 'prod-img-d4e5f6',
    imgQuery: '[prod-desc-p2] [prod-name-p2] [prod-cat-p2]',
  },
  {
    id: 'p3',
    category: '厨房系列',
    name: '竹制厨房收纳套装',
    desc: '天然竹材，防霉抗菌，让厨房整洁有序，烹饪更加愉悦。',
    price: '¥ 188',
    tag: '环保',
    imgId: 'prod-img-g7h8i9',
    imgQuery: '[prod-desc-p3] [prod-name-p3] [prod-cat-p3]',
  },
  {
    id: 'p4',
    category: '卧室系列',
    name: '香薰蜡烛礼盒',
    desc: '天然大豆蜡，融合茉莉与雪松香气，点燃一份宁静与温馨。',
    price: '¥ 128',
    tag: '礼品',
    imgId: 'prod-img-j1k2l3',
    imgQuery: '[prod-desc-p4] [prod-name-p4] [prod-cat-p4]',
  },
  {
    id: 'p5',
    category: '浴室系列',
    name: '珊瑚绒浴巾套装',
    desc: '超细纤维珊瑚绒，柔软蓬松，吸水性强，每次沐浴都是享受。',
    price: '¥ 158',
    tag: '热销',
    imgId: 'prod-img-m4n5o6',
    imgQuery: '[prod-desc-p5] [prod-name-p5] [prod-cat-p5]',
  },
  {
    id: 'p6',
    category: '客厅系列',
    name: '手工编织抱枕',
    desc: '纯棉手工编织，色彩温柔，为沙发增添一份慵懒的家居美学。',
    price: '¥ 98',
    tag: '手工',
    imgId: 'prod-img-p7q8r9',
    imgQuery: '[prod-desc-p6] [prod-name-p6] [prod-cat-p6]',
  },
];

const tagColors = {
  热销: 'bg-[#8B6F47] text-white',
  新品: 'bg-[#7A9E7E] text-white',
  环保: 'bg-[#7A9E7E] text-white',
  礼品: 'bg-[#C4956A] text-white',
  手工: 'bg-[#5C3D1E] text-white',
};

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = activeCategory === '全部'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#8B6F47] text-sm tracking-widest uppercase mb-3 font-medium">产品系列</p>
          <h2 className="font-serif-sc font-bold text-[#5C3D1E] text-3xl md:text-4xl mb-4">
            为家而生的每一件好物
          </h2>
          <p className="text-[#7A6552] text-base max-w-xl mx-auto leading-relaxed">
            从卧室到厨房，从客厅到浴室，罗克岚为您的每一个生活空间精心准备。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#8B6F47] text-white shadow-md'
                  : 'bg-white text-[#7A6552] border border-[#E8DDD0] hover:border-[#8B6F47] hover:text-[#8B6F47]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={product.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                />
                {/* Hidden text refs for image queries */}
                <span id={`prod-cat-${product.id}`} className="hidden">{product.category}</span>
                <span id={`prod-name-${product.id}`} className="hidden">{product.name}</span>
                <span id={`prod-desc-${product.id}`} className="hidden">{product.desc}</span>
                {/* Tag */}
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${tagColors[product.tag]}`}>
                  {product.tag}
                </span>
              </div>
              {/* Info */}
              <div className="p-5">
                <p className="text-[#8B6F47] text-xs mb-1">{product.category}</p>
                <h3 className="font-serif-sc font-semibold text-[#5C3D1E] text-lg mb-2">{product.name}</h3>
                <p className="text-[#7A6552] text-sm leading-relaxed mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#8B6F47] text-xl">{product.price}</span>
                  <button className="bg-[#8B6F47] text-white text-sm px-4 py-2 rounded-full hover:bg-[#5C3D1E] transition-colors duration-200">
                    了解详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center border-2 border-[#8B6F47] text-[#8B6F47] font-medium px-8 py-3 rounded-full hover:bg-[#8B6F47] hover:text-white transition-colors duration-200"
          >
            查看全部产品
          </a>
        </div>
      </div>
    </section>
  );
}
