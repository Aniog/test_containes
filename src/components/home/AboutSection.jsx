import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  '超过200个成功交付的项目',
  '8年以上的行业深耕经验',
  '专注于高端品牌与创意设计',
  '全球50+合作客户信赖之选',
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#0d0d0d] py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900">
              <img
                alt="关于我们的工作室"
                data-strk-img-id="about-studio-img-4b9e1f"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-black border border-neutral-800 rounded-2xl p-6 shadow-2xl">
              <div className="text-3xl font-black text-[#c8a96e]">8+</div>
              <div className="text-sm text-neutral-400 mt-1">年行业经验</div>
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #c8a96e 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
            />
          </div>

          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                关于我们
              </span>
            </div>

            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              我们是一支
              <span className="text-[#c8a96e]"> 充满激情</span>
              <br />的创意团队
            </h2>

            <p id="about-desc" className="text-neutral-400 leading-relaxed mb-8">
              NOIR 工作室成立于2016年，是一家专注于高端数字体验设计的创意机构。
              我们相信，卓越的设计不仅仅是视觉上的美感，更是品牌与用户之间深层次的情感连接。
            </p>

            <p className="text-neutral-400 leading-relaxed mb-10">
              我们的团队由来自世界各地的设计师、开发者和策略师组成，
              每一位成员都在各自领域拥有丰富的经验与独特的视角。
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#c8a96e] flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
