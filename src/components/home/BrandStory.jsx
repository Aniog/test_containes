import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Leaf, Heart, Award } from 'lucide-react';

const values = [
  {
    icon: <Leaf className="text-[#7A9E7E]" size={28} />,
    title: '天然材质',
    desc: '严选竹木、棉麻、陶瓷等天然原料，每一件产品都散发着大自然的温润气息。',
  },
  {
    icon: <Heart className="text-[#8B6F47]" size={28} />,
    title: '用心设计',
    desc: '融合东方传统美学与现代简约风格，让家居用品成为生活中的艺术品。',
  },
  {
    icon: <Award className="text-[#5C3D1E]" size={28} />,
    title: '品质保证',
    desc: '每件产品经过严格质检，十年品牌积淀，只为给您最放心的家居体验。',
  },
];

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="py-20 md:py-28 bg-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="罗克岚品牌故事"
                className="w-full h-full object-cover"
                data-strk-img-id="story-img-d4e5f6"
                data-strk-img="[story-desc] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#8B6F47] text-white rounded-2xl p-5 shadow-lg hidden md:block">
              <p className="font-serif-sc font-bold text-3xl leading-none">10+</p>
              <p className="text-sm mt-1 text-[#F5F0E8]">年品牌积淀</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#8B6F47] text-sm tracking-widest uppercase mb-3 font-medium">品牌故事</p>
            <h2
              id="story-title"
              className="font-serif-sc font-bold text-[#5C3D1E] text-3xl md:text-4xl leading-snug mb-5"
            >
              源于对家的热爱，<br />成就每一件温暖
            </h2>
            <p
              id="story-desc"
              className="text-[#7A6552] text-base leading-relaxed mb-6"
            >
              2014年，罗克岚由一群热爱生活的设计师与工匠共同创立。我们相信，家不只是居住的地方，更是心灵的港湾。
              每一件家居用品，都承载着我们对美好生活的理解与追求。
            </p>
            <p className="text-[#7A6552] text-base leading-relaxed mb-8">
              从选材到设计，从工艺到包装，我们坚持以匠心精神打磨每一个细节。
              十年来，我们服务了超过50万个家庭，用温暖的产品陪伴他们的日常生活。
            </p>

            {/* Values */}
            <div className="flex flex-col gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[#5C3D1E] mb-1">{v.title}</p>
                    <p className="text-[#7A6552] text-sm leading-relaxed">{v.desc}</p>
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
