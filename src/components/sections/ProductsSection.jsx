import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'prod-1',
    title: '精密结构件',
    subtitle: '航空航天 · 国防装备',
    desc: '采用高强度铝合金、钛合金及特种钢材，通过五轴联动加工中心精密成型，尺寸公差可控制在 ±0.005mm 以内，满足航空航天及国防装备的严苛要求。',
    specs: ['材质：7075 铝合金 / TC4 钛合金', '公差：±0.005mm', '表面粗糙度：Ra 0.4'],
    imgId: 'prod-img-1a2b3c',
    imgQuery: '[prod-1-subtitle] [prod-1-title]',
  },
  {
    id: 'prod-2',
    title: '液压传动元件',
    subtitle: '工程机械 · 能源装备',
    desc: '专业生产液压缸体、活塞杆、阀块等核心液压元件，采用高精度内孔珩磨工艺，确保密封性能与耐压强度，工作压力可达 35MPa，广泛应用于工程机械与能源装备领域。',
    specs: ['工作压力：≤35MPa', '内孔精度：H7', '表面处理：硬铬镀层'],
    imgId: 'prod-img-4d5e6f',
    imgQuery: '[prod-2-subtitle] [prod-2-title]',
  },
  {
    id: 'prod-3',
    title: '精密齿轮传动系统',
    subtitle: '汽车制造 · 工业机器人',
    desc: '依据 DIN 3962 标准设计制造，涵盖直齿轮、斜齿轮、锥齿轮及行星齿轮系，精度等级达 ISO 5 级，经渗碳淬火处理后硬度 HRC 58-62，传动效率高达 98% 以上。',
    specs: ['精度等级：ISO 5 级', '硬度：HRC 58-62', '传动效率：≥98%'],
    imgId: 'prod-img-7g8h9i',
    imgQuery: '[prod-3-subtitle] [prod-3-title]',
  },
  {
    id: 'prod-4',
    title: '自动化装配模组',
    subtitle: '智能制造 · 电子设备',
    desc: '集成精密导轨、滚珠丝杠、伺服驱动及视觉检测系统，提供完整的自动化运动控制解决方案，重复定位精度 ±0.002mm，适用于半导体、电子及精密仪器装配场景。',
    specs: ['重复定位精度：±0.002mm', '最大行程：1200mm', '驱动方式：伺服电机'],
    imgId: 'prod-img-j1k2l3',
    imgQuery: '[prod-4-subtitle] [prod-4-title]',
  },
  {
    id: 'prod-5',
    title: '高压密封组件',
    subtitle: '石油化工 · 核电装备',
    desc: '针对极端工况设计，采用特种合金钢与高性能密封材料，经严格压力测试与无损检测，可在 -196°C 至 +650°C 温度范围及 100MPa 高压环境下稳定运行。',
    specs: ['工作温度：-196°C ~ +650°C', '耐压：≤100MPa', '检测：100% 无损检测'],
    imgId: 'prod-img-m4n5o6',
    imgQuery: '[prod-5-subtitle] [prod-5-title]',
  },
  {
    id: 'prod-6',
    title: '定制化机械总成',
    subtitle: '全行业 · 非标定制',
    desc: '根据客户图纸或技术要求，提供从设计优化、样件试制到批量生产的一站式服务。配备专业 DFM 团队，协助客户在保证性能的前提下优化制造成本，缩短交货周期。',
    specs: ['服务：DFM 设计优化', '交期：样件 7-15 天', '批量：1 件起订'],
    imgId: 'prod-img-p7q8r9',
    imgQuery: '[prod-6-subtitle] [prod-6-title]',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 bg-[#F4F6F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0D2137] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            产品中心
          </h2>
          <div className="w-16 h-1 bg-[#D4820A] mx-auto mb-6" />
          <p className="text-[#4A5568] text-lg max-w-2xl mx-auto leading-relaxed">
            覆盖航空航天、汽车、能源、工业自动化等多个领域，提供从单件定制到批量交付的全系列精密机械产品
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md border border-[#CBD5E0] overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={product.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span id={product.id + '-title'} className="hidden">{product.title}</span>
                <span id={product.id + '-subtitle'} className="hidden">{product.subtitle}</span>
                <div className="absolute top-3 left-3 bg-[#0D2137]/80 text-[#D4820A] text-xs font-semibold px-3 py-1 rounded-full">
                  {product.subtitle}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-[#0D2137] font-bold text-lg mb-2"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {product.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{product.desc}</p>

                {/* Specs */}
                <ul className="space-y-1 mb-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-[#4A5568]">
                      <span className="w-1.5 h-1.5 bg-[#D4820A] rounded-full flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-1 text-[#D4820A] text-sm font-semibold hover:gap-2 transition-all"
                >
                  咨询报价 <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
