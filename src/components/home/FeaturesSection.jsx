import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Sword, Trophy, BookOpen, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-about',
    icon: Target,
    title: '关于射箭',
    desc: '了解射箭运动的起源、发展历程，以及它在现代体育中的重要地位。',
    path: '/about',
    imgId: 'feat-about-img-3c8d1e',
    titleId: 'feat-about-title',
    descId: 'feat-about-desc',
  },
  {
    id: 'feat-technique',
    icon: Sword,
    title: '技术与装备',
    desc: '深入了解弓箭的种类、射箭技术要领，以及专业装备的选择与维护。',
    path: '/technique',
    imgId: 'feat-technique-img-9a2f4c',
    titleId: 'feat-technique-title',
    descId: 'feat-technique-desc',
  },
  {
    id: 'feat-competition',
    icon: Trophy,
    title: '赛事历史',
    desc: '回顾射箭运动的重大赛事，从奥运会到世界锦标赛的辉煌历史。',
    path: '/competition',
    imgId: 'feat-competition-img-5b7e3a',
    titleId: 'feat-competition-title',
    descId: 'feat-competition-desc',
  },
  {
    id: 'feat-training',
    icon: BookOpen,
    title: '训练指南',
    desc: '专业的训练计划和技巧指导，帮助初学者到高级选手提升射箭水平。',
    path: '/training',
    imgId: 'feat-training-img-2d6f8b',
    titleId: 'feat-training-title',
    descId: 'feat-training-desc',
  },
];

const stats = [
  { value: '5000+', label: '年历史' },
  { value: '64', label: '奥运参赛国' },
  { value: '70m', label: '奥运标准距离' },
  { value: '10环', label: '满分靶心' },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section id="features" className="py-20 px-4 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">探索内容</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
              射箭运动的全貌
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
              从历史渊源到现代竞技，从基础技术到专业训练，全方位了解这项古老而精准的运动
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <Link
                  key={feat.id}
                  to={feat.path}
                  className="group bg-white rounded-2xl overflow-hidden border border-border-green shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={feat.title}
                      data-strk-img-id={feat.imgId}
                      data-strk-img={`[${feat.descId}] [${feat.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-forest-dark" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 id={feat.titleId} className="font-serif text-lg font-bold text-text-primary mb-2">
                      {feat.title}
                    </h3>
                    <p id={feat.descId} className="text-text-secondary text-sm leading-relaxed mb-4">
                      {feat.desc}
                    </p>
                    <div className="flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                      了解更多 <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-text-light/70 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
