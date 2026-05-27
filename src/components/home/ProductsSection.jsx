import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'prod-1',
    titleId: 'prod-title-1',
    subtitleId: 'prod-sub-1',
    title: '北欧原木餐桌',
    subtitle: '实木家具 温馨餐厅',
    desc: '精选北欧白橡木，天然纹理温润细腻，一家人围坐共享美食的幸福时光从这里开始。',
    price: '¥ 2,980',
    tag: '热销',
    tagColor: 'bg-[#8B6F47]',
    rating: 4.9,
    reviews: 328,
    imgId: 'prod-img-1a2b3c',
  },
  {
    id: 'prod-2',
    titleId: 'prod-title-2',
    subtitleId: 'prod-sub-2',
    title: '亚麻抱枕套装',
    subtitle: '软装布艺 客厅沙发',
    desc: '天然亚麻材质，柔软亲肤，多色可选，为您的沙发增添一抹温暖的家居色彩。',
    price: '¥ 198',
    tag: '新品',
    tagColor: 'bg-[#7A9E7E]',
    rating: 4.8,
    reviews: 215,
    imgId: 'prod-img-4d5e6f',
  },
  {
    id: 'prod-3',
    titleId: 'prod-title-3',
    subtitleId: 'prod-sub-3',
    title: '香薰蜡烛礼盒',
    subtitle: '家居香氛 卧室氛围',
    desc: '精选天然植物蜡，融合花草精油，点燃一支，让整个家弥漫温柔的芬芳气息。',
    price: '¥ 168',
    tag: '礼选',
    tagColor: 'bg-[#C4A882]',
    rating: 4.9,
    reviews: 412,
    imgId: 'prod-img-7g8h9i',
  },
  {
    id: 'prod-4',
    titleId: 'prod-title-4',
    subtitleId: 'prod-sub-4',
    title: '陶瓷餐具套装',
    subtitle: '手工陶瓷 厨房餐具',
    desc: '手工拉坯，釉色自然流淌，每一件都是独一无二的艺术品，让日常用餐成为一种享受。',
    price: '¥ 580',
    tag: '精选',
    tagColor: 'bg-[#8B6F47]',
    rating: 4.7,
    reviews: 189,
    imgId: 'prod-img-j1k2l3',
  },
  {
    id: 'prod-5',
    titleId: 'prod-title-5',
    subtitleId: 'prod-sub-5',
    title: '绿植花器组合',
    subtitle: '室内绿植 阳台装饰',
    desc: '精心搭配的陶土花器与多肉植物，为家中带来一抹生机盎然的自然气息。',
    price: '¥ 298',
    tag: '热销',
    tagColor: 'bg-[#7A9E7E]',
    rating: 4.8,
    reviews: 276,
    imgId: 'prod-img-m4n5o6',
  },
  {
    id: 'prod-6',
    titleId: 'prod-title-6',
    subtitleId: 'prod-sub-6',
    title: '羊毛地毯',
    subtitle: '客厅地毯 卧室地毯',
    desc: '新西兰纯羊毛编织，脚感柔软温暖，几何图案简约大气，为家增添层次与质感。',
    price: '¥ 1,280',
    tag: '品质',
    tagColor: 'bg-[#8B6F47]',
    rating: 4.9,
    reviews: 354,
    imgId: 'prod-img-p7q8r9',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.subtitleId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Tag */}
        <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
          {product.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          id={product.titleId}
          className="text-lg font-bold text-[#2C1810] mb-1"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
        >
          {product.title}
        </h3>
        <p id={product.subtitleId} className="text-xs text-[#9E8E82] mb-2">
          {product.subtitle}
        </p>
        <p className="text-sm text-[#6B5B4E] leading-relaxed mb-4 line-clamp-2">
          {product.desc}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
            />
          ))}
          <span className="text-xs text-[#9E8E82] ml-1">{product.rating} ({product.reviews}条评价)</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#8B6F47]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            {product.price}
          </span>
          <button className="flex items-center gap-1 bg-[#F5EFE6] text-[#8B6F47] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#8B6F47] hover:text-white transition-colors">
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-widest uppercase mb-3">
            精选系列
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            为家而生的每一件好物
          </h2>
          <p className="text-[#6B5B4E] text-lg max-w-xl mx-auto leading-relaxed">
            每一件产品都经过严格筛选，只为让您的家更温馨、更美好
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-[#8B6F47] text-[#8B6F47] rounded-full px-8 py-3 font-medium hover:bg-[#8B6F47] hover:text-white transition-colors"
          >
            查看全部产品
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
