import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Ear, Volume2, AlertTriangle, Baby, Headphones, Stethoscope } from 'lucide-react';

const knowledgeCards = [
  {
    id: 'card-hearing-loss',
    icon: Ear,
    color: 'bg-cyan-100 text-cyan-600',
    tag: '基础知识',
    tagColor: 'bg-cyan-100 text-cyan-700',
    title: '什么是听力损失？',
    titleId: 'knowledge-title-1',
    desc: '听力损失是指部分或完全无法听到声音的状况，可分为传导性、感音神经性和混合性三种类型，影响程度从轻度到极重度不等。',
    descId: 'knowledge-desc-1',
    imgId: 'knowledge-img-1-d4e5f6',
  },
  {
    id: 'card-noise',
    icon: Volume2,
    color: 'bg-orange-100 text-orange-600',
    tag: '主要成因',
    tagColor: 'bg-orange-100 text-orange-700',
    title: '噪音性听力损失',
    titleId: 'knowledge-title-2',
    desc: '长期暴露于85分贝以上的噪音环境中，会导致内耳毛细胞受损。工厂噪音、演唱会、长时间使用耳机都是常见风险因素。',
    descId: 'knowledge-desc-2',
    imgId: 'knowledge-img-2-g7h8i9',
  },
  {
    id: 'card-aging',
    icon: AlertTriangle,
    color: 'bg-amber-100 text-amber-600',
    tag: '年龄相关',
    tagColor: 'bg-amber-100 text-amber-700',
    title: '老年性听力下降',
    titleId: 'knowledge-title-3',
    desc: '随着年龄增长，内耳结构自然退化，导致高频听力逐渐下降。这是65岁以上人群中最常见的感觉障碍之一。',
    descId: 'knowledge-desc-3',
    imgId: 'knowledge-img-3-j1k2l3',
  },
  {
    id: 'card-children',
    icon: Baby,
    color: 'bg-pink-100 text-pink-600',
    tag: '儿童听力',
    tagColor: 'bg-pink-100 text-pink-700',
    title: '儿童听力健康',
    titleId: 'knowledge-title-4',
    desc: '儿童听力损失可能影响语言发育和学习能力。新生儿听力筛查至关重要，早期发现可以显著改善预后效果。',
    descId: 'knowledge-desc-4',
    imgId: 'knowledge-img-4-m4n5o6',
  },
  {
    id: 'card-earphone',
    icon: Headphones,
    color: 'bg-purple-100 text-purple-600',
    tag: '现代风险',
    tagColor: 'bg-purple-100 text-purple-700',
    title: '耳机使用与听力',
    titleId: 'knowledge-title-5',
    desc: '全球约11亿年轻人因不安全使用个人音频设备而面临听力损失风险。遵循"60/60原则"：音量不超过60%，每次使用不超过60分钟。',
    descId: 'knowledge-desc-5',
    imgId: 'knowledge-img-5-p7q8r9',
  },
  {
    id: 'card-treatment',
    icon: Stethoscope,
    color: 'bg-teal-100 text-teal-600',
    tag: '治疗方案',
    tagColor: 'bg-teal-100 text-teal-700',
    title: '听力损失的干预',
    titleId: 'knowledge-title-6',
    desc: '根据类型和程度，听力损失可通过助听器、人工耳蜗、药物治疗或手术等方式干预。早期干预效果最佳。',
    descId: 'knowledge-desc-6',
    imgId: 'knowledge-img-6-s1t2u3',
  },
];

export default function KnowledgeSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="knowledge" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            听力知识
          </span>
          <h2 id="knowledge-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            了解听力健康
          </h2>
          <p id="knowledge-section-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
            听力损失是全球最常见的感觉障碍之一，了解相关知识是保护听力的第一步。
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {knowledgeCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    data-strk-img-id={card.imgId}
                    data-strk-img={`[${card.descId}] [${card.titleId}] [knowledge-section-subtitle] [knowledge-section-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={card.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${card.tagColor}`}>
                      {card.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 id={card.titleId} className="text-lg font-semibold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p id={card.descId} className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
