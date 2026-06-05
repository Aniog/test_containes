import { Rocket, Shield, BarChart2, Globe, Cpu, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: '极速部署',
    description: '一键部署您的项目，从开发到上线只需几分钟，让您专注于核心业务。',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '企业级安全防护，多重加密保障，让您的数据始终处于最安全的状态。',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: BarChart2,
    title: '数据分析',
    description: '实时数据监控与深度分析，帮助您做出更明智的业务决策。',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Globe,
    title: '全球覆盖',
    description: '遍布全球的服务节点，确保您的用户无论身处何地都能获得流畅体验。',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Cpu,
    title: '智能自动化',
    description: '借助 AI 技术自动化繁琐流程，大幅提升团队工作效率。',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: HeartHandshake,
    title: '专属支持',
    description: '7×24 小时专业客服团队随时待命，为您提供及时有效的技术支持。',
    color: 'bg-sky-100 text-sky-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            核心功能
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            为什么选择我们
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            我们提供全方位的数字化工具，助力您的企业在数字时代保持竞争优势。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
