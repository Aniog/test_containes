import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'prod-1',
    category: '航空航天',
    title: '航空结构件',
    desc: '采用高强度铝合金及钛合金材料，通过五轴精密加工成型，满足 AS9100D 航空质量管理体系认证要求，广泛应用于飞机机身框架、发动机支架及起落架系统。',
  },
  {
    id: 'prod-2',
    category: '新能源汽车',
    title: '电驱系统壳体',
    desc: '为新能源汽车电机、减速器及电控单元提供高精度铝合金压铸壳体，集成水冷流道设计，散热效率提升 25%，满足 IATF 16949 汽车质量管理体系标准。',
  },
  {
    id: 'prod-3',
    category: '工业机器人',
    title: '机器人关节模组',
    desc: '精密加工机器人关节减速器壳体、谐波齿轮及输出法兰，齿形精度达 DIN 5 级，回差控制在 1 弧分以内，适配六轴工业机器人及协作机器人平台。',
  },
  {
    id: 'prod-4',
    category: '能源装备',
    title: '液压阀体组件',
    desc: '为液压系统提供高压阀体、泵体及缸筒等核心零部件，耐压等级达 35MPa，内孔粗糙度 Ra≤0.4μm，广泛应用于工程机械、海洋平台及风电变桨系统。',
  },
  {
    id: 'prod-5',
    category: '精密仪器',
    title: '光学精密底座',
    desc: '为激光设备、光谱仪及半导体检测设备提供超精密底座与调整机构，平面度优于 0.002mm，热稳定性卓越，满足纳米级精度测量与定位需求。',
  },
  {
    id: 'prod-6',
    category: '医疗器械',
    title: '医疗植入体零件',
    desc: '采用医用级钛合金（Ti-6Al-4V ELI）及钴铬合金，通过五轴精密加工与电化学抛光，满足 ISO 13485 医疗器械质量管理体系要求，表面粗糙度 Ra≤0.2μm。',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-20 lg:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#1E5FA8] text-xs font-semibold uppercase tracking-widest mb-4">
            产品中心
          </div>
          <h2 id="products-title" className="text-3xl lg:text-4xl font-bold text-[#1A2332] mb-4">
            覆盖多行业的精密产品矩阵
          </h2>
          <div className="w-12 h-1 bg-[#C8922A] mx-auto mb-6" />
          <p id="products-subtitle" className="text-[#8A9BB0] text-lg max-w-2xl mx-auto">
            深耕六大高端制造领域，以精密工艺与严苛品控，
            为全球客户提供可靠的核心零部件解决方案。
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ id, category, title, desc }) => (
            <div
              key={id}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`prod-img-${id}`}
                  data-strk-img={`[${id}-desc] [${id}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-[#1E5FA8]/10 text-[#1E5FA8] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {category}
                </span>
                <h3 id={id} className="text-[#1A2332] font-bold text-xl mb-3">{title}</h3>
                <p id={`${id}-desc`} className="text-[#8A9BB0] text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-[#1E5FA8] to-[#2E9CDB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
