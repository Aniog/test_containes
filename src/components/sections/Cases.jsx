import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    industry: '航空航天',
    title: '某型号航空发动机关键结构件精密加工',
    desc: '承接某航空发动机制造商涡轮盘、压气机叶片等核心结构件的精密加工任务，采用高温合金专用刀具路径优化技术，尺寸精度达IT5级，表面粗糙度Ra≤0.4μm。',
    result: '交付周期缩短25%，废品率降至0.3%以下',
    imgId: 'case-img-m4n5o6',
    imgQuery: '[case-subtitle-1] [case-title-1]',
  },
  {
    id: 'case-2',
    industry: '汽车制造',
    title: '新能源汽车电驱系统壳体自动化产线',
    desc: '为某新能源汽车头部企业设计并交付电驱动系统铝合金壳体柔性加工产线，集成机器人上下料、在线检测及MES数据采集，实现无人化连续生产。',
    result: '产线综合效率OEE达92%，人工成本降低60%',
    imgId: 'case-img-p7q8r9',
    imgQuery: '[case-subtitle-2] [case-title-2]',
  },
  {
    id: 'case-3',
    industry: '能源装备',
    title: '核电站主泵关键零部件制造',
    desc: '参与国内某核电站主泵关键零部件的研制与批量生产，严格执行核级质量保证体系，所有零件均通过第三方无损检测，满足核安全一级标准。',
    result: '通过核安全局审查，实现国产化替代',
    imgId: 'case-img-s1t2u3',
    imgQuery: '[case-subtitle-3] [case-title-3]',
  },
  {
    id: 'case-4',
    industry: '轨道交通',
    title: '高铁转向架关键部件批量供货',
    desc: '为某轨道交通装备集团提供高铁转向架构架、轮对等关键部件的精密加工及装配服务，产品通过CRCC认证，已累计配套高铁车辆逾3,000列。',
    result: '连续8年零质量投诉，成为战略供应商',
    imgId: 'case-img-v4w5x6',
    imgQuery: '[case-subtitle-4] [case-title-4]',
  },
  {
    id: 'case-5',
    industry: '工程机械',
    title: '大型液压挖掘机液压系统集成',
    desc: '为某工程机械龙头企业提供液压泵、液压马达核心零部件的精密加工及液压系统集成服务，产品在极端工况下稳定运行，寿命超设计指标30%。',
    result: '批量供货超10,000套，零重大质量事故',
    imgId: 'case-img-y7z8a9',
    imgQuery: '[case-subtitle-5] [case-title-5]',
  },
  {
    id: 'case-6',
    industry: '医疗器械',
    title: '骨科植入物精密加工与表面处理',
    desc: '为某医疗器械企业提供钛合金骨科植入物的精密加工及表面处理服务，产品符合YY/T 0606医疗器械标准，已通过FDA及CE认证。',
    result: '产品出口欧美市场，年供货量超50,000件',
    imgId: 'case-img-b1c2d3',
    imgQuery: '[case-subtitle-6] [case-title-6]',
  },
];

const industryColors = {
  '航空航天': 'bg-blue-900/60 text-blue-200',
  '汽车制造': 'bg-green-900/60 text-green-200',
  '能源装备': 'bg-yellow-900/60 text-yellow-200',
  '轨道交通': 'bg-purple-900/60 text-purple-200',
  '工程机械': 'bg-orange-900/60 text-orange-200',
  '医疗器械': 'bg-teal-900/60 text-teal-200',
};

export default function Cases() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="cases" ref={containerRef} className="py-20 md:py-28 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#E87722] text-sm font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            典型案例
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: 'Noto Serif SC, serif' }}>
            服务行业领军企业
          </h2>
          <div className="w-16 h-1 bg-[#E87722] mx-auto mb-6" />
          <p className="text-[#4A5568] max-w-2xl mx-auto text-base leading-relaxed" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
            深耕多个高端制造领域，以卓越品质赢得行业标杆客户的长期信赖。
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div key={c.id} className="group bg-white border border-[#E2E8F0] hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={c.imgId}
                  data-strk-img={c.imgQuery}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 ${industryColors[c.industry] || 'bg-gray-800/60 text-gray-200'}`}
                    style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                  >
                    {c.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  id={`case-title-${idx + 1}`}
                  className="text-base font-bold text-[#0A1628] mb-2 leading-snug"
                  style={{ fontFamily: 'Noto Serif SC, serif' }}
                >
                  {c.title}
                </h3>
                <p
                  id={`case-subtitle-${idx + 1}`}
                  className="text-[#4A5568] text-sm leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
                >
                  {c.desc}
                </p>
                <div className="border-t border-[#E2E8F0] pt-4">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-4 bg-[#E87722] flex-shrink-0 mt-0.5" />
                    <p className="text-[#1A3A6B] text-xs font-semibold" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>
                      {c.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
