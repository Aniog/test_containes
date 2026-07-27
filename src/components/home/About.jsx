import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  '由顶尖设计师与工程师共同打造',
  '超过 10,000 家企业信赖之选',
  '持续迭代，每月发布新功能',
  '7×24 小时专业技术支持',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-[#1a0a35]" ref={containerRef}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="absolute -inset-4 bg-purple-600/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden border border-purple-600/30 shadow-2xl shadow-purple-900/50">
            <img
              data-strk-img-id="about-main-img-3d8f1a"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="About Lumina"
              className="w-full h-auto"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-purple-700 border border-purple-500/50 rounded-2xl px-6 py-4 shadow-xl shadow-purple-900/60">
            <div className="text-3xl font-bold text-white">5年+</div>
            <div className="text-purple-300 text-sm">行业经验</div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">关于我们</span>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5"
          >
            用紫色点亮<br />
            <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">
              数字世界的未来
            </span>
          </h2>
          <p
            id="about-desc"
            className="text-violet-300 text-base leading-relaxed mb-8"
          >
            Lumina 成立于 2019 年，我们相信优秀的设计能够改变世界。
            我们的团队由来自全球顶尖科技公司的设计师和工程师组成，
            致力于为每一位用户提供最卓越的数字体验。
          </p>

          <ul className="space-y-3 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-purple-100">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-purple-900/50"
          >
            了解更多
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
