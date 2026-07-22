import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const scaleData = [
  { code: 'TD', name: '热带低压', wind: '< 17.2 m/s', beaufort: '< 8级', color: '#90e0ef', bg: 'bg-[#90e0ef]/10', border: 'border-[#90e0ef]/40' },
  { code: 'TS', name: '热带风暴', wind: '17.2 - 24.4 m/s', beaufort: '8-9级', color: '#48cae4', bg: 'bg-[#48cae4]/10', border: 'border-[#48cae4]/40' },
  { code: 'STS', name: '强热带风暴', wind: '24.5 - 32.6 m/s', beaufort: '10-11级', color: '#00b4d8', bg: 'bg-[#00b4d8]/10', border: 'border-[#00b4d8]/40' },
  { code: 'TY', name: '台风', wind: '32.7 - 41.4 m/s', beaufort: '12-13级', color: '#f4a261', bg: 'bg-[#f4a261]/10', border: 'border-[#f4a261]/40' },
  { code: 'STY', name: '强台风', wind: '41.5 - 50.9 m/s', beaufort: '14-15级', color: '#e76f51', bg: 'bg-[#e76f51]/10', border: 'border-[#e76f51]/40' },
  { code: 'SuperTY', name: '超强台风', wind: '≥ 51.0 m/s', beaufort: '≥ 16级', color: '#e63946', bg: 'bg-[#e63946]/10', border: 'border-[#e63946]/40' },
];

const formationSteps = [
  {
    step: '01',
    title: '海洋热能积累',
    desc: '当海面温度超过26°C时，大量海水蒸发，为台风提供能量来源。热带海洋是台风的"燃料库"。',
    icon: '🌊',
  },
  {
    step: '02',
    title: '低压中心形成',
    desc: '暖湿空气上升，在海面形成低气压区域。周围空气向中心汇聚，形成初始的旋转气流。',
    icon: '↩️',
  },
  {
    step: '03',
    title: '科里奥利力作用',
    desc: '地球自转产生的科里奥利力使气流发生偏转，在北半球形成逆时针旋转，在南半球形成顺时针旋转。',
    icon: '🌍',
  },
  {
    step: '04',
    title: '台风眼形成',
    desc: '随着旋转加剧，中心气压持续降低，形成相对平静的台风眼。台风眼周围是最猛烈的眼壁区域。',
    icon: '👁️',
  },
];

const knowledgeTopics = [
  {
    id: 'topic-structure',
    imgId: 'knowledge-img-structure-m4n5o6',
    titleId: 'topic-structure-title',
    descId: 'topic-structure-desc',
    title: '台风的结构',
    desc: '台风由台风眼、眼壁、螺旋雨带三部分组成，每个部分都有独特的气象特征。',
    detail: '台风眼是台风中心相对平静的区域，直径通常为20-60公里；眼壁是最猛烈的区域，风速最大；螺旋雨带从眼壁向外延伸，带来大量降雨。',
  },
  {
    id: 'topic-season',
    imgId: 'knowledge-img-season-p7q8r9',
    titleId: 'topic-season-title',
    descId: 'topic-season-desc',
    title: '台风季节',
    desc: '西北太平洋台风全年均可发生，但主要集中在5月至11月，7月至9月为高峰期。',
    detail: '台风季节与海洋温度密切相关。夏秋季节，西北太平洋海温最高，为台风提供充足能量。每年平均约有26个台风生成，其中约7-9个登陆中国。',
  },
  {
    id: 'topic-path',
    imgId: 'knowledge-img-path-s1t2u3',
    titleId: 'topic-path-title',
    descId: 'topic-path-desc',
    title: '台风路径',
    desc: '台风路径受副热带高压、季风槽等大气环流系统影响，具有一定的规律性但也存在不确定性。',
    detail: '影响中国的台风主要有三条路径：西移路径（影响华南）、西北移路径（影响华东）和转向路径（影响华东、华北）。准确预报台风路径是气象工作的重要任务。',
  },
];

