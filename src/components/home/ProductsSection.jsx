import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'prod-1',
    category: '个人清洁',
    name: '威尔德温和洁肤系列',
    desc: '采用植物源性表面活性剂，pH值精准调控至弱酸性，温和清洁同时维护皮肤天然屏障，适合全家日常使用。',
    tags: ['低敏配方', '植物成分', '皮肤科测试'],
    imgId: 'prod-img-d4e5f6',
    imgQuery: '[prod-1-desc] [prod-1-name]',
  },
  {
    id: 'prod-2',
    category: '家居清洁',
    name: '威尔德多效家居清洁剂',
    desc: '高效去除油污、水垢及细菌，无刺激性气味，生物降解配方对环境友好，一瓶满足厨房、卫浴、地板多场景需求。',
    tags: ['多效合一', '生物降解', '无刺激气味'],
    imgId: 'prod-img-g7h8i9',
    imgQuery: '[prod-2-desc] [prod-2-name]',
  },
  {
    id: 'prod-3',
    category: '婴幼儿护理',
    name: '威尔德婴儿呵护系列',
    desc: '专为0-3岁婴幼儿娇嫩肌肤研发，通过欧盟EN71安全认证，不含荧光剂、防腐剂及人工香料，给宝宝最纯净的呵护。',
    tags: ['0+适用', 'EN71认证', '无荧光剂'],
    imgId: 'prod-img-j1k2l3',
    imgQuery: '[prod-3-desc] [prod-3-name]',
  },
  {
    id: 'prod-4',
    category: '老年护理',
    name: '威尔德银龄关怀系列',
    desc: '针对老年人皮肤特点，富含天然保湿因子与修复成分，改善干燥、粗糙问题，提升老年人日常护理舒适度与生活质量。',
    tags: ['深层保湿', '修复屏障', '温和不刺激'],
    imgId: 'prod-img-m4n5o6',
    imgQuery: '[prod-4-desc] [prod-4-name]',
  },
  {
    id: 'prod-5',
    category: '口腔护理',
    name: '威尔德全效口腔护理系列',
    desc: '结合先进抗菌技术与天然薄荷精华，有效预防龋齿、牙龈炎及口腔异味，全面守护口腔健康，清新持久。',
    tags: ['抗菌防龋', '清新持久', '全家适用'],
    imgId: 'prod-img-p7q8r9',
    imgQuery: '[prod-5-desc] [prod-5-name]',
  },
  {
    id: 'prod-6',
    category: '衣物护理',
    name: '威尔德衣物深层洁净系列',
    desc: '酵素配方深层分解污渍，低温高效洗涤，保护衣物纤维不受损伤，同时具备持久留香功能，让衣物焕然一新。',
    tags: ['酵素配方', '低温高效', '持久留香'],
    imgId: 'prod-img-s1t2u3',
    imgQuery: '[prod-6-desc] [prod-6-name]',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            产品系列
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            全方位家庭护理解决方案
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
            覆盖个人清洁、家居护理、婴幼儿及老年人专属护理等六大品类，
            以科学配方满足家庭每一位成员的护理需求。
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden bg-neutral-100">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={product.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span
                  id={`${product.id}-name`}
                  className="hidden"
                >
                  {product.name}
                </span>
                <span
                  id={`${product.id}-desc`}
                  className="hidden"
                >
                  {product.desc}
                </span>
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{product.name}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-brand-accent/10 text-brand-accent text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-primary text-white font-semibold px-10 py-4 rounded-full hover:bg-brand-primary-light transition-colors shadow-md text-base"
          >
            获取完整产品目录
          </button>
        </div>
      </div>
    </section>
  );
}
