import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { FlaskConical, Settings, Globe, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    icon: FlaskConical,
    title: '自主研发实力',
    desc: '设立省级企业技术中心，拥有研发工程师逾200人，累计获得专利技术120余项，持续推动产品技术迭代升级。',
  },
  {
    icon: Settings,
    title: '精益制造体系',
    desc: '引进国际先进数控加工设备，建立全流程质量管控体系，关键工序100%检测，确保每台产品出厂品质。',
  },
  {
    icon: ShieldCheck,
    title: '严苛质量标准',
    desc: '产品严格执行GB、IEC国际标准，通过CCC、CE等多项认证，并在国家电力设备质量检测中心完成型式试验。',
  },
  {
    icon: Globe,
    title: '广泛市场覆盖',
    desc: '产品销售覆盖全国30余个省市，并出口至东南亚、中东、非洲等地区，服务客户超过3,000家。',
  },
  {
    icon: HeartHandshake,
    title: '全程技术服务',
    desc: '提供方案设计、安装调试、运行维护、技术培训等全生命周期服务，7×24小时响应客户需求。',
  },
  {
    icon: Leaf,
    title: '绿色低碳理念',
    desc: '积极布局新能源配电领域，产品节能指标达国家一级能效，助力客户实现碳达峰、碳中和目标。',
  },
];

export default function AdvantagesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="advantages" className="py-20 md:py-28 bg-brand-blue" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            核心优势
          </span>
          <h2
            id="adv-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            为何选择温思达
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto">
            二十年深耕电力装备行业，我们以技术、品质与服务构建核心竞争力，成为客户值得信赖的长期合作伙伴。
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-4" />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/40 rounded-xl p-8 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-orange/30 transition-colors">
                <Icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              需要定制化电力装备解决方案？
            </h3>
            <p className="text-white/60 text-sm">
              我们的技术团队将为您提供专业的需求分析与方案设计服务。
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 bg-brand-orange hover:bg-amber-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            立即咨询
          </button>
        </div>
      </div>
    </section>
  );
}
