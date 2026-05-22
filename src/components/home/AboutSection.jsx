import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Leaf, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '以家为本',
    desc: '我们相信，家是心灵最温柔的归宿。每一件产品，都承载着我们对家的深情与敬意。',
  },
  {
    icon: Award,
    title: '品质至上',
    desc: '严格把控每一道工序，精选天然环保材料，让您的家人在安全、舒适的环境中生活。',
  },
  {
    icon: Leaf,
    title: '绿色生活',
    desc: '倡导可持续生活方式，选用环保材料，减少碳足迹，为下一代守护美好家园。',
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">关于我们</span>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-stone-800 mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            用心经营，温暖相伴
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            十五年如一日，庆巷家居始终坚守对品质的承诺，用每一件精心挑选的家居用品，陪伴千万家庭走过岁月。
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="温馨家居生活"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-amber-700 text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <div className="text-3xl font-bold" style={{ fontFamily: "'Noto Serif SC', serif" }}>15</div>
              <div className="text-xs text-amber-200 mt-0.5">年品质积累</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              id="about-subtitle"
              className="text-stone-600 leading-relaxed mb-6 text-base md:text-lg"
            >
              庆巷家居用品有限公司成立于2009年，坐落于美丽的江南水乡。我们深知，一个温馨的家，不仅仅是四面墙壁，更是家人之间爱与温情的流动。
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-base md:text-lg">
              多年来，我们走遍全国各地，精心甄选每一件家居用品，从柔软的床品到精致的厨具，从实用的收纳到雅致的装饰，只为让您的家更加美好、舒适。
            </p>
            <div className="flex flex-wrap gap-3">
              {['天然材质', '安全认证', '环保生产', '贴心售后'].map((tag) => (
                <span
                  key={tag}
                  className="bg-amber-50 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-amber-50 rounded-2xl p-7 border border-amber-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-lg font-bold text-stone-800 mb-3"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {v.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
