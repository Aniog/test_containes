import { Shield, Cpu, Wrench, Globe, FlaskConical, Headphones } from 'lucide-react';

const advantages = [
  {
    icon: FlaskConical,
    title: '自主研发能力',
    desc: '设立省级企业技术中心，拥有60余项专利技术，持续投入营收的6%用于研发，保持技术领先优势。',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Shield,
    title: '严苛质量管控',
    desc: '全流程质量追溯体系，关键部件100%出厂检测，产品通过IEC、GB、UL等多项国际标准认证。',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Cpu,
    title: '智能制造工厂',
    desc: '引进德国、日本先进生产设备，自动化率达75%，确保产品一致性与交付效率，年产能超5000台套。',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Globe,
    title: '全国服务网络',
    desc: '在全国30余省市设立服务网点，4小时响应机制，专业工程师团队提供现场安装、调试与维保服务。',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Wrench,
    title: '系统集成能力',
    desc: '具备EPC总承包资质，可承接从方案设计、设备供货到工程施工、竣工验收的全流程项目管理。',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Headphones,
    title: '全生命周期服务',
    desc: '提供设备健康诊断、预防性维护、技术改造升级等增值服务，延长设备使用寿命，降低运营成本。',
    color: 'bg-rose-50 text-rose-600',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            核心优势
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            为何选择温思达
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            从技术研发到售后服务，我们以全方位的专业能力，为每一个电力工程项目保驾护航。
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {advantages.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-slate-900/80" />
          <div className="relative z-10 px-8 py-14 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                为您的项目定制专属电力解决方案
              </h3>
              <p className="text-slate-300 text-lg max-w-xl">
                我们的技术团队将在48小时内为您提供详细的技术方案与报价，助力项目高效落地。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap"
              >
                立即咨询
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#cases');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap"
              >
                查看案例
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
