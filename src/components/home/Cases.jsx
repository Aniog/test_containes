import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-ecommerce',
    titleId: 'case-ecommerce-title',
    descId: 'case-ecommerce-desc',
    imgId: 'case-img-ecommerce-g7h8i9',
    title: '电商平台重构',
    desc: '为某大型零售商重构电商平台，提升转化率 45%，用户留存率提高 30%。',
    tag: '电商',
    tagColor: 'bg-[#E63946] text-[#F1FAEE]',
  },
  {
    id: 'case-fintech',
    titleId: 'case-fintech-title',
    descId: 'case-fintech-desc',
    imgId: 'case-img-fintech-j1k2l3',
    title: '金融科技应用',
    desc: '开发智能投资分析工具，帮助用户实现资产增值，月活用户突破 100 万。',
    tag: '金融科技',
    tagColor: 'bg-[#1D3557] text-[#F1FAEE]',
  },
  {
    id: 'case-health',
    titleId: 'case-health-title',
    descId: 'case-health-desc',
    imgId: 'case-img-health-m4n5o6',
    title: '医疗健康平台',
    desc: '打造一站式医疗服务平台，连接医患双方，提升就医效率与体验。',
    tag: '医疗健康',
    tagColor: 'bg-[#E63946] text-[#F1FAEE]',
  },
];

const Cases = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#F1FAEE] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E63946] text-sm font-semibold uppercase tracking-widest mb-3">
            成功案例
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
            我们的精选项目
          </h2>
          <p className="text-[#457B9D] text-lg max-w-2xl mx-auto">
            每一个案例都是我们与客户共同创造的成功故事。
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-[#A8DADC] transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${item.tagColor}`}
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 id={item.titleId} className="text-[#1D3557] font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-[#457B9D] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
