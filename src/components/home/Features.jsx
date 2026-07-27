import { useEffect, useRef } from 'react';
import { Cloud, Shield, Zap, BarChart2, Globe, Headphones } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'cloud',
    icon: Cloud,
    title: '云端存储',
    desc: '无限扩展的云端存储空间，数据安全可靠，随时随地访问您的文件和资源。',
    imgId: 'feat-cloud-g7h8i9',
    titleId: 'feat-cloud-title',
    descId: 'feat-cloud-desc',
  },
  {
    id: 'security',
    icon: Shield,
    title: '企业级安全',
    desc: '采用银行级别的加密技术，多重身份验证，全方位保护您的数据安全。',
    imgId: 'feat-security-j1k2l3',
    titleId: 'feat-security-title',
    descId: 'feat-security-desc',
  },
  {
    id: 'speed',
    icon: Zap,
    title: '极速响应',
    desc: '全球 CDN 加速，毫秒级响应时间，为用户提供流畅的极致体验。',
    imgId: 'feat-speed-m4n5o6',
    titleId: 'feat-speed-title',
    descId: 'feat-speed-desc',
  },
  {
    id: 'analytics',
    icon: BarChart2,
    title: '智能分析',
    desc: '实时数据看板，深度洞察业务趋势，用数据驱动更明智的决策。',
    imgId: 'feat-analytics-p7q8r9',
    titleId: 'feat-analytics-title',
    descId: 'feat-analytics-desc',
  },
  {
    id: 'global',
    icon: Globe,
    title: '全球覆盖',
    desc: '遍布全球的服务器节点，无论您的用户在哪里，都能享受本地化的速度。',
    imgId: 'feat-global-s1t2u3',
    titleId: 'feat-global-title',
    descId: 'feat-global-desc',
  },
  {
    id: 'support',
    icon: Headphones,
    title: '7×24 支持',
    desc: '专业技术团队全天候待命，快速响应，确保您的业务永不中断。',
    imgId: 'feat-support-v4w5x6',
    titleId: 'feat-support-title',
    descId: 'feat-support-desc',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="bg-blue-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            核心功能
          </span>
          <h2
            id="features-title"
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            为您的业务赋能
          </h2>
          <p
            id="features-subtitle"
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            BluePeak 提供一整套企业级工具，帮助您的团队更高效地协作与创新。
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow group border border-blue-100"
              >
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3
                  id={feat.titleId}
                  className="text-slate-800 font-semibold text-xl mb-3"
                >
                  {feat.title}
                </h3>
                <p
                  id={feat.descId}
                  className="text-slate-600 text-sm leading-relaxed"
                >
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
