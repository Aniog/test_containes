import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'prod-img-a1b2c3',
    name: '高清内窥镜系统',
    nameId: 'prod-name-1',
    category: '诊断设备',
    desc: '采用4K超高清成像技术，配备AI辅助诊断功能，为消化道、呼吸道等内镜检查提供清晰精准的影像支持。',
    descId: 'prod-desc-1',
    badge: '明星产品',
    badgeColor: 'bg-cyan-500',
  },
  {
    id: 'prod-img-b2c3d4',
    name: '多参数监护仪',
    nameId: 'prod-name-2',
    category: '监护设备',
    desc: '实时监测心电、血压、血氧、体温等多项生命体征，配备智能预警系统，适用于ICU及普通病房。',
    descId: 'prod-desc-2',
    badge: '热销',
    badgeColor: 'bg-emerald-500',
  },
  {
    id: 'prod-img-c3d4e5',
    name: '数字化X射线系统',
    nameId: 'prod-name-3',
    category: '影像设备',
    desc: '低剂量高分辨率数字X射线成像，支持DR/CR双模式，配备DICOM标准接口，无缝对接医院信息系统。',
    descId: 'prod-desc-3',
    badge: '新品',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'prod-img-d4e5f6',
    name: '超声诊断仪',
    nameId: 'prod-name-4',
    category: '超声设备',
    desc: '高频宽带探头技术，支持2D/3D/4D成像模式，适用于腹部、心脏、妇产科等多科室超声检查。',
    descId: 'prod-desc-4',
    badge: '推荐',
    badgeColor: 'bg-purple-500',
  },
  {
    id: 'prod-img-e5f6g7',
    name: '手术无影灯',
    nameId: 'prod-name-5',
    category: '手术设备',
    desc: '采用LED冷光源技术，色温可调，无影效果优异，使用寿命超过50000小时，满足各类手术照明需求。',
    descId: 'prod-desc-5',
    badge: '',
    badgeColor: '',
  },
  {
    id: 'prod-img-f6g7h8',
    name: '全自动生化分析仪',
    nameId: 'prod-name-6',
    category: '检验设备',
    desc: '每小时可处理800个测试项目，支持急诊优先模式，配备自动质控系统，确保检验结果的准确性与可靠性。',
    descId: 'prod-desc-6',
    badge: '',
    badgeColor: '',
  },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (strkImgConfig && Object.keys(strkImgConfig).length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">产品中心</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            专业医疗器械产品系列
          </h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            覆盖诊断、治疗、监护、检验等多个医疗领域，500余款产品型号，满足不同规模医疗机构的多样化需求。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative aspect-[3x2] overflow-hidden bg-slate-100">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.id}
                  data-strk-img={`[${product.descId}] [${product.nameId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-white/90 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <div className="p-6">
                <h3 id={product.nameId} className="text-lg font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-slate-500 text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-semibold text-sm group/link"
                >
                  了解详情
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            查看全部产品
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
