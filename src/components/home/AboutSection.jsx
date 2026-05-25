import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Heart, Leaf, Award } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-6 h-6 text-[#C4714A]" />,
    title: '用心制造',
    desc: '每一件产品都凝聚着我们对家的热爱，严格把控每道工序，只为呈现最好的品质。',
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#C4714A]" />,
    title: '天然材质',
    desc: '精选天然环保材料，无有害添加，让您和家人在安心的环境中享受生活。',
  },
  {
    icon: <Award className="w-6 h-6 text-[#C4714A]" />,
    title: '品质保证',
    desc: '十年匠心积累，每件产品均通过严格质检，为您的家居生活提供可靠保障。',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                alt="温馨家居生活场景"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#8B6F47] text-white rounded-2xl p-4 md:p-6 shadow-xl">
              <div className="text-3xl md:text-4xl font-serif font-bold">10+</div>
              <div className="text-xs md:text-sm opacity-90 mt-1">年匠心品质</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="pt-8 lg:pt-0">
            <p className="text-[#C4714A] text-sm font-medium tracking-widest uppercase mb-3">关于维纯</p>
            <h2 id="about-title" className="text-3xl md:text-4xl font-serif font-bold text-[#2C1810] mb-6 leading-tight">
              家，是最温暖的<br />港湾
            </h2>
            <p id="about-desc" className="text-[#6B5B4E] text-base md:text-lg leading-relaxed mb-8">
              维纯家居用品有限公司成立于2014年，始终秉承"让家更美好"的品牌理念。
              我们深知，家不仅仅是一个居住的空间，更是承载着无数温馨记忆与美好时光的地方。
              因此，我们将每一件产品都视为家庭幸福的一部分，用心设计，精心制造。
            </p>

            <div className="flex flex-col gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F5F0E8] rounded-xl flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">{v.title}</h3>
                    <p className="text-[#6B5B4E] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
