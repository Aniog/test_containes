import { Rocket, Shield, BarChart2, Headphones } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: '快速部署',
    desc: '我们的解决方案可在最短时间内完成部署，让您的业务快速上线，抢占市场先机。',
    color: 'bg-[#E63946]',
  },
  {
    icon: Shield,
    title: '安全可靠',
    desc: '采用业界领先的安全技术，全方位保护您的数据和系统，让您高枕无忧。',
    color: 'bg-[#1D3557]',
  },
  {
    icon: BarChart2,
    title: '数据分析',
    desc: '深度数据洞察，帮助您了解业务趋势，做出更明智的决策，推动持续增长。',
    color: 'bg-[#E63946]',
  },
  {
    icon: Headphones,
    title: '全天候支持',
    desc: '专业团队7×24小时待命，随时解决您遇到的任何问题，提供贴心服务。',
    color: 'bg-[#1D3557]',
  },
];

const Services = () => {
  return (
    <section className="bg-[#F1FAEE] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E63946] text-sm font-semibold uppercase tracking-widest mb-3">
            我们的服务
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
            为您提供全方位解决方案
          </h2>
          <p className="text-[#457B9D] text-lg max-w-2xl mx-auto">
            从战略规划到技术实施，我们覆盖您业务发展的每一个关键环节。
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-[#A8DADC] transition-shadow duration-300 group"
              >
                <div
                  className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-6 h-6 text-[#F1FAEE]" />
                </div>
                <h3 className="text-[#1D3557] font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-[#457B9D] text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
