import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  '超过 5 年的行业深耕经验',
  '服务全球 50+ 国家和地区',
  '荣获多项国际技术创新奖项',
  '持续迭代，每月发布新功能',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                alt="关于我们"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-blue-200 text-sm mt-1">年行业经验</div>
            </div>
          </div>

          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              关于我们
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-5 leading-tight"
            >
              我们致力于打造
              <span className="text-blue-700"> 卓越的数字体验</span>
            </h2>
            <p
              id="about-desc"
              className="text-slate-500 text-lg leading-relaxed mb-8"
            >
              BlueSpark 成立于 2019 年，是一家专注于数字化转型的科技公司。我们汇聚了来自全球顶尖高校和企业的精英人才，以技术创新为驱动，为客户提供从战略规划到落地实施的全链路服务。
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-full transition"
            >
              与我们合作
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
