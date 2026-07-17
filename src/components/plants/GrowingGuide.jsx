import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { FlaskConical, Droplets, Sprout, Scissors } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    number: '01',
    icon: <FlaskConical className="w-7 h-7 text-water-500" />,
    title: '准备容器',
    desc: '选择透明玻璃瓶或专用水培容器，用清水冲洗干净。透明容器便于观察根系生长，也更具装饰性。',
    tip: '推荐使用广口玻璃瓶，便于清洁和换水。',
    titleId: 'guide-step1-title',
    descId: 'guide-step1-desc',
    imgId: 'guide-step1-img-s1t2u3',
  },
  {
    id: 'step-2',
    number: '02',
    icon: <Droplets className="w-7 h-7 text-water-500" />,
    title: '配制营养液',
    desc: '将水培专用营养液按比例稀释于清水中，pH 值保持在 5.5–6.5 之间，为植物提供均衡养分。',
    tip: '自来水需静置 24 小时去除氯气，或使用过滤水。',
    titleId: 'guide-step2-title',
    descId: 'guide-step2-desc',
    imgId: 'guide-step2-img-v4w5x6',
  },
  {
    id: 'step-3',
    number: '03',
    icon: <Sprout className="w-7 h-7 text-leaf-600" />,
    title: '植入植物',
    desc: '将植物根部轻轻清洗干净，去除泥土，放入容器中，确保根部浸入营养液，茎叶保持在水面以上。',
    tip: '初次水培建议选择已有根系的植物，更容易成活。',
    titleId: 'guide-step3-title',
    descId: 'guide-step3-desc',
    imgId: 'guide-step3-img-y7z8a9',
  },
  {
    id: 'step-4',
    number: '04',
    icon: <Scissors className="w-7 h-7 text-leaf-600" />,
    title: '日常养护',
    desc: '每 1–2 周更换一次营养液，定期修剪枯叶，保持适当光照。注意观察根系颜色，健康根系应为白色或浅黄色。',
    tip: '避免阳光直射，散射光或人工补光效果最佳。',
    titleId: 'guide-step4-title',
    descId: 'guide-step4-desc',
    imgId: 'guide-step4-img-b1c2d3',
  },
];

const tips = [
  { emoji: '💡', title: '光照管理', content: '大多数水培植物需要每天 6–8 小时的光照，可使用植物补光灯辅助。' },
  { emoji: '🌡️', title: '温度控制', content: '室温保持在 18–28°C 最为适宜，避免温度骤变影响植物生长。' },
  { emoji: '🧪', title: '营养补充', content: '每次换水时补充营养液，浓度不宜过高，遵循"少量多次"原则。' },
  { emoji: '🔍', title: '病虫防治', content: '定期检查叶片背面，发现虫害及时处理，保持容器清洁防止藻类滋生。' },
];

const GrowingGuide = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="guide" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-leaf-100 text-leaf-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            📖 种植指南
          </span>
          <h2 id="guide-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            四步开启水培之旅
          </h2>
          <p id="guide-subtitle" className="text-gray-600 max-w-xl mx-auto">
            无论你是园艺新手还是资深爱好者，跟随这份指南，轻松掌握水培种植的核心技巧。
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-leaf-100 to-water-100 rounded-3xl opacity-50" />
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}] [guide-subtitle] [guide-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="relative w-full rounded-2xl shadow-md object-cover"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-black text-leaf-100 leading-none">{step.number}</span>
                  <div className="w-10 h-10 bg-leaf-50 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 id={step.titleId} className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p id={step.descId} className="text-gray-600 leading-relaxed mb-4">
                  {step.desc}
                </p>
                <div className="bg-leaf-50 border-l-4 border-leaf-400 rounded-r-xl px-4 py-3">
                  <p className="text-sm text-leaf-800 font-medium">💡 小贴士：{step.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips grid */}
        <div className="bg-gradient-to-br from-leaf-50 to-water-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">养护小知识</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl p-5 shadow-sm">
                <span className="text-3xl mb-3 block">{tip.emoji}</span>
                <h4 className="font-bold text-gray-900 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowingGuide;
