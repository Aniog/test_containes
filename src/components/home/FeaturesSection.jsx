import { Zap, Shield, Globe, Palette, BarChart2, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '极速创作',
    desc: '借助 AI 辅助工具，将你的创意想法在几秒内转化为精美作品，效率提升 10 倍。',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Palette,
    title: '无限风格',
    desc: '海量紫色系主题模板与设计资源，让每一件作品都独具个性，与众不同。',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Globe,
    title: '全球协作',
    desc: '与来自 150+ 国家的创作者实时协作，打破地域限制，共同创造精彩。',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    icon: Shield,
    title: '安全可靠',
    desc: '企业级数据加密与隐私保护，你的每一份创作都得到最严密的守护。',
    color: 'from-purple-600 to-fuchsia-600',
  },
  {
    icon: BarChart2,
    title: '数据洞察',
    desc: '深度分析你的创作数据与受众行为，用数据驱动更好的创作决策。',
    color: 'from-violet-600 to-purple-600',
  },
  {
    icon: Users,
    title: '社区生态',
    desc: '加入活跃的创作者社区，分享灵感、获取反馈，共同成长进步。',
    color: 'from-indigo-500 to-violet-500',
  },
];

const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <div className="group bg-purple-900/40 border border-purple-700/40 rounded-2xl p-6 backdrop-blur-sm shadow-lg shadow-purple-950/50 hover:border-purple-500/60 hover:bg-purple-800/40 transition-all duration-300 hover:-translate-y-1">
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-md`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-purple-300 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-purple-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-800/50 border border-purple-600/40 text-purple-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            核心功能
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            为创意而生的
            <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent"> 强大工具</span>
          </h2>
          <p className="text-purple-300 text-base md:text-lg max-w-2xl mx-auto">
            我们提供一整套专业工具，帮助你在创作旅程的每一步都保持领先。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
