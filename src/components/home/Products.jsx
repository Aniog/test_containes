import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = ['全部', '输配电设备', '变电站系统', '新能源并网', '智能运维'];

const products = [
  {
    category: '输配电设备',
    name: '高压真空断路器',
    model: 'WSD-VCB 12kV/40.5kV',
    desc: '采用真空灭弧技术，适用于10kV～35kV配电系统，具备免维护、长寿命、操作可靠等特点，满足IEC 62271标准。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tags: ['IEC认证', '免维护', '智能控制'],
  },
  {
    category: '输配电设备',
    name: '气体绝缘金属封闭开关设备',
    model: 'WSD-GIS 110kV/220kV',
    desc: 'SF₆气体绝缘，结构紧凑，占地面积仅为传统AIS的1/5，适用于城市核心变电站及地下变电站建设。',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    tags: ['SF₆绝缘', '紧凑型', '城市变电'],
  },
  {
    category: '变电站系统',
    name: '预装式变电站（箱变）',
    model: 'WSD-YBW 10kV/0.4kV',
    desc: '工厂预制、现场快速安装，集高压开关、变压器、低压配电于一体，广泛应用于工业园区、市政工程及风电场。',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    tags: ['快速部署', '一体化', '工业级'],
  },
  {
    category: '新能源并网',
    name: '光伏并网逆变器及升压系统',
    model: 'WSD-PV 1MW/5MW',
    desc: '支持大型地面光伏电站及分布式屋顶系统，具备低电压穿越、孤岛保护、MPPT优化等功能，并网效率≥98.5%。',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    tags: ['MPPT优化', '低压穿越', '高效并网'],
  },
  {
    category: '新能源并网',
    name: '风电场集电线路系统',
    model: 'WSD-WF 35kV集电',
    desc: '为陆上及海上风电场提供35kV集电线路整体解决方案，包含电缆选型、保护配置及SCADA接口设计。',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
    tags: ['海上风电', '集电系统', 'SCADA集成'],
  },
  {
    category: '智能运维',
    name: '变电站综合自动化系统',
    model: 'WSD-SAS 智能版',
    desc: '基于IEC 61850标准，实现保护、测量、控制、通信一体化，支持远程运维与大数据分析，降低运维成本40%以上。',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    tags: ['IEC 61850', '远程运维', '大数据'],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filtered = activeCategory === '全部'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            产品与服务
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            全系列电力装备解决方案
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            覆盖输配电、变电站、新能源并网及智能运维全产业链，为客户提供从设计到交付的一站式服务。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-lg backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-slate-400 font-mono mb-1">{product.model}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{product.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium group/btn">
                  了解详情
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
