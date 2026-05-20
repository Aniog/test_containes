import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-living',
    label: '客厅系列',
    title: '温馨客厅',
    desc: '精选沙发、茶几、地毯，打造家人共聚的温暖空间',
    imgId: 'prod-img-d4e5f6',
    imgQuery: '[cat-living-title] [cat-living-desc]',
  },
  {
    id: 'cat-bedroom',
    label: '卧室系列',
    title: '舒适卧室',
    desc: '天然棉麻床品、柔软枕具，让每一夜都是甜蜜的休憩',
    imgId: 'prod-img-g7h8i9',
    imgQuery: '[cat-bedroom-title] [cat-bedroom-desc]',
  },
  {
    id: 'cat-kitchen',
    label: '厨房系列',
    title: '烟火厨房',
    desc: '精致餐具、实用厨具，让烹饪成为每日最美好的仪式',
    imgId: 'prod-img-j1k2l3',
    imgQuery: '[cat-kitchen-title] [cat-kitchen-desc]',
  },
  {
    id: 'cat-deco',
    label: '装饰系列',
    title: '家居装饰',
    desc: '花瓶、香薰、挂画，用细节点亮家的每一处角落',
    imgId: 'prod-img-m4n5o6',
    imgQuery: '[cat-deco-title] [cat-deco-desc]',
  },
];

const featuredProducts = [
  {
    id: 'fp-1',
    name: '手工编织棉麻抱枕',
    category: '卧室 / 客厅',
    price: '¥ 168',
    tag: '热销',
    imgId: 'fp-img-p7q8r9',
    titleId: 'fp-title-1',
    descId: 'fp-desc-1',
    desc: '天然棉麻材质，手工编织纹理，柔软亲肤，为沙发和床铺增添温暖质感',
  },
  {
    id: 'fp-2',
    name: '北欧风实木餐桌套装',
    category: '餐厅',
    price: '¥ 2,980',
    tag: '新品',
    imgId: 'fp-img-s1t2u3',
    titleId: 'fp-title-2',
    descId: 'fp-desc-2',
    desc: '橡木实木桌面，简约北欧设计，一桌四椅，承载家人共餐的美好时光',
  },
  {
    id: 'fp-3',
    name: '香薰蜡烛礼盒套装',
    category: '家居装饰',
    price: '¥ 298',
    tag: '精选',
    imgId: 'fp-img-v4w5x6',
    titleId: 'fp-title-3',
    descId: 'fp-desc-3',
    desc: '天然大豆蜡，融合茉莉与雪松香气，点燃后满室芬芳，营造宁静氛围',
  },
  {
    id: 'fp-4',
    name: '日式陶瓷茶具套装',
    category: '厨房 / 茶室',
    price: '¥ 458',
    tag: '精选',
    imgId: 'fp-img-y7z8a9',
    titleId: 'fp-title-4',
    descId: 'fp-desc-4',
    desc: '手工拉坯陶瓷，哑光釉面，一壶四杯，让每一次品茶都成为生活的享受',
  },
  {
    id: 'fp-5',
    name: '亚麻窗帘（双幅）',
    category: '客厅 / 卧室',
    price: '¥ 520',
    tag: '热销',
    imgId: 'fp-img-b1c2d3',
    titleId: 'fp-title-5',
    descId: 'fp-desc-5',
    desc: '天然亚麻面料，自然垂感，柔和透光，为空间带来清新自然的气息',
  },
  {
    id: 'fp-6',
    name: '手工竹编收纳篮',
    category: '收纳 / 装饰',
    price: '¥ 128',
    tag: '新品',
    imgId: 'fp-img-e4f5g6',
    titleId: 'fp-title-6',
    descId: 'fp-desc-6',
    desc: '天然竹材手工编织，环保耐用，收纳与装饰兼备，让家更整洁有序',
  },
];

const tagColors = {
  '热销': 'bg-brand-brown text-white',
  '新品': 'bg-brand-green text-white',
  '精选': 'bg-brand-gold text-brand-dark',
};

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="products" ref={containerRef} className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-sans font-medium tracking-widest uppercase text-brand-gold mb-3">
            产品系列
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-brand-dark mb-4">
            为家而生的每一件好物
          </h2>
          <p className="font-sans text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            我们相信，好的家居用品不只是物件，更是生活态度的表达。
            每一件梅露可产品，都经过严格甄选，只为让您的家更美好。
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-48 md:h-64"
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.id}-title] [${cat.id}-desc]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="400"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent group-hover:from-brand-dark/90 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs font-sans text-brand-gold tracking-widest uppercase mb-1">{cat.label}</p>
                <h3 id={`${cat.id}-title`} className="font-serif font-bold text-white text-lg">{cat.title}</h3>
                <p id={`${cat.id}-desc`} className="text-white/70 text-xs font-sans mt-1 hidden md:block">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="mb-10">
          <h3 className="font-serif font-semibold text-2xl text-brand-dark mb-8 text-center">精选好物</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-sans font-semibold px-3 py-1 rounded-full ${tagColors[product.tag]}`}>
                    {product.tag}
                  </span>
                </div>
                {/* Product Info */}
                <div className="p-5">
                  <p className="text-xs font-sans text-brand-gold tracking-wider uppercase mb-1">{product.category}</p>
                  <h4 id={product.titleId} className="font-serif font-semibold text-brand-dark text-lg mb-2">{product.name}</h4>
                  <p id={product.descId} className="font-sans text-brand-muted text-sm leading-relaxed mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-brand-brown text-xl">{product.price}</span>
                    <button className="bg-brand-beige text-brand-brown px-4 py-2 rounded-full text-sm font-sans font-medium hover:bg-brand-brown hover:text-white transition-colors">
                      了解详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block border-2 border-brand-brown text-brand-brown px-10 py-3.5 rounded-full font-sans font-medium hover:bg-brand-brown hover:text-white transition-colors"
          >
            查看全部产品
          </a>
        </div>
      </div>
    </section>
  );
}
