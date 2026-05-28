import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Settings, Cpu, Wrench, BarChart3 } from 'lucide-react';

const services = [
  {
    id: 'svc-1',
    icon: Settings,
    title: '精密零部件加工',
    subtitle: '高精度 · 高效率 · 高可靠',
    desc: '依托五轴联动加工中心及精密数控设备，提供航空航天、汽车发动机、液压系统等领域关键零部件的精密加工服务，公差精度可达±0.002mm。',
    tags: ['五轴联动', 'CNC精密加工', '特种材料'],
    imgId: 'svc-img-1a2b3c',
    imgQuery: '[svc-subtitle-1] [svc-title-1]',
  },
  {
    id: 'svc-2',
    icon: Cpu,
    title: '智能装备制造',
    subtitle: '自动化 · 数字化 · 智能化',
    desc: '面向工业4.0需求，研发制造自动化生产线、智能检测设备及工业机器人配套装置，助力客户实现生产过程的数字化升级与降本增效。',
    tags: ['工业机器人', '自动化产线', '智能检测'],
    imgId: 'svc-img-4d5e6f',
    imgQuery: '[svc-subtitle-2] [svc-title-2]',
  },
  {
    id: 'svc-3',
    icon: Wrench,
    title: '模具设计与制造',
    subtitle: '精准设计 · 快速交付 · 长寿命',
    desc: '提供冲压模具、注塑模具、压铸模具的全流程设计与制造服务，采用CAD/CAE/CAM一体化技术，模具寿命可达500万次以上。',
    tags: ['冲压模具', '注塑模具', 'CAD/CAM'],
    imgId: 'svc-img-7g8h9i',
    imgQuery: '[svc-subtitle-3] [svc-title-3]',
  },
  {
    id: 'svc-4',
    icon: BarChart3,
    title: '系统集成与技术服务',
    subtitle: '全周期 · 专业化 · 响应快',
    desc: '提供从工艺规划、设备选型、安装调试到运维保障的全生命周期技术服务，配备专业工程师团队，7×24小时响应客户需求。',
    tags: ['工艺规划', '安装调试', '运维保障'],
    imgId: 'svc-img-j1k2l3',
    imgQuery: '[svc-subtitle-4] [svc-title-4]',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#E87722] text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            核心业务
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: 'Noto Serif SC, serif' }}>
            全方位精密制造解决方案
          </h2>
          <div className="w-16 h-1 bg-[#E87722] mx-auto mb-6" />
          <p className="text-[#4A5568] max-w-2xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            威达机械以精密加工为核心，延伸至智能装备、模具制造及系统集成，
            构建覆盖制造全链条的综合服务体系。
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="group bg-white border border-[#E2E8F0] hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={svc.imgId}
                    data-strk-img={svc.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#E87722] flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div id={`svc-subtitle-${idx + 1}`} className="text-[#E87722] text-xs font-semibold tracking-widest mb-2" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                    {svc.subtitle}
                  </div>
                  <h3 id={`svc-title-${idx + 1}`} className="text-xl font-bold text-[#0A1628] mb-3" style={{ fontFamily: 'Noto Serif SC, serif' }}>
                    {svc.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-5" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                    {svc.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#F8F9FB] text-[#1A3A6B] text-xs px-3 py-1 font-medium border border-[#E2E8F0]"
                        style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
