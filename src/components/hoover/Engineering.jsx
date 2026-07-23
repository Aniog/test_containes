import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'arch-gravity',
    titleId: 'eng-title-arch',
    descId: 'eng-desc-arch',
    imgId: 'eng-img-arch-hd003',
    title: '拱形重力坝设计',
    desc: '胡佛大坝采用拱形重力坝结构，将水压力同时通过拱形传递至两侧峡谷岩壁，并通过自身重力传递至坝基。坝底厚度达201米，坝顶仅14米，这种楔形设计极大提高了结构效率。',
    icon: '🏗️',
  },
  {
    id: 'concrete',
    titleId: 'eng-title-concrete',
    descId: 'eng-desc-concrete',
    imgId: 'eng-img-concrete-hd004',
    title: '混凝土冷却系统',
    desc: '大坝共使用约340万立方米混凝土。为防止水化热导致混凝土开裂，工程师在浇筑块中预埋了超过1000公里的冷却水管，这一创新技术至今仍被大型混凝土工程广泛采用。',
    icon: '🌡️',
  },
  {
    id: 'power',
    titleId: 'eng-title-power',
    descId: 'eng-desc-power',
    imgId: 'eng-img-power-hd005',
    title: '水力发电系统',
    desc: '大坝内安装了17台发电机组，总装机容量达2080兆瓦。水流从坝顶落差221米驱动涡轮机，产生的电力通过高压输电线路输送至加利福尼亚、内华达和亚利桑那三州。',
    icon: '⚡',
  },
  {
    id: 'artdeco',
    titleId: 'eng-title-artdeco',
    descId: 'eng-desc-artdeco',
    imgId: 'eng-img-artdeco-hd006',
    title: 'Art Deco 建筑风格',
    desc: '胡佛大坝不仅是工程奇迹，更是建筑艺术的杰作。建筑师戈登·考夫曼将Art Deco风格融入大坝设计，包括装饰性的塔楼、几何图案的地板马赛克以及优雅的线条，使其成为功能与美学的完美结合。',
    icon: '🎨',
  },
];

export default function Engineering() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="engineering" ref={containerRef} className="bg-darkSlate py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-accentGold text-sm uppercase tracking-[0.3em] mb-3 font-sans">工程奇迹</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-warmWhite mb-4">
            超越时代的技术创新
          </h2>
          <p className="text-mutedBlue max-w-xl mx-auto">
            胡佛大坝的建设汇聚了当时最先进的工程技术，许多创新至今仍影响着现代土木工程
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="bg-navyBlack border border-steelBorder rounded-xl overflow-hidden hover:border-accentGold/40 transition-colors group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{feat.icon}</span>
                  <h3 id={feat.titleId} className="font-serif text-accentGold text-lg font-semibold">
                    {feat.title}
                  </h3>
                </div>
                <p id={feat.descId} className="text-mutedBlue text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
