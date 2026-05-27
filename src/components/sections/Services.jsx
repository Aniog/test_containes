import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Settings, Cpu, Layers, Wrench } from 'lucide-react';

const services = [
  {
    icon: Settings,
    id: 'svc-1',
    title: '精密零部件加工',
    subtitle: 'Precision Parts Machining',
    desc: '运用五轴联动 CNC 加工中心，对铝合金、钛合金、不锈钢及工程塑料等材料进行高精度切削加工，公差控制达 ±0.003mm，满足航空航天及医疗器械等严苛行业标准。',
    tags: ['五轴联动', 'CNC 精密加工', '钛合金 / 铝合金'],
  },
  {
    icon: Cpu,
    id: 'svc-2',
    title: '模具设计与制造',
    subtitle: 'Mold Design & Manufacturing',
    desc: '提供注塑模、压铸模、冲压模的全流程设计与制造服务，采用 CAD/CAM/CAE 一体化仿真分析，缩短模具开发周期 30%，模具寿命超过 100 万次。',
    tags: ['注塑模 / 压铸模', 'CAD/CAM 仿真', '快速打样'],
  },
  {
    icon: Layers,
    id: 'svc-3',
    title: '表面处理与涂层',
    subtitle: 'Surface Treatment & Coating',
    desc: '提供阳极氧化、电镀、热喷涂、PVD 物理气相沉积等多种表面处理工艺，有效提升零件耐磨性、耐腐蚀性及使用寿命，满足不同工况下的功能性需求。',
    tags: ['阳极氧化', 'PVD 涂层', '热喷涂'],
  },
  {
    icon: Wrench,
    id: 'svc-4',
    title: '机械系统集成',
    subtitle: 'Mechanical System Integration',
    desc: '承接从单件零部件到完整机械子系统的集成装配业务，配备洁净装配车间与精密检测设备，提供装配调试、功能验证及出厂检测一站式服务。',
    tags: ['系统集成', '洁净装配', '功能验证'],
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4F6F9]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#1E5FA8] text-xs font-semibold uppercase tracking-widest mb-4">
            核心业务
          </div>
          <h2 id="services-title" className="text-3xl lg:text-4xl font-bold text-[#1A2332] mb-4">
            全链路制造服务能力
          </h2>
          <div className="w-12 h-1 bg-[#C8922A] mx-auto mb-6" />
          <p id="services-subtitle" className="text-[#8A9BB0] text-lg max-w-2xl mx-auto">
            从原材料采购、精密加工、表面处理到系统集成，
            罗科百道提供覆盖制造全价值链的专业服务。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, id, title, subtitle, desc, tags }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E5FA8] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#2E9CDB]" />
                </div>
                <div>
                  <h3 id={id} className="text-[#1A2332] font-bold text-xl mb-1">{title}</h3>
                  <div className="text-[#8A9BB0] text-xs uppercase tracking-widest">{subtitle}</div>
                </div>
              </div>

              {/* Service Image */}
              <div className="rounded-xl overflow-hidden mb-6 aspect-video">
                <img
                  alt={title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`svc-img-${id}`}
                  data-strk-img={`[${id}] [services-subtitle] [services-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <p className="text-[#1A2332] text-sm leading-relaxed mb-5">{desc}</p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#1E5FA8]/10 text-[#1E5FA8] text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
