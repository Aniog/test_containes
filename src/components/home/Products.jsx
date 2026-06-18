import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'walnut-sofa',
    titleId: 'prod-walnut-sofa-title',
    descId: 'prod-walnut-sofa-desc',
    imgId: 'prod-img-walnut-sofa-d4e5f6',
    title: '黑胡桃实木沙发',
    desc: '北美黑胡桃木框架，意大利真皮坐垫，简约北欧风格',
    price: '¥12,800',
    tag: '热销',
  },
  {
    id: 'oak-dining',
    titleId: 'prod-oak-dining-title',
    descId: 'prod-oak-dining-desc',
    imgId: 'prod-img-oak-dining-g7h8i9',
    title: '白橡木餐桌',
    desc: '整块白橡木台面，自然木纹，可定制尺寸',
    price: '¥8,600',
    tag: '新品',
  },
  {
    id: 'cherry-bed',
    titleId: 'prod-cherry-bed-title',
    descId: 'prod-cherry-bed-desc',
    imgId: 'prod-img-cherry-bed-j1k2l3',
    title: '樱桃木双人床',
    desc: '精选樱桃木，榫卯结构，温润色泽，经久耐用',
    price: '¥15,200',
    tag: '精选',
  },
  {
    id: 'pine-bookshelf',
    titleId: 'prod-pine-bookshelf-title',
    descId: 'prod-pine-bookshelf-desc',
    imgId: 'prod-img-pine-bookshelf-m4n5o6',
    title: '松木书架',
    desc: '北欧松木，开放式设计，展示与收纳完美结合',
    price: '¥4,200',
    tag: '',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="bg-[#f5ede0] py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[#8b5e3c] text-sm font-medium tracking-[0.25em] uppercase mb-3">
              精选系列
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d2314]">
              匠心之作
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#5c3d2e] font-medium hover:text-[#3d2314] transition-colors group self-start md:self-auto">
            查看全部产品
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#fefcf8] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#8b5e3c] text-[#fefcf8] text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 id={product.titleId} className="font-serif text-lg font-bold text-[#3d2314] mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-[#5c3d2e] text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#8b5e3c] text-lg">{product.price}</span>
                  <button className="text-xs font-medium text-[#5c3d2e] border border-[#c49a6c] rounded-full px-4 py-1.5 hover:bg-[#c49a6c] hover:text-[#fefcf8] transition-all duration-200">
                    了解详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
