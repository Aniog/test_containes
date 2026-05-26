import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Heart, Leaf, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '用心选品',
    desc: '每一件产品都经过我们团队的亲身体验与严格筛选，只有真正打动我们的好物，才会出现在您面前。',
  },
  {
    icon: Leaf,
    title: '自然环保',
    desc: '坚持使用天然、可持续材料，减少对环境的影响，让美好生活与绿色地球并行。',
  },
  {
    icon: Award,
    title: '品质保证',
    desc: '与全球顶级供应商合作，每件产品均通过质量检测，为您提供经得起时间考验的家居好物。',
  },
  {
    icon: Users,
    title: '家的温度',
    desc: '我们相信，家不只是一个空间，更是情感的港湾。我们的每件产品，都承载着对家的深深热爱。',
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Top: Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                alt="由妮可家居品牌故事"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-s1t2u3"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#8B6F47] text-white rounded-2xl p-5 shadow-xl max-w-[180px]">
              <div className="text-3xl font-bold" style={{ fontFamily: "'Noto Serif SC', serif" }}>8年</div>
              <div className="text-sm text-white/80 mt-1">专注家居品质生活</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-widest uppercase mb-3">
              品牌故事
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-5 leading-tight"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              从一个温暖的家，
              <br />
              到千万个幸福的家
            </h2>
            <p
              id="about-subtitle"
              className="text-[#6B5B4E] leading-relaxed mb-4 text-base"
            >
              由妮可家居创立于2016年，源于创始人妮可对家的深深热爱。她相信，一个温馨的家，能给人带来最真实的幸福感。
            </p>
            <p className="text-[#6B5B4E] leading-relaxed mb-4 text-base">
              八年来，我们走遍世界各地，寻访最优质的家居工匠与品牌，将那些真正有温度的好物带回国内，让更多家庭感受到家的美好。
            </p>
            <p className="text-[#6B5B4E] leading-relaxed mb-8 text-base">
              如今，超过一万个家庭选择了由妮可，我们的故事还在继续，因为每一个家，都值得被温柔对待。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#8B6F47] text-white rounded-full px-8 py-3 font-medium hover:bg-[#6B5035] transition-colors"
            >
              <Heart className="w-4 h-4" />
              加入我们的大家庭
            </a>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <div className="text-center mb-12">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#2C1810]"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              我们的承诺
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#FAF7F2] rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center mb-4 group-hover:bg-[#8B6F47] transition-colors">
                  <v.icon className="w-6 h-6 text-[#8B6F47] group-hover:text-white transition-colors" />
                </div>
                <h4
                  className="text-lg font-bold text-[#2C1810] mb-2"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {v.title}
                </h4>
                <p className="text-sm text-[#6B5B4E] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