export default function Knowledge() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('formation');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeTab]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0f1e] pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#112240] to-[#0a0f1e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 border border-[#00b4d8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#48cae4] text-sm font-medium">🌀 台风知识库</span>
          </div>
          <h1 id="knowledge-page-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            台风科学知识
          </h1>
          <p id="knowledge-page-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            深入了解台风的形成机制、结构特征、强度分级与运动规律
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {[
              { id: 'formation', label: '台风形成' },
              { id: 'scale', label: '强度分级' },
              { id: 'topics', label: '深度知识' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#00b4d8] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Formation Tab */}
        {activeTab === 'formation' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">台风是如何形成的？</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                台风的形成是一个复杂的大气过程，需要特定的海洋和大气条件共同作用
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {formationSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-[#0d1b2a] border border-[#00b4d8]/20 rounded-2xl p-6 hover:border-[#00b4d8]/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#00b4d8]/10 border border-[#00b4d8]/30 flex items-center justify-center">
                      <span className="text-[#48cae4] font-mono font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="text-white font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conditions */}
            <div className="bg-[#0d1b2a] border border-[#00b4d8]/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">台风形成的必要条件</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '🌡️', title: '海温 ≥ 26°C', desc: '提供充足的水汽和热能' },
                  { icon: '💧', title: '充沛水汽', desc: '大量蒸发的海水提供能量' },
                  { icon: '🌐', title: '适当纬度', description: '5°-20°N，科里奥利力足够' },
                  { icon: '💨', title: '低层辐合', desc: '低层大气向中心汇聚' },
                  { icon: '⬆️', title: '高层辐散', desc: '高层大气向外流出，维持上升运动' },
                  { icon: '🔄', title: '弱垂直风切', desc: '上下层风速差异小，利于发展' },
                ].map((cond, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#0a0f1e]/60 rounded-xl">
                    <span className="text-2xl shrink-0">{cond.icon}</span>
                    <div>
                      <div className="text-[#48cae4] font-semibold text-sm mb-1">{cond.title}</div>
                      <div className="text-slate-400 text-xs">{cond.desc || cond.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scale Tab */}
        {activeTab === 'scale' && (
          <div id="scale">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">台风强度分级标准</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                中国气象局将热带气旋按底层中心附近最大平均风速分为六个等级
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {scaleData.map((level, i) => (
                <div
                  key={i}
                  className={`${level.bg} ${level.border} border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:scale-[1.01] transition-transform duration-200`}
                >
                  <div className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${level.color}20`, border: `1px solid ${level.color}50` }}>
                    <span className="font-mono font-bold text-xs text-center leading-tight" style={{ color: level.color }}>
                      {level.code}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-1">{level.name}</h3>
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <span className="text-slate-500 text-xs">最大风速</span>
                        <div className="font-mono font-bold" style={{ color: level.color }}>{level.wind}</div>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs">风力等级</span>
                        <div className="font-mono font-bold" style={{ color: level.color }}>{level.beaufort}</div>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="flex gap-1">
                      {Array.from({ length: 6 }).map((_, j) => (
                        <div
                          key={j}
                          className="w-3 h-8 rounded-sm"
                          style={{
                            backgroundColor: j <= i ? level.color : '#1e293b',
                            opacity: j <= i ? 1 - (i - j) * 0.15 : 1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0d1b2a] border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">📌 注意事项</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• 以上分级标准为中国气象局标准，不同国家和地区的分级标准可能有所不同</li>
                <li>• 日本气象厅（JMA）和联合台风警报中心（JTWC）使用不同的分级体系</li>
                <li>• 台风强度会随时间变化，登陆时的强度可能与最强时不同</li>
                <li>• 即使是较弱的热带风暴，也可能带来严重的降雨和洪涝灾害</li>
              </ul>
            </div>
          </div>
        )}

        {/* Topics Tab */}
        {activeTab === 'topics' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">深度知识专题</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                深入了解台风的结构、季节规律与运动路径
              </p>
            </div>

            <div className="space-y-8">
              {knowledgeTopics.map((topic, i) => (
                <div
                  key={topic.id}
                  className="bg-[#0d1b2a] border border-[#00b4d8]/20 rounded-2xl overflow-hidden hover:border-[#00b4d8]/50 transition-all duration-300"
                >
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                      <img
                        alt={topic.title}
                        data-strk-img-id={topic.imgId}
                        data-strk-img={`[${topic.descId}] [${topic.titleId}] [knowledge-page-subtitle] [knowledge-page-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1b2a]/30" />
                    </div>
                    <div className="flex-1 p-8 flex flex-col justify-center">
                      <h3 id={topic.titleId} className="text-white font-bold text-2xl mb-3">
                        {topic.title}
                      </h3>
                      <p id={topic.descId} className="text-[#48cae4] text-base mb-4 font-medium">
                        {topic.desc}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {topic.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
