import { FlaskConical, ShieldCheck, Cpu, HeartPulse, Microscope, Zap } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '严格质量管控',
    description: '通过 ISO 13485 国际质量管理体系认证，每件产品经过多道严格检测，确保安全可靠。',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Cpu,
    title: '智能化技术',
    description: '融合 AI 算法与物联网技术，实现设备远程监控、数据分析与智能预警，提升诊疗效率。',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: HeartPulse,
    title: '精准诊断支持',
    description: '高精度传感器与先进信号处理技术，提供毫秒级响应的生命体征监测数据。',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: FlaskConical,
    title: '持续研发创新',
    description: '设立专业研发中心，每年投入营收的15%用于技术研发，持续推出行业领先产品。',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Microscope,
    title: '全面产品线',
    description: '覆盖监护、影像、检验、手术等多个领域，为医疗机构提供一站式器械解决方案。',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Zap,
    title: '快速响应服务',
    description: '全国200+服务网点，7×24小时技术支持，承诺4小时内响应、24小时内到场维修。',
    color: 'bg-amber-50 text-amber-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            产品优势
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            为什么选择华康医疗
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            二十年专注医疗器械领域，以技术创新和品质保障赢得行业信赖
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
