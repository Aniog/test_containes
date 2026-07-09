import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Shield, Zap, Star } from 'lucide-react';

const gearItems = [
  {
    id: 'helmet',
    category: '安全装备',
    icon: Shield,
    name: '专业滑雪头盔',
    brand: 'POC Obex MIPS',
    price: '¥1,299',
    rating: 4.9,
    tag: '编辑推荐',
    tagColor: 'bg-sky-blue',
    description: 'MIPS防旋转技术，双层EPS内衬，可调节通风系统，重量仅380g，提供全方位头部保护。',
    imgId: 'gear-helmet-img-k1l2m3',
    titleId: 'gear-helmet-title',
    descId: 'gear-helmet-desc',
  },
  {
    id: 'boots',
    category: '滑雪靴',
    icon: Zap,
    name: '竞技滑雪靴',
    brand: 'Atomic Hawx Ultra',
    price: '¥2,899',
    rating: 4.8,
    tag: '热销',
    tagColor: 'bg-slope-orange',
    description: '碳纤维外壳，Memory Fit 3D技术，精准贴合脚型，提供卓越的力量传导和舒适感。',
    imgId: 'gear-boots-img-n4o5p6',
    titleId: 'gear-boots-title',
    descId: 'gear-boots-desc',
  },
  {
    id: 'skis',
    category: '滑雪板',
    icon: Star,
    name: '全地形滑雪板',
    brand: 'Rossignol Experience',
    price: '¥3,599',
    rating: 4.9,
    tag: '编辑推荐',
    tagColor: 'bg-sky-blue',
    description: '木芯结构配合碳纤维加强，Air Tip技术减轻重量，适合各种雪道条件，是全能型选手的首选。',
    imgId: 'gear-skis-img-q7r8s9',
    titleId: 'gear-skis-title',
    descId: 'gear-skis-desc',
  },
  {
    id: 'goggles',
    category: '护目镜',
    icon: Shield,
    name: '磁吸换片护目镜',
    brand: 'Oakley Flight Deck',
    price: '¥1,899',
    rating: 4.8,
    tag: '新品',
    tagColor: 'bg-emerald-500',
    description: 'Prizm雪地镜片技术，磁吸快换系统，超大视野框架，在各种光线条件下提供最佳视觉体验。',
    imgId: 'gear-goggles-img-t1u2v3',
    titleId: 'gear-goggles-title',
    descId: 'gear-goggles-desc',
  },
  {
    id: 'jacket',
    category: '滑雪服',
    icon: Shield,
    name: '防水透气滑雪夹克',
    brand: 'Arc\'teryx Sabre',
    price: '¥4,299',
    rating: 4.9,
    tag: '高端',
    tagColor: 'bg-purple-500',
    description: 'Gore-Tex Pro面料，20000mm防水指数，完全密封接缝，内置粉雪裙，是极端天气的终极防护。',
    imgId: 'gear-jacket-img-w4x5y6',
    titleId: 'gear-jacket-title',
    descId: 'gear-jacket-desc',
  },
  {
    id: 'poles',
    category: '雪杖',
    icon: Zap,
    name: '碳纤维雪杖',
    brand: 'Leki Spitfire 3D',
    price: '¥899',
    rating: 4.7,
    tag: '性价比',
    tagColor: 'bg-slope-orange',
    description: '100%碳纤维杆身，重量仅220g，Trigger S手套系统，可调节长度，适合各种滑雪风格。',
    imgId: 'gear-poles-img-z7a8b9',
    titleId: 'gear-poles-title',
    descId: 'gear-poles-desc',
  },
];

export default function Gear() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gear" ref={containerRef} className="bg-deep-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sky-blue text-sm font-semibold uppercase tracking-widest mb-3">
            装备指南
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-snow-white mb-4">
            专业装备推荐
          </h2>
          <p className="text-glacier text-lg max-w-2xl mx-auto">
            好的装备是安全与性能的保障，我们为不同预算和需求精选了最值得投资的滑雪装备
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gearItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="group bg-frost rounded-2xl overflow-hidden border border-white/10 hover:border-sky-blue/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    alt={item.name}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] ski equipment gear`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-frost/60 to-transparent" />
                  <span className={`absolute top-3 left-3 ${item.tagColor} text-snow-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {item.tag}
                  </span>
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <Icon className="w-4 h-4 text-sky-blue" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-glacier text-xs font-medium uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h3 id={item.titleId} className="text-lg font-bold text-snow-white mb-0.5">
                    {item.name}
                  </h3>
                  <div className="text-sky-blue text-sm font-medium mb-3">{item.brand}</div>
                  <p id={item.descId} className="text-glacier text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`}
                        />
                      ))}
                      <span className="text-glacier text-xs ml-1">{item.rating}</span>
                    </div>
                    <span className="text-snow-white font-bold text-lg">{item.price}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
