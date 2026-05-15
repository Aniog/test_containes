import { useState } from 'react';
import { ArrowRight, Activity, Eye, Syringe, Stethoscope } from 'lucide-react';

const categories = ['全部', '监护设备', '影像诊断', '手术器械', '检验设备'];

const products = [
  {
    id: 1,
    category: '监护设备',
    name: 'HK-M800 多参数监护仪',
    description: '支持心电、血氧、血压、体温等12项参数同步监测，配备10.1寸高清触摸屏，适用于ICU及普通病房。',
    badge: '热销',
    badgeColor: 'bg-rose-100 text-rose-600',
    icon: Activity,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    specs: ['12项参数监测', '10.1寸触摸屏', '72小时数据存储'],
  },
  {
    id: 2,
    category: '影像诊断',
    name: 'HK-U500 彩色超声诊断仪',
    description: '采用先进的宽频探头技术，提供高分辨率实时成像，支持多种成像模式，适用于腹部、心脏等多部位检查。',
    badge: '新品',
    badgeColor: 'bg-green-100 text-green-600',
    icon: Eye,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    specs: ['宽频探头技术', '多模式成像', 'AI 辅助诊断'],
  },
  {
    id: 3,
    category: '手术器械',
    name: 'HK-E300 高频电外科系统',
    description: '精准控制输出功率，支持切割、凝血、混合等多种工作模式，配备智能组织识别功能，提升手术安全性。',
    badge: '推荐',
    badgeColor: 'bg-amber-100 text-amber-600',
    icon: Syringe,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    specs: ['智能组织识别', '多工作模式', '精准功率控制'],
  },
  {
    id: 4,
    category: '检验设备',
    name: 'HK-L200 全自动血液分析仪',
    description: '每小时可处理200个样本，提供CBC+DIFF五分类检测，配备自动复检功能，适用于各级医疗机构检验科。',
    badge: '热销',
    badgeColor: 'bg-rose-100 text-rose-600',
    icon: Stethoscope,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    specs: ['200样本/小时', '五分类检测', '自动复检功能'],
  },
  {
    id: 5,
    category: '监护设备',
    name: 'HK-P100 便携式心电监护仪',
    description: '轻巧便携设计，支持12导联心电图采集，内置蓝牙传输，可与移动端 APP 实时同步，适用于急救转运场景。',
    badge: '新品',
    badgeColor: 'bg-green-100 text-green-600',
    icon: Activity,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    specs: ['12导联心电图', '蓝牙无线传输', '移动端同步'],
  },
  {
    id: 6,
    category: '影像诊断',
    name: 'HK-X600 数字化X射线系统',
    description: '采用平板探测器技术，低剂量高清成像，支持DICOM标准，可无缝接入医院HIS/PACS系统。',
    badge: '推荐',
    badgeColor: 'bg-amber-100 text-amber-600',
    icon: Eye,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    specs: ['平板探测器', 'DICOM 标准', 'HIS/PACS 接入'],
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filtered = activeCategory === '全部'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            产品展示
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            核心产品系列
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            覆盖临床诊疗全流程，为医疗机构提供专业可靠的器械解决方案
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(({ id, name, description, badge, badgeColor, icon: Icon, iconBg, iconColor, specs, category }) => (
            <div
              key={id}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Top */}
              <div className="bg-slate-50 p-8 flex items-center justify-center relative">
                <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center`}>
                  <Icon className={`w-10 h-10 ${iconColor}`} />
                </div>
                <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${badgeColor}`}>
                  {badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-xs text-blue-600 font-semibold mb-1">{category}</p>
                <h3 className="text-base font-bold text-slate-900 mb-3">{name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {specs.map((spec) => (
                    <span key={spec} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
                >
                  了解详情 <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
