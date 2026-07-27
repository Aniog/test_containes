import { useEffect, useRef } from 'react';
import { CheckCircle2, Award, Users, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  { icon: CheckCircle2, text: '通过 ISO 14001 环境管理认证' },
  { icon: CheckCircle2, text: '与全球 50+ 环保组织合作' },
  { icon: CheckCircle2, text: '累计植树超过 100 万棵' },
  { icon: CheckCircle2, text: '帮助减少 50,000 吨碳排放' },
];

const awards = [
  { icon: Award, title: '最佳环保品牌', year: '2024' },
  { icon: Globe, title: '全球可持续发展奖', year: '2023' },
  { icon: Users, title: '社区影响力奖', year: '2023' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                data-strk-img-id="about-main-img-v4w5x6"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="关于我们"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-forest text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-xs text-mint mt-1">年行业经验</div>
            </div>

            {/* Awards row */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {awards.map((award) => {
                const Icon = award.icon;
                return (
                  <div key={award.title} className="bg-pale rounded-xl p-3 text-center border border-mint">
                    <Icon className="w-5 h-5 text-emerald mx-auto mb-1" />
                    <div className="text-xs font-semibold text-dark leading-tight">{award.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{award.year}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald bg-mint px-4 py-1.5 rounded-full">
              关于我们
            </span>
            <h2 id="about-title" className="text-4xl font-bold text-forest mt-4 mb-5 leading-tight">
              我们是谁，
              <br />
              我们为何而来
            </h2>
            <p id="about-desc" className="text-gray-600 leading-relaxed mb-6">
              GreenLife 成立于 2019 年，是一家专注于可持续发展和环境保护的科技公司。我们相信，通过技术创新和社区力量，每个人都可以为地球的未来做出贡献。
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              我们的团队由来自环境科学、数据技术和社会创新领域的专家组成，致力于开发实用、易用的绿色生活工具，让可持续生活方式触手可及。
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-10 bg-forest text-white px-7 py-3.5 rounded-full font-semibold hover:bg-emerald transition-colors text-sm"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
