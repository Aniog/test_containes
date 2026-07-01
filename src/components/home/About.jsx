import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle } from 'lucide-react';

const highlights = [
  '超过10年的行业经验',
  '专业团队，用心服务',
  '严格的品质把控流程',
  '持续创新，引领潮流',
  '环保理念，可持续发展',
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full bg-pink-200 rounded-3xl opacity-30" />
          <img
            data-strk-img-id="about-main-img-p7q8r9"
            data-strk-img="[about-subtitle] [about-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="About us"
            className="relative w-full rounded-3xl shadow-xl shadow-pink-200 object-cover"
          />
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg shadow-pink-100 p-5 max-w-xs">
            <p className="text-3xl font-bold text-pink-500 mb-1">10+</p>
            <p className="text-sm text-gray-500">年行业经验，值得信赖</p>
          </div>
        </div>

        {/* Text Side */}
        <div className="flex flex-col gap-6">
          <span className="inline-block bg-pink-100 text-pink-600 rounded-full px-4 py-1.5 text-sm font-semibold w-fit">
            关于我们
          </span>
          <h2 id="about-title" className="text-4xl font-bold text-gray-800 leading-tight">
            用热爱与专注<br />
            <span className="text-pink-500">打造美好生活</span>
          </h2>
          <p id="about-subtitle" className="text-gray-500 text-lg leading-relaxed">
            Blossom 成立于2014年，我们始终相信美丽是每个人与生俱来的权利。
            十年来，我们不断探索、创新，将最好的产品与服务带给每一位用户。
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-3.5 font-semibold shadow-lg shadow-pink-200 transition-all duration-200 hover:scale-105 w-fit mt-2"
          >
            与我们合作
          </a>
        </div>
      </div>
    </section>
  );
}
