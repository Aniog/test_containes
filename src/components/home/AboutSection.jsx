import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: '天然环保',
    desc: '坚持使用天然、可持续材料，每一件产品都对地球友好，让美好生活不以牺牲环境为代价。',
  },
  {
    icon: Heart,
    title: '用心设计',
    desc: '每款产品都经过设计师反复打磨，融合东方美学与现代生活需求，美观与实用并重。',
  },
  {
    icon: Award,
    title: '品质保证',
    desc: '严格的质量检测体系，从原材料到成品，每一道工序都精益求精，只为您的满意。',
  },
  {
    icon: Users,
    title: '家庭温情',
    desc: '我们相信家是最温暖的地方，梅露可的每一件产品都承载着对家人的爱与关怀。',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-brand-beige py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Story Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-80 md:h-[500px]">
              <img
                alt="梅露可品牌故事"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-h7i8j9"
                data-strk-img="[about-story-desc] [about-story-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-brown text-white rounded-2xl p-5 shadow-xl">
              <p className="font-serif font-bold text-3xl">15+</p>
              <p className="font-sans text-sm text-white/80 mt-1">年匠心品质</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-sans font-medium tracking-widest uppercase text-brand-gold mb-4">
              品牌故事
            </p>
            <h2
              id="about-story-title"
              className="font-serif font-bold text-3xl md:text-4xl text-brand-dark mb-6 leading-tight"
            >
              源于对家的热爱，<br />成就每一件好物
            </h2>
            <p
              id="about-story-desc"
              className="font-sans text-brand-muted text-base leading-relaxed mb-5"
            >
              2009年，梅露可由一对热爱生活的夫妻在苏州创立。
              他们走遍国内外，寻访手工艺人，探索天然材料，
              只为将世界上最美好的家居用品带回家。
            </p>
            <p className="font-sans text-brand-muted text-base leading-relaxed mb-8">
              十五年来，梅露可始终坚守"让家更美好"的初心，
              从一间小小的工作室成长为拥有数百款产品的家居品牌，
              服务超过50万个家庭，每一件产品都承载着我们对生活的热爱与敬意。
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-brown/20">
              {[
                { num: '500+', label: '精选产品' },
                { num: '50万+', label: '幸福家庭' },
                { num: '30+', label: '城市门店' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif font-bold text-2xl text-brand-brown">{stat.num}</p>
                  <p className="font-sans text-xs text-brand-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <p className="text-sm font-sans font-medium tracking-widest uppercase text-brand-gold mb-3">
              品牌理念
            </p>
            <h3 className="font-serif font-bold text-3xl md:text-4xl text-brand-dark">
              我们坚守的价值观
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="w-12 h-12 bg-brand-beige rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-brown transition-colors">
                    <Icon className="w-6 h-6 text-brand-brown group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-serif font-semibold text-brand-dark text-lg mb-3">{val.title}</h4>
                  <p className="font-sans text-brand-muted text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
