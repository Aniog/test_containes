import { CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  '超过10年的行业深耕经验',
  '专业团队，精益求精',
  '定制化方案，满足独特需求',
  '持续迭代，与您共同成长',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#A8DADC] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              data-strk-img-id="about-img-d4e5f6"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="About us"
              className="w-full h-72 object-cover"
            />
          </div>
          {/* Accent card */}
          <div className="absolute -top-4 -right-4 bg-[#E63946] text-[#F1FAEE] rounded-2xl px-6 py-4 shadow-xl">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-xs text-red-200 mt-1">年行业经验</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="inline-block text-[#E63946] text-sm font-semibold uppercase tracking-widest mb-3">
            关于我们
          </span>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-5 leading-tight"
          >
            专注创新，驱动增长
          </h2>
          <p
            id="about-desc"
            className="text-[#1D3557] text-base leading-relaxed mb-8"
          >
            我们是一支充满激情的专业团队，致力于通过技术创新帮助企业实现数字化转型。
            多年来，我们服务了数百家企业，积累了丰富的行业经验和成功案例。
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                <span className="text-[#1D3557] text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 bg-[#1D3557] hover:bg-[#457B9D] text-[#F1FAEE] font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 shadow-md">
            了解更多
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
