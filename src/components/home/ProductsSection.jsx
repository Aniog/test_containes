import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'prod-1',
    imgId: 'prod-img-g7h8i9',
    category: '寝室系列',
    title: '云感棉麻四件套',
    desc: '采用100%天然棉麻混纺，亲肤透气，让每一个夜晚都如云端般柔软舒适。',
    price: '¥ 398',
    tag: '热销',
    tagColor: 'bg-[#C4714A]',
  },
  {
    id: 'prod-2',
    imgId: 'prod-img-j1k2l3',
    category: '厨房系列',
    title: '原木餐具套装',
    desc: '精选北欧橡木，手工打磨，自然纹理赋予餐桌温暖质感，让用餐成为一种享受。',
    price: '¥ 268',
    tag: '新品',
    tagColor: 'bg-[#8B6F47]',
  },
  {
    id: 'prod-3',
    imgId: 'prod-img-m4n5o6',
    category: '客厅系列',
    title: '手工编织抱枕',
    desc: '纯手工编织，每一针都蕴含匠人心意，为您的沙发增添一抹温馨与艺术气息。',
    price: '¥ 158',
    tag: '精选',
    tagColor: 'bg-[#8B6F47]',
  },
  {
    id: 'prod-4',
    imgId: 'prod-img-p7q8r9',
    category: '浴室系列',
    title: '竹纤维浴巾套装',
    desc: '天然竹纤维材质，超强吸水，抗菌防霉，呵护全家人的肌肤健康。',
    price: '¥ 188',
    tag: '环保',
    tagColor: 'bg-[#6B8B47]',
  },
  {
    id: 'prod-5',
    imgId: 'prod-img-s1t2u3',
    category: '收纳系列',
    title: '藤编收纳篮组合',
    desc: '天然藤编工艺，大中小三件套，整洁收纳的同时为家居增添自然田园风情。',
    price: '¥ 228',
    tag: '热销',
    tagColor: 'bg-[#C4714A]',
  },
  {
    id: 'prod-6',
    imgId: 'prod-img-v4w5x6',
    category: '香氛系列',
    title: '天然植物香薰蜡烛',
    desc: '精选天然植物蜡与精油，点燃后散发淡雅芬芳，营造宁静温馨的家居氛围。',
    price: '¥ 128',
    tag: '新品',
    tagColor: 'bg-[#8B6F47]',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-16 md:py-24 bg-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C4714A] text-sm font-medium tracking-widest uppercase mb-3">产品系列</p>
          <h2 id="products-title" className="text-3xl md:text-4xl font-serif font-bold text-[#2C1810] mb-4">
            为家而生的每一件好物
          </h2>
          <p id="products-subtitle" className="text-[#6B5B4E] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            从寝室到厨房，从客厅到浴室，维纯家居覆盖家庭生活的每一个角落，
            让温馨与品质触手可及。
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <p className="text-[#C4714A] text-xs font-medium tracking-wider uppercase mb-2">{product.category}</p>
                <h3 id={`${product.id}-title`} className="text-lg font-serif font-semibold text-[#2C1810] mb-2">
                  {product.title}
                </h3>
                <p id={`${product.id}-desc`} className="text-[#6B5B4E] text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#8B6F47]">{product.price}</span>
                  <button className="bg-[#F5F0E8] text-[#8B6F47] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#8B6F47] hover:text-white transition-colors border-none cursor-pointer">
                    查看详情
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
            className="inline-block border-2 border-[#8B6F47] text-[#8B6F47] rounded-full px-10 py-3 text-base font-medium hover:bg-[#8B6F47] hover:text-white transition-colors no-underline"
          >
            查看全部产品
          </a>
        </div>
      </div>
    </section>
  );
}
