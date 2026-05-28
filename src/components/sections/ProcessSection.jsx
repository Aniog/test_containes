import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { FileText, Settings, Wrench, CheckCircle, Package, Headphones } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: '需求分析与方案设计',
    desc: '工程团队深入解读客户图纸与技术规范，进行 DFM 可制造性分析，提出优化建议，确认工艺路线与材料选型，输出详细制造方案。',
    imgId: 'proc-img-s1t2u3',
    imgQuery: '[proc-1-title] engineering design blueprint review',
  },
  {
    icon: Settings,
    step: '02',
    title: '精密数控加工',
    desc: '依据工艺规程，在五轴联动加工中心、精密车床、磨床等设备上完成高精度切削加工，全程执行首件检验与过程巡检，确保尺寸一致性。',
    imgId: 'proc-img-v4w5x6',
    imgQuery: '[proc-2-title] CNC machining precision manufacturing',
  },
  {
    icon: Wrench,
    step: '03',
    title: '热处理与表面处理',
    desc: '根据材料特性与使用工况，选择渗碳淬火、氮化、调质等热处理工艺，以及硬铬镀层、阳极氧化、达克罗等表面处理方案，提升零件耐磨性与耐腐蚀性。',
    imgId: 'proc-img-y7z8a9',
    imgQuery: '[proc-3-title] heat treatment surface coating industrial',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: '全尺寸检测与认证',
    desc: '配备蔡司三坐标测量机、轮廓仪、粗糙度仪等精密检测设备，对关键尺寸进行 100% 全检，出具完整检测报告，符合 PPAP 及客户特定质量要求。',
    imgId: 'proc-img-b1c2d3',
    imgQuery: '[proc-4-title] quality inspection CMM measurement precision',
  },
  {
    icon: Package,
    step: '05',
    title: '防护包装与准时交付',
    desc: '采用防锈、防震专业包装方案，配合客户 JIT 生产节拍，通过完善的物流体系确保产品安全、准时送达，支持国内外多种贸易条款。',
    imgId: 'proc-img-e4f5g6',
    imgQuery: '[proc-5-title] industrial packaging logistics delivery',
  },
  {
    icon: Headphones,
    step: '06',
    title: '售后技术支持',
    desc: '提供产品使用指导、安装调试协助及质量问题快速响应服务，专属客户经理全程跟进，建立长期技术合作关系，持续优化产品性能。',
    imgId: 'proc-img-h7i8j9',
    imgQuery: '[proc-6-title] technical support customer service engineering',
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0D2137] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            制造工艺流程
          </h2>
          <div className="w-16 h-1 bg-[#D4820A] mx-auto mb-6" />
          <p className="text-[#4A5568] text-lg max-w-2xl mx-auto leading-relaxed">
            从需求分析到售后支持，六大环节全程管控，以系统化流程保障每一件产品的品质与交期
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative bg-[#F4F6F8] rounded-lg border border-[#CBD5E0] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    alt={step.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={step.imgId}
                    data-strk-img={step.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span id={`proc-${index + 1}-title`} className="hidden">{step.title}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#0D2137] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#D4820A]" />
                    </div>
                    <div>
                      <span className="text-[#D4820A] text-xs font-bold tracking-widest">STEP {step.step}</span>
                      <h3
                        className="text-[#0D2137] font-bold text-base leading-tight"
                        style={{ fontFamily: "'Noto Serif SC', serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Step number watermark */}
                <div className="absolute top-3 right-3 text-5xl font-black text-[#0D2137]/10 leading-none select-none">
                  {step.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
