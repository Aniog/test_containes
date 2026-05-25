import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'bedroom',
    title: '卧室寝具',
    desc: '柔软亲肤的床品套件，让每一夜都是甜蜜的梦乡',
    imgHint: 'soft white cotton duvet pillow bedding set cozy bedroom',
    imgId: 'product-img-bedroom-p2q3r4',
    tag: '热销',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    id: 'kitchen',
    title: '厨房用品',
    desc: '精致实用的厨具餐具，让烹饪成为一种享受',
    imgHint: 'kitchen cookware pots pans cooking utensils ceramic bowls plates',
    imgId: 'product-img-kitchen-s5t6u7',
    tag: '新品',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'living',
    title: '客厅装饰',
    desc: '温馨雅致的装饰摆件，为客厅增添家的温度',
    imgHint: 'living room home decor vase candle cushion sofa warm interior',
    imgId: 'product-img-living-v8w9x0',
    tag: '精选',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'bathroom',
    title: '浴室用品',
    desc: '舒适柔软的浴室套件，打造专属的放松空间',
    imgHint: 'bathroom towels soap dispenser toothbrush holder white bathroom accessories',
    imgId: 'product-img-bathroom-y1z2a3',
    tag: '热销',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'storage',
    title: '收纳整理',
    desc: '简洁美观的收纳方案，让家井然有序、清爽宜人',
    imgHint: 'home storage baskets wicker boxes organized shelves closet tidy',
    imgId: 'product-img-storage-b4c5d6',
    tag: '实用',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'outdoor',
    title: '户外阳台',
    desc: '精心设计的户外家居，让阳台成为第二个客厅',
    imgHint: 'balcony outdoor furniture chair table potted plants terrace garden',
    imgId: 'product-img-outdoor-e7f8g9',
    tag: '新品',
    tagColor: 'bg-teal-100 text-teal-700',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">产品系列</span>
          <h2
            id="products-title"
            className="text-3xl md:text-4xl font-bold text-stone-800 mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            为家的每个角落<br className="md:hidden" />精心准备
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            从卧室到厨房，从客厅到浴室，庆巷家居覆盖家居生活的每一个场景，让您的家处处充满温馨与美好。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <span id={`product-hint-${cat.id}`} className="hidden">{cat.imgHint}</span>
                <img
                  id={`product-title-${cat.id}`}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[product-hint-${cat.id}] [product-desc-${cat.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-stone-800 mb-2"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {cat.title}
                </h3>
                <p id={`product-desc-${cat.id}`} className="text-stone-500 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <div className="flex items-center text-amber-700 text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-800 transition-colors shadow-md hover:shadow-lg"
          >
            获取完整产品目录
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
