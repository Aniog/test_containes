import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  '100% 天然植物成分，无添加有害化学物质',
  '皮肤科医生测试认证，安全可靠',
  '环保包装，关爱地球与未来',
  '适合所有肤质，包括敏感肌肤',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-pink-200 aspect-[4/5]">
            <img
              data-strk-img-id="about-main-img-v4w5x6"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="关于我们"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-pink-100 max-w-[180px]">
            <p className="text-3xl font-extrabold text-pink-500">5+</p>
            <p className="text-sm text-gray-600 font-medium">年专业护肤经验</p>
          </div>
        </div>

        {/* Text Side */}
        <div className="flex flex-col gap-6">
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
            关于我们
          </span>
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight"
          >
            用心呵护，<span className="text-pink-500">绽放美丽</span>
          </h2>
          <p
            id="about-subtitle"
            className="text-gray-500 text-base leading-relaxed"
          >
            Blossom 成立于2019年，我们相信每一位女性都值得拥有最好的护肤体验。
            我们的团队由专业皮肤科医生和美容专家组成，致力于研发最有效、最安全的护肤产品。
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            我们的每一款产品都经过严格的临床测试，确保安全有效。我们坚持使用天然成分，
            拒绝有害化学物质，让你的肌肤在最自然的状态下焕发光彩。
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-3 mt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-7 py-3 rounded-full transition-all shadow-lg shadow-pink-200 w-fit mt-2"
          >
            联系我们
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
