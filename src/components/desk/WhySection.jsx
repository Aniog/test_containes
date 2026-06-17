import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, Heart, Brain, Users } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: '提升工作效率',
    desc: '合适的办公桌能优化工作流程，减少不必要的移动，让你专注于核心任务，效率提升可达 30%。',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: '保护身体健康',
    desc: '不合适的桌子高度会导致颈椎、腰椎问题。选对尺寸与高度，从源头预防职业病。',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Brain,
    title: '改善专注力',
    desc: '整洁有序的桌面环境能减少视觉干扰，帮助大脑进入深度工作状态，提升创造力。',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: Users,
    title: '塑造专业形象',
    desc: '办公桌是职场形象的重要组成部分，整洁专业的工作区间接传递出你的工作态度与品味。',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

export default function WhySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="why" ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            重要性
          </span>
          <h2
            id="why-title"
            className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4"
          >
            为什么选对办公桌如此重要？
          </h2>
          <p
            id="why-subtitle"
            className="text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            一张合适的办公桌不仅仅是家具，它是你每天工作 8 小时以上的核心伙伴，直接影响健康、效率与心情。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex gap-5 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Office image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            data-strk-img-id="why-office-img-d4e5f6"
            data-strk-img="[why-subtitle] [why-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="现代化办公室环境"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
