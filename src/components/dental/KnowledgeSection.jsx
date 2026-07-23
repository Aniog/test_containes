import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { AlertTriangle, Zap, Heart, Shield } from 'lucide-react';

const knowledgeItems = [
  {
    id: 'k1',
    icon: AlertTriangle,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    titleId: 'k1-title',
    descId: 'k1-desc',
    imgId: 'knowledge-card-k1-d4e5f6',
    title: '龋齿的成因与预防',
    desc: '龋齿是由口腔细菌分解糖分产生酸性物质，腐蚀牙釉质所致。定期刷牙、减少糖分摄入是最有效的预防方式。',
    tag: '预防知识',
  },
  {
    id: 'k2',
    icon: Zap,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    titleId: 'k2-title',
    descId: 'k2-desc',
    imgId: 'knowledge-card-k2-g7h8i9',
    title: '牙周病的早期信号',
    desc: '牙龈出血、口臭、牙龈红肿是牙周病的早期信号。早发现早治疗，可有效防止牙齿松动脱落。',
    tag: '疾病预警',
  },
  {
    id: 'k3',
    icon: Heart,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
    titleId: 'k3-title',
    descId: 'k3-desc',
    imgId: 'knowledge-card-k3-j1k2l3',
    title: '口腔健康与全身健康',
    desc: '研究表明，口腔健康与心脏病、糖尿病等全身性疾病密切相关。保持口腔卫生是维护整体健康的重要一环。',
    tag: '健康关联',
  },
  {
    id: 'k4',
    icon: Shield,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    titleId: 'k4-title',
    descId: 'k4-desc',
    imgId: 'knowledge-card-k4-m4n5o6',
    title: '氟化物的保护作用',
    desc: '氟化物能强化牙釉质，抵抗酸性侵蚀。使用含氟牙膏、定期接受氟化物涂布，可显著降低龋齿风险。',
    tag: '防护科学',
  },
];

const KnowledgeSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="knowledge" ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            健康知识库
          </div>
          <h2 id="knowledge-title" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            了解口腔健康知识
          </h2>
          <p id="knowledge-subtitle" className="text-gray-600 text-lg max-w-2xl mx-auto">
            掌握科学的口腔健康知识，是预防牙齿疾病的第一步
          </p>
        </div>

        {/* Knowledge Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {knowledgeItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [knowledge-subtitle] [knowledge-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${item.iconBg} rounded-xl p-3 flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 id={item.titleId} className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p id={item.descId} className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
