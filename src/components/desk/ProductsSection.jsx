import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 'prod-1',
    name: '简约实木办公桌',
    subtitle: '北欧风格 · 单人工位',
    price: '¥1,280',
    originalPrice: '¥1,680',
    rating: 4.8,
    reviews: 326,
    badge: '热销',
    badgeColor: 'bg-rose-100 text-rose-700',
    features: ['实木桌面，质感温润', '内置走线槽', '承重 80kg', '尺寸：140×70cm'],
    imgId: 'prod-img-1-y7z8a9',
    titleId: 'prod-1-title',
    descId: 'prod-1-desc',
  },
  {
    id: 'prod-2',
    name: '电动升降站立桌',
    subtitle: '人体工学 · 坐站两用',
    price: '¥2,680',
    originalPrice: '¥3,200',
    rating: 4.9,
    reviews: 512,
    badge: '编辑推荐',
    badgeColor: 'bg-blue-100 text-blue-700',
    features: ['电动四档高度调节', '记忆功能', '防碰撞保护', '尺寸：160×80cm'],
    imgId: 'prod-img-2-b1c2d3',
    titleId: 'prod-2-title',
    descId: 'prod-2-desc',
  },
  {
    id: 'prod-3',
    name: '钢木工业风办公桌',
    subtitle: '工业风格 · 耐用稳固',
    price: '¥960',
    originalPrice: '¥1,200',
    rating: 4.6,
    reviews: 198,
    badge: '性价比之选',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    features: ['钢架结构，超稳固', '哑光桌面防划伤', '侧挂收纳钩', '尺寸：120×60cm'],
    imgId: 'prod-img-3-e4f5g6',
    titleId: 'prod-3-title',
    descId: 'prod-3-desc',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
        />
      ))}
      <span className="text-sm font-semibold text-slate-700 ml-1">{rating}</span>
    </div>
  );
}

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            精选推荐
          </span>
          <h2
            id="products-title"
            className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4"
          >
            推荐办公桌产品
          </h2>
          <p
            id="products-subtitle"
            className="text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            根据不同预算与使用场景，我们精选了三款高口碑办公桌，满足不同团队的采购需求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-slate-400 mb-1">{product.subtitle}</p>
                <h3 id={product.titleId} className="text-lg font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
                <p className="text-xs text-slate-400 mt-1 mb-3">{product.reviews} 条评价</p>

                <ul className="space-y-1 mb-4 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span id={product.descId}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-sm text-slate-400 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <a
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    询价
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
