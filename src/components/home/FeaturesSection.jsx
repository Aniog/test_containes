import { Cloud, Shield, Zap, BarChart2, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: '云端存储',
    description: '安全可靠的云端存储解决方案，随时随地访问您的数据，支持无限扩展。',
  },
  {
    icon: Shield,
    title: '企业级安全',
    description: '多层加密保护，符合国际安全标准，让您的数据始终处于最安全的状态。',
  },
  {
    icon: Zap,
    title: '极速性能',
    description: '全球 CDN 加速网络，毫秒级响应速度，为用户提供流畅的使用体验。',
  },
  {
    icon: BarChart2,
    title: '智能分析',
    description: '实时数据分析与可视化报表，帮助您做出更明智的业务决策。',
  },
  {
    icon: Globe,
    title: '全球覆盖',
    description: '遍布全球 50+ 个数据中心，确保您的服务在任何地区都能稳定运行。',
  },
  {
    icon: Headphones,
    title: '专属支持',
    description: '7×24 小时专业技术支持团队，随时为您解决任何问题和挑战。',
  },
];

const gradients = [
  'linear-gradient(135deg, #3b82f6, #06b6d4)',
  'linear-gradient(135deg, #6366f1, #3b82f6)',
  'linear-gradient(135deg, #0ea5e9, #38bdf8)',
  'linear-gradient(135deg, #2563eb, #7c3aed)',
  'linear-gradient(135deg, #0284c7, #0ea5e9)',
  'linear-gradient(135deg, #1d4ed8, #06b6d4)',
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 40%, #dbeafe 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            核心功能
          </span>
          <h2 className="text-4xl font-bold mb-4" style={{ background: 'linear-gradient(90deg, #1e3a8a, #2563eb, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            为什么选择我们？
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            我们提供全方位的数字化解决方案，助力您的业务腾飞，
            在竞争激烈的市场中脱颖而出。
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: gradients[index] }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
