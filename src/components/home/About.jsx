import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const highlights = [
  '精选全球优质木材，严格把控原料品质',
  '传承百年榫卯工艺，无钉无胶纯手工',
  '每件产品均附质量保证书，终身维修',
  '支持定制尺寸与颜色，满足个性需求',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="bg-[#fefcf8] py-24 lg:py-32 px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                alt="木语家居工坊"
                data-strk-img-id="about-main-img-p7q8r9"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-[#8b5e3c] rounded-2xl p-6 lg:p-8 text-[#fefcf8] shadow-xl">
              <p className="font-serif text-4xl lg:text-5xl font-bold mb-1">20</p>
              <p className="text-[#e8d5b7] text-sm font-medium">年匠心传承</p>
            </div>
          </div>

          <div>
            <p className="text-[#8b5e3c] text-sm font-medium tracking-[0.25em] uppercase mb-4">
              品牌故事
            </p>
            <h2 id="about-title" className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d2314] mb-6 leading-tight">
              二十年，只做
              <br />
              <span className="text-[#8b5e3c]">一件好家具</span>
            </h2>
            <p id="about-desc" className="text-[#5c3d2e] text-lg leading-relaxed mb-6">
              2004年，创始人李木匠在苏州古城开设了第一间工坊。他相信，真正好的家具不需要华丽的装饰，
              只需要对木材的深刻理解和对工艺的极致追求。
            </p>
            <p className="text-[#5c3d2e] leading-relaxed mb-8">
              二十年来，我们坚持使用天然原木，坚守传统榫卯工艺，每一件家具都凝聚着工匠的心血与智慧。
              我们不追求产量，只追求每一件作品都能成为传家之宝。
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4a7c59] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5c3d2e]">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#5c3d2e] text-[#fefcf8] rounded-full px-8 py-3.5 font-semibold hover:bg-[#3d2314] transition-colors duration-200 shadow-md"
            >
              预约参观工坊
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
