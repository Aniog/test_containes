import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'p1',
    titleId: 'prod-title-1',
    descId: 'prod-desc-1',
    title: '高压开关柜',
    desc: '额定电压3.6kV～40.5kV，采用全封闭铠装结构，具备完善的"五防"联锁功能，适用于发电厂、变电站及工矿企业配电系统。',
    tag: '核心产品',
    imgId: 'prod-img-1-a7b8c9',
    imgQuery: '[prod-desc-1] [prod-title-1] high voltage switchgear cabinet',
  },
  {
    id: 'p2',
    titleId: 'prod-title-2',
    descId: 'prod-desc-2',
    title: '智能变压器',
    desc: '涵盖油浸式、干式及非晶合金变压器，容量范围30kVA～63,000kVA，损耗指标达国家能效一级标准，支持远程监控与智能诊断。',
    tag: '节能高效',
    imgId: 'prod-img-2-d1e2f3',
    imgQuery: '[prod-desc-2] [prod-title-2] smart power transformer substation',
  },
  {
    id: 'p3',
    titleId: 'prod-title-3',
    descId: 'prod-desc-3',
    title: '配电自动化系统',
    desc: '集成馈线自动化、配电SCADA、故障定位与隔离恢复功能，实现配电网的可视化管理与智能调度，显著提升供电可靠性。',
    tag: '智能化',
    imgId: 'prod-img-3-g4h5i6',
    imgQuery: '[prod-desc-3] [prod-title-3] power distribution automation control system',
  },
  {
    id: 'p4',
    titleId: 'prod-title-4',
    descId: 'prod-desc-4',
    title: '新能源并网装备',
    desc: '专为光伏、风电等新能源发电场景设计，提供升压变压器、并网开关柜及无功补偿装置，满足新能源电站全套并网需求。',
    tag: '绿色能源',
    imgId: 'prod-img-4-j7k8l9',
    imgQuery: '[prod-desc-4] [prod-title-4] renewable energy solar wind power grid equipment',
  },
  {
    id: 'p5',
    titleId: 'prod-title-5',
    descId: 'prod-desc-5',
    title: '预装式变电站',
    desc: '将高压开关设备、变压器、低压配电装置集成于一体，工厂预制、现场快速安装，广泛应用于城市配网、工业园区及临时供电场合。',
    tag: '集成方案',
    imgId: 'prod-img-5-m1n2o3',
    imgQuery: '[prod-desc-5] [prod-title-5] prefabricated substation compact transformer',
  },
  {
    id: 'p6',
    titleId: 'prod-title-6',
    descId: 'prod-desc-6',
    title: '电力运维服务',
    desc: '提供设备安装调试、预防性试验、状态检修、技术培训及备品备件供应等全生命周期运维服务，保障电力系统长期稳定运行。',
    tag: '全周期服务',
    imgId: 'prod-img-6-p4q5r6',
    imgQuery: '[prod-desc-6] [prod-title-6] electrical power maintenance service engineer',
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  return (
    <section id="products" className="relative py-20 md:py-28" ref={containerRef}>
      {/* Background: high-voltage power grid / transmission lines */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="products-bg-b2c3d4"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand-gray/95" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            产品与方案
          </span>
          <h2
            id="products-title"
            className="text-3xl md:text-4xl font-bold text-brand-text mb-4"
          >
            全系列电力装备，覆盖全场景需求
          </h2>
          <p className="text-brand-muted text-base max-w-2xl mx-auto">
            从高压开关设备到智能配电系统，温思达为您提供从设计、制造到运维的一站式电力装备解决方案。
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-brand-blue/10">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={product.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold text-brand-text mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-brand-muted text-sm leading-relaxed mb-4"
                >
                  {product.desc}
                </p>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-1 text-brand-sky text-sm font-semibold hover:gap-2 transition-all duration-200"
                >
                  了解详情 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
