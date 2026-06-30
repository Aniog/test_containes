import { Palette, Code2, Zap, Shield, Globe, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: '品牌设计',
    desc: '从零打造独特的品牌视觉体系，让您的品牌在市场中脱颖而出，留下深刻印象。',
    tag: 'Branding',
  },
  {
    icon: Code2,
    title: '网站开发',
    desc: '运用最新技术栈构建高性能、响应式网站，确保在所有设备上呈现完美体验。',
    tag: 'Development',
  },
  {
    icon: Zap,
    title: '动效设计',
    desc: '精心设计的动画与交互效果，为用户带来流畅自然的视觉享受与操作体验。',
    tag: 'Motion',
  },
  {
    icon: Globe,
    title: '数字营销',
    desc: '全渠道数字营销策略，精准触达目标受众，提升品牌曝光度与转化率。',
    tag: 'Marketing',
  },
  {
    icon: Shield,
    title: '安全防护',
    desc: '企业级安全解决方案，全方位保护您的数字资产与用户数据安全。',
    tag: 'Security',
  },
  {
    icon: BarChart3,
    title: '数据分析',
    desc: '深度数据洞察与可视化报告，帮助您做出更明智的商业决策。',
    tag: 'Analytics',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              我们的服务
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-lg">
              为您提供
              <span className="text-[#c8a96e]"> 全方位</span>
              <br />数字解决方案
            </h2>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              我们的专业团队涵盖设计、开发、营销等多个领域，
              为您的业务增长提供强有力的支撑。
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-[#c8a96e66] group-hover:bg-[#c8a96e11] transition-all duration-300">
                  <Icon size={20} className="text-[#c8a96e]" />
                </div>

                {/* Tag */}
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-3 block">
                  {service.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>

                {/* Hover line */}
                <div className="mt-6 h-px bg-neutral-800 group-hover:bg-[#c8a96e44] transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
