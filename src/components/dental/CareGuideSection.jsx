import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Clock, CheckCircle2 } from 'lucide-react';

const careSteps = [
  {
    id: 'step1',
    step: '01',
    titleId: 'care-step1-title',
    descId: 'care-step1-desc',
    imgId: 'care-step1-img-p7q8r9',
    title: '正确刷牙方法',
    desc: '采用巴氏刷牙法，牙刷与牙龈成45°角，轻柔地做小圆弧状运动。每次刷牙不少于2分钟，早晚各一次。',
    tips: ['使用软毛牙刷', '每3个月更换牙刷', '刷完牙后清洁舌苔'],
    duration: '每次2分钟',
    color: 'blue',
  },
  {
    id: 'step2',
    step: '02',
    titleId: 'care-step2-title',
    descId: 'care-step2-desc',
    imgId: 'care-step2-img-s1t2u3',
    title: '牙线的正确使用',
    desc: '牙线能清除牙刷无法触及的牙缝污垢。每天至少使用一次，轻柔地在牙缝间上下移动，避免损伤牙龈。',
    tips: ['饭后使用效果最佳', '每段牙线只用一次', '可选用牙线棒辅助'],
    duration: '每天1次',
    color: 'teal',
  },
  {
    id: 'step3',
    step: '03',
    titleId: 'care-step3-title',
    descId: 'care-step3-desc',
    imgId: 'care-step3-img-v4w5x6',
    title: '漱口水的辅助作用',
    desc: '含氟或抗菌漱口水可有效杀灭口腔细菌，减少牙菌斑形成。刷牙后使用，含漱30秒，不要立即用清水漱口。',
    tips: ['选择含氟漱口水', '避免儿童使用含酒精产品', '不能替代刷牙'],
    duration: '每天1-2次',
    color: 'orange',
  },
  {
    id: 'step4',
    step: '04',
    titleId: 'care-step4-title',
    descId: 'care-step4-desc',
    imgId: 'care-step4-img-y7z8a9',
    title: '定期口腔检查',
    desc: '建议每6个月进行一次专业口腔检查和洁牙。早期发现问题，及时处理，避免小问题演变成大麻烦。',
    tips: ['每半年检查一次', '儿童每3个月检查', '拍X光片评估骨质'],
    duration: '每6个月',
    color: 'purple',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', step: 'bg-blue-600', icon: 'text-blue-600', tag: 'bg-blue-100 text-blue-700' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', step: 'bg-teal-500', icon: 'text-teal-600', tag: 'bg-teal-100 text-teal-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', step: 'bg-orange-500', icon: 'text-orange-500', tag: 'bg-orange-100 text-orange-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', step: 'bg-purple-600', icon: 'text-purple-600', tag: 'bg-purple-100 text-purple-700' },
};

const CareGuideSection = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState('step1');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeStep]);

  const active = careSteps.find((s) => s.id === activeStep);
  const colors = colorMap[active.color];

  return (
    <section id="care" ref={containerRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            日常护理指南
          </div>
          <h2 id="care-title" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            科学护牙四步法
          </h2>
          <p id="care-subtitle" className="text-gray-600 text-lg max-w-2xl mx-auto">
            坚持科学的日常口腔护理习惯，让您的牙齿保持健康洁白
          </p>
        </div>

        {/* Step Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {careSteps.map((step) => {
            const c = colorMap[step.color];
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? `${c.step} text-white shadow-md`
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${isActive ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {step.step}
                </span>
                {step.title}
              </button>
            );
          })}
        </div>

        {/* Active Step Detail */}
        <div className={`${colors.bg} border ${colors.border} rounded-3xl overflow-hidden`}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                data-strk-img-id={active.imgId}
                data-strk-img={`[${active.descId}] [${active.titleId}] [care-subtitle] [care-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={active.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`${colors.tag} text-sm font-bold px-4 py-1.5 rounded-full`}>
                  步骤 {active.step}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className={`${colors.step} text-white rounded-2xl w-12 h-12 flex items-center justify-center text-xl font-extrabold`}>
                  {active.step}
                </div>
                <h3 id={active.titleId} className="text-2xl font-extrabold text-gray-900">
                  {active.title}
                </h3>
              </div>

              <p id={active.descId} className="text-gray-700 leading-relaxed">
                {active.desc}
              </p>

              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${colors.icon}`} />
                <span className={`text-sm font-semibold ${colors.icon}`}>{active.duration}</span>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-bold text-gray-700 mb-3">关键要点：</div>
                {active.tips.map((tip) => (
                  <div key={tip} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${colors.icon} flex-shrink-0`} />
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareGuideSection;
