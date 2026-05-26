import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '50万+', label: '服务家庭' },
  { value: '10年', label: '品牌积淀' },
  { value: '200+', label: '精选产品' },
  { value: '98%', label: '好评率' },
];

const lifestyleItems = [
  {
    id: 'ls1',
    title: '晨光里的厨房时光',
    desc: '一杯热茶，一缕阳光，罗克岚的厨房好物让每个清晨都充满仪式感。',
    imgId: 'lifestyle-img-a1b2c3',
    imgQuery: '[ls-desc-ls1] [ls-title-ls1]',
    size: 'large',
  },
  {
    id: 'ls2',
    title: '卧室里的温柔角落',
    desc: '柔软的棉麻床品，让疲惫的身心得到最温柔的抚慰。',
    imgId: 'lifestyle-img-d4e5f6',
    imgQuery: '[ls-desc-ls2] [ls-title-ls2]',
    size: 'small',
  },
  {
    id: 'ls3',
    title: '客厅的家人时光',
    desc: '精心布置的客厅，是家人相聚、分享故事的温暖舞台。',
    imgId: 'lifestyle-img-g7h8i9',
    imgQuery: '[ls-desc-ls3] [ls-title-ls3]',
    size: 'small',
  },
];

export default function Lifestyle() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="lifestyle" ref={containerRef} className="py-20 md:py-28 bg-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#8B6F47] text-sm tracking-widest uppercase mb-3 font-medium">生活理念</p>
          <h2 className="font-serif-sc font-bold text-[#5C3D1E] text-3xl md:text-4xl mb-4">
            家，是最美的风景
          </h2>
          <p className="text-[#7A6552] text-base max-w-xl mx-auto leading-relaxed">
            我们相信，美好的生活从家开始。用心布置每一个角落，让家成为你最想回去的地方。
          </p>
        </div>

        {/* Lifestyle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Large item */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={lifestyleItems[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={lifestyleItems[0].imgId}
                data-strk-img={lifestyleItems[0].imgQuery}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
              />
            </div>
            <span id="ls-title-ls1" className="hidden">{lifestyleItems[0].title}</span>
            <span id="ls-desc-ls1" className="hidden">{lifestyleItems[0].desc}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif-sc font-bold text-white text-xl mb-2">{lifestyleItems[0].title}</h3>
              <p className="text-[#F5F0E8]/90 text-sm leading-relaxed">{lifestyleItems[0].desc}</p>
            </div>
          </div>

          {/* Two small items */}
          <div className="flex flex-col gap-6">
            {lifestyleItems.slice(1).map((item) => (
              <div key={item.id} className="relative rounded-2xl overflow-hidden group cursor-pointer flex-1">
                <div className="aspect-[16/9]">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={item.imgId}
                    data-strk-img={item.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                  />
                </div>
                <span id={`ls-title-${item.id}`} className="hidden">{item.title}</span>
                <span id={`ls-desc-${item.id}`} className="hidden">{item.desc}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif-sc font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-[#F5F0E8]/90 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#E8DDD0]"
            >
              <p className="font-serif-sc font-bold text-[#8B6F47] text-3xl md:text-4xl mb-2">{stat.value}</p>
              <p className="text-[#7A6552] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
