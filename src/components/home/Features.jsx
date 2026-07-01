import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Gem, Leaf, Star, Zap, Shield, Heart } from 'lucide-react';

const features = [
  {
    id: 'feature-1',
    icon: Gem,
    title: '精致品质',
    titleId: 'feature-1-title',
    desc: '每一件产品都经过严格筛选，只为给您带来最精致的体验与享受。',
    descId: 'feature-1-desc',
    imgId: 'feature-img-1-x7y8z9',
    color: 'bg-pink-100 text-pink-500',
  },
  {
    id: 'feature-2',
    icon: Leaf,
    title: '天然成分',
    titleId: 'feature-2-title',
    desc: '采用纯天然植物成分，温和呵护，让您的肌肤焕发自然光彩。',
    descId: 'feature-2-desc',
    imgId: 'feature-img-2-a2b3c4',
    color: 'bg-rose-100 text-rose-500',
  },
  {
    id: 'feature-3',
    icon: Star,
    title: '明星推荐',
    titleId: 'feature-3-title',
    desc: '深受众多明星与美妆博主的喜爱，口碑相传，品质有保障。',
    descId: 'feature-3-desc',
    imgId: 'feature-img-3-d5e6f7',
    color: 'bg-fuchsia-100 text-fuchsia-500',
  },
  {
    id: 'feature-4',
    icon: Zap,
    title: '快速见效',
    titleId: 'feature-4-title',
    desc: '科学配方，快速渗透，让您在最短时间内感受到显著变化。',
    descId: 'feature-4-desc',
    imgId: 'feature-img-4-g8h9i0',
    color: 'bg-pink-100 text-pink-500',
  },
  {
    id: 'feature-5',
    icon: Shield,
    title: '安全认证',
    titleId: 'feature-5-title',
    desc: '通过国际权威机构认证，安全无刺激，适合各种肤质使用。',
    descId: 'feature-5-desc',
    imgId: 'feature-img-5-j1k2l3',
    color: 'bg-rose-100 text-rose-500',
  },
  {
    id: 'feature-6',
    icon: Heart,
    title: '用心服务',
    titleId: 'feature-6-title',
    desc: '7×24小时专属客服，用心解答每一个问题，让您购物无忧。',
    descId: 'feature-6-desc',
    imgId: 'feature-img-6-m4n5o6',
    color: 'bg-fuchsia-100 text-fuchsia-500',
  },
];

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-100 text-pink-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            我们的特色
          </span>
          <h2 id="features-title" className="text-4xl font-bold text-gray-800 mb-4">
            为什么选择我们
          </h2>
          <p id="features-subtitle" className="text-gray-500 text-lg max-w-xl mx-auto">
            我们用心打造每一个细节，只为给您带来最美好的体验
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group bg-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 id={feature.titleId} className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p id={feature.descId} className="text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
