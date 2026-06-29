import { useEffect, useRef } from 'react';
import { Leaf, Recycle, Sun, Droplets, Wind, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'eco-products',
    icon: Leaf,
    title: '纯天然产品',
    desc: '精选来自大自然的有机原料，不含任何有害化学成分，让您安心使用。',
    color: 'bg-green-100 text-green-600',
    imgId: 'feat-img-eco-9a1b2c',
    titleId: 'feat-title-eco',
    descId: 'feat-desc-eco',
  },
  {
    id: 'recycling',
    icon: Recycle,
    title: '循环再生',
    desc: '采用100%可回收包装材料，减少碳足迹，共同守护我们的地球家园。',
    color: 'bg-emerald-100 text-emerald-600',
    imgId: 'feat-img-recycle-3d4e5f',
    titleId: 'feat-title-recycle',
    descId: 'feat-desc-recycle',
  },
  {
    id: 'solar',
    icon: Sun,
    title: '清洁能源',
    desc: '利用太阳能等可再生能源驱动我们的生产流程，实现零碳排放目标。',
    color: 'bg-lime-100 text-lime-600',
    imgId: 'feat-img-solar-6g7h8i',
    titleId: 'feat-title-solar',
    descId: 'feat-desc-solar',
  },
  {
    id: 'water',
    icon: Droplets,
    title: '节水技术',
    desc: '先进的节水技术让每一滴水都得到充分利用，保护珍贵的水资源。',
    color: 'bg-teal-100 text-teal-600',
    imgId: 'feat-img-water-9j0k1l',
    titleId: 'feat-title-water',
    descId: 'feat-desc-water',
  },
  {
    id: 'air',
    icon: Wind,
    title: '净化空气',
    desc: '我们的产品和服务有助于改善室内外空气质量，让您呼吸更清新。',
    color: 'bg-green-100 text-green-500',
    imgId: 'feat-img-air-2m3n4o',
    titleId: 'feat-title-air',
    descId: 'feat-desc-air',
  },
  {
    id: 'health',
    icon: Heart,
    title: '健康生活',
    desc: '倡导健康的生活方式，从饮食到运动，全方位呵护您和家人的健康。',
    color: 'bg-emerald-100 text-emerald-500',
    imgId: 'feat-img-health-5p6q7r',
    titleId: 'feat-title-health',
    descId: 'feat-desc-health',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 rounded-full px-4 py-1 text-sm font-semibold mb-4">
            我们的特色
          </span>
          <h2 id="features-title" className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
            为什么选择我们
          </h2>
          <p id="features-subtitle" className="text-green-700 text-lg max-w-2xl mx-auto leading-relaxed">
            我们提供全方位的绿色生活解决方案，帮助您和家人过上更健康、更环保的生活。
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white border border-green-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feat.color} mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 id={feat.titleId} className="text-xl font-bold text-green-900 mb-3">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-green-700 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
