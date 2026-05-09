import { Award, Clock, Users, HeadphonesIcon, TrendingUp, Lock } from 'lucide-react';

const features = [
  {
    icon: Award,
    color: 'bg-blue-100 text-blue-600',
    title: '20年专业经验',
    description: '深耕保险行业20余年，拥有丰富的风险管理经验和专业的服务团队。',
  },
  {
    icon: Clock,
    color: 'bg-emerald-100 text-emerald-600',
    title: '极速理赔服务',
    description: '简化理赔流程，最快24小时完成理赔审核，让您在最需要的时候得到及时帮助。',
  },
  {
    icon: Users,
    color: 'bg-violet-100 text-violet-600',
    title: '500万+信赖客户',
    description: '超过500万家庭和企业选择安盾保险，用口碑证明我们的服务品质。',
  },
  {
    icon: HeadphonesIcon,
    color: 'bg-rose-100 text-rose-600',
    title: '24/7全天候支持',
    description: '专业客服团队全天候在线，随时解答您的疑问，提供贴心的保险咨询服务。',
  },
  {
    icon: TrendingUp,
    color: 'bg-amber-100 text-amber-600',
    title: '个性化定制方案',
    description: '根据您的实际需求和预算，量身定制最适合的保险组合方案。',
  },
  {
    icon: Lock,
    color: 'bg-sky-100 text-sky-600',
    title: '安全可靠保障',
    description: '受国家金融监管机构监管，资金安全有保障，让您投保无忧。',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            为什么选择我们
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            值得信赖的保险伙伴
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            我们以专业、诚信、高效的服务理念，为每一位客户提供最优质的保险体验
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            立即开始保障您的未来
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            只需3分钟，获取专属保险方案，让专业顾问为您量身定制最优保障
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors border-none text-base shadow-lg"
            >
              免费获取报价
            </button>
            <a
              href="tel:400-888-8888"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-colors border border-white/30 text-base backdrop-blur-sm flex items-center justify-center"
            >
              拨打 400-888-8888
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
