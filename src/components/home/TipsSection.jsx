import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Volume1, Clock, Stethoscope, Music, Pill, Dumbbell } from 'lucide-react';

const tips = [
  {
    id: 'tip-volume',
    icon: Volume1,
    color: 'bg-cyan-500',
    title: '控制音量',
    titleId: 'tip-title-1',
    desc: '使用耳机时，音量不超过最大音量的60%。在嘈杂环境中，优先选择降噪耳机而非提高音量。',
    descId: 'tip-desc-1',
    imgId: 'tip-img-1-v1w2x3',
  },
  {
    id: 'tip-time',
    icon: Clock,
    color: 'bg-teal-500',
    title: '限制暴露时间',
    titleId: 'tip-title-2',
    desc: '每次使用耳机不超过60分钟，之后让耳朵休息至少10分钟。长时间处于噪音环境需佩戴耳塞。',
    descId: 'tip-desc-2',
    imgId: 'tip-img-2-y4z5a6',
  },
  {
    id: 'tip-checkup',
    icon: Stethoscope,
    color: 'bg-blue-500',
    title: '定期检查',
    titleId: 'tip-title-3',
    desc: '建议每1-2年进行一次专业听力检查，尤其是50岁以上人群或长期处于噪音环境的工作者。',
    descId: 'tip-desc-3',
    imgId: 'tip-img-3-b7c8d9',
  },
  {
    id: 'tip-concert',
    icon: Music,
    color: 'bg-purple-500',
    title: '娱乐场所防护',
    titleId: 'tip-title-4',
    desc: '参加演唱会、夜店等高噪音场所时，佩戴专业音乐耳塞，并与音响保持安全距离。',
    descId: 'tip-desc-4',
    imgId: 'tip-img-4-e1f2g3',
  },
  {
    id: 'tip-medication',
    icon: Pill,
    color: 'bg-orange-500',
    title: '谨慎用药',
    titleId: 'tip-title-5',
    desc: '某些药物（如部分抗生素、利尿剂）可能损害听力。用药前咨询医生，了解潜在的耳毒性风险。',
    descId: 'tip-desc-5',
    imgId: 'tip-img-5-h4i5j6',
  },
  {
    id: 'tip-lifestyle',
    icon: Dumbbell,
    color: 'bg-green-500',
    title: '健康生活方式',
    titleId: 'tip-title-6',
    desc: '保持健康体重、控制血压和血糖、戒烟，这些都有助于维护内耳血液循环，保护听力功能。',
    descId: 'tip-desc-6',
    imgId: 'tip-img-6-k7l8m9',
  },
];

export default function TipsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="tips" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            保护建议
          </span>
          <h2 id="tips-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            6大听力保护策略
          </h2>
          <p id="tips-section-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
            听力损失大多是可以预防的。养成良好习惯，从今天开始保护您的听力。
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    data-strk-img-id={tip.imgId}
                    data-strk-img={`[${tip.descId}] [${tip.titleId}] [tips-section-subtitle] [tips-section-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute bottom-3 left-3 w-10 h-10 ${tip.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-700">{idx + 1}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 id={tip.titleId} className="text-base font-semibold text-slate-900 mb-2">
                    {tip.title}
                  </h3>
                  <p id={tip.descId} className="text-sm text-slate-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 md:p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            60/60 法则
          </h3>
          <p className="text-cyan-100 text-lg mb-6 max-w-xl mx-auto">
            使用耳机时，音量不超过最大音量的 <strong className="text-white">60%</strong>，
            每次使用时间不超过 <strong className="text-white">60分钟</strong>。
            这是保护听力最简单有效的方法。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 rounded-xl px-6 py-4">
              <div className="text-3xl font-bold">60%</div>
              <div className="text-cyan-100 text-sm mt-1">最大音量上限</div>
            </div>
            <div className="bg-white/20 rounded-xl px-6 py-4">
              <div className="text-3xl font-bold">60分钟</div>
              <div className="text-cyan-100 text-sm mt-1">单次使用上限</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
