import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Leaf, Droplets, Sun, Shield, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    id: 'facial-care',
    icon: Sparkles,
    title: '面部护理',
    desc: '专业深层清洁与滋养，让肌肤焕发自然光泽，恢复年轻活力。',
    titleId: 'service-facial-care-title',
    descId: 'service-facial-care-desc',
    imgId: 'service-img-facial-d4e5f6',
  },
  {
    id: 'natural-ingredients',
    icon: Leaf,
    title: '天然成分',
    desc: '精选全球优质天然植物精华，温和不刺激，适合各种肤质使用。',
    titleId: 'service-natural-title',
    descId: 'service-natural-desc',
    imgId: 'service-img-natural-g7h8i9',
  },
  {
    id: 'hydration',
    icon: Droplets,
    title: '深层补水',
    desc: '多层次保湿技术，持续锁水24小时，告别干燥紧绷的烦恼。',
    titleId: 'service-hydration-title',
    descId: 'service-hydration-desc',
    imgId: 'service-img-hydration-j1k2l3',
  },
  {
    id: 'brightening',
    icon: Sun,
    title: '美白亮肤',
    desc: '科学配方淡化色斑，均匀肤色，让你的肌肤透亮如瓷。',
    titleId: 'service-brightening-title',
    descId: 'service-brightening-desc',
    imgId: 'service-img-brightening-m4n5o6',
  },
  {
    id: 'anti-aging',
    icon: Shield,
    title: '抗衰老护理',
    desc: '先进抗氧化技术，有效对抗自由基，减少细纹与皱纹的出现。',
    titleId: 'service-antiaging-title',
    descId: 'service-antiaging-desc',
    imgId: 'service-img-antiaging-p7q8r9',
  },
  {
    id: 'sensitive-care',
    icon: Heart,
    title: '敏感肌专护',
    desc: '专为敏感肌肤设计，低敏配方，舒缓红肿，重建肌肤屏障。',
    titleId: 'service-sensitive-title',
    descId: 'service-sensitive-desc',
    imgId: 'service-img-sensitive-s1t2u3',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            我们的服务
          </span>
          <h2
            id="services-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight"
          >
            专业护肤，<span className="text-pink-500">全面呵护</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            我们提供全方位的美容护肤解决方案，让每一位女性都能拥有健康美丽的肌肤。
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors">
                  <Icon className="w-7 h-7 text-pink-500 group-hover:text-white transition-colors" />
                </div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-5 aspect-video">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 id={service.titleId} className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p id={service.descId} className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-pink-500 hover:text-pink-700 font-semibold text-sm mt-4 transition-colors"
                >
                  了解详情 →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
