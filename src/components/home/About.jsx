import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  '由环保专家和科学家组成的专业团队',
  '与全球500+可持续发展组织合作',
  '荣获国际绿色认证与多项环保大奖',
  '透明的碳足迹追踪与公开报告机制',
  '社区驱动的本地化绿色行动项目',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="关于我们 - 绿色自然环境"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-900 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-extrabold text-emerald-400">10年+</div>
              <div className="text-green-300 text-sm mt-1">绿色实践经验</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              关于我们
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight mb-4"
            >
              我们是绿色未来的<br />
              <span className="text-emerald-600">坚定守护者</span>
            </h2>
            <p
              id="about-subtitle"
              className="text-green-700 text-lg leading-relaxed mb-8"
            >
              GreenLife 成立于2014年，由一群热爱自然、致力于可持续发展的环保人士创立。
              我们相信，每一个小小的绿色行动，都能汇聚成改变世界的巨大力量。
              通过科技创新与社区合作，我们正在构建一个更加绿色、健康的地球家园。
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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
