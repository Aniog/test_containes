import { useEffect, useRef } from 'react';
import { Recycle, Sun, Droplets, Wind, TreePine, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-recycle',
    icon: Recycle,
    title: '循环再利用',
    desc: '通过智能分类和回收系统，将废弃物转化为有价值的资源，减少垃圾填埋。',
    color: 'bg-emerald/10 text-emerald',
    imgId: 'feat-img-recycle-d4e5f6',
    titleId: 'feat-title-recycle',
    descId: 'feat-desc-recycle',
  },
  {
    id: 'feat-solar',
    icon: Sun,
    title: '清洁能源',
    desc: '利用太阳能、风能等可再生能源，降低碳排放，为未来提供清洁动力。',
    color: 'bg-yellow-100 text-yellow-600',
    imgId: 'feat-img-solar-g7h8i9',
    titleId: 'feat-title-solar',
    descId: 'feat-desc-solar',
  },
  {
    id: 'feat-water',
    icon: Droplets,
    title: '水资源保护',
    desc: '推广节水技术和雨水收集系统，合理利用每一滴珍贵的水资源。',
    color: 'bg-blue-100 text-blue-600',
    imgId: 'feat-img-water-j1k2l3',
    titleId: 'feat-title-water',
    descId: 'feat-desc-water',
  },
  {
    id: 'feat-air',
    icon: Wind,
    title: '空气净化',
    desc: '通过植树造林和减少污染排放，改善空气质量，让每次呼吸都更清新。',
    color: 'bg-sky-100 text-sky-600',
    imgId: 'feat-img-air-m4n5o6',
    titleId: 'feat-title-air',
    descId: 'feat-desc-air',
  },
  {
    id: 'feat-forest',
    icon: TreePine,
    title: '森林保护',
    desc: '守护原始森林，推动植树造林计划，维护生物多样性和生态平衡。',
    color: 'bg-forest/10 text-forest',
    imgId: 'feat-img-forest-p7q8r9',
    titleId: 'feat-title-forest',
    descId: 'feat-desc-forest',
  },
  {
    id: 'feat-community',
    icon: Heart,
    title: '社区参与',
    desc: '连接志同道合的环保人士，共同参与本地环保活动，建设绿色社区。',
    color: 'bg-rose-100 text-rose-500',
    imgId: 'feat-img-community-s1t2u3',
    titleId: 'feat-title-community',
    descId: 'feat-desc-community',
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="features" ref={containerRef} className="bg-pale py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald bg-mint px-4 py-1.5 rounded-full">
            我们的特色
          </span>
          <h2 id="features-title" className="text-4xl font-bold text-forest mt-4 mb-4">
            全方位绿色解决方案
          </h2>
          <p id="features-subtitle" className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            我们提供一系列专业的环保服务，帮助个人和企业实现可持续发展目标，共同创造更美好的绿色未来。
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl p-8 border border-mint shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 id={feat.titleId} className="text-lg font-semibold text-dark mb-3">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-gray-600 text-sm leading-relaxed mb-5">
                  {feat.desc}
                </p>
                <div className="rounded-xl overflow-hidden">
                  <img
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [features-subtitle] [features-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={feat.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
