import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: '免费版',
    price: '¥0',
    period: '永久免费',
    desc: '适合个人创作者入门体验',
    features: ['5 个创作项目', '基础模板库', '社区支持', '1GB 存储空间'],
    cta: '免费开始',
    highlight: false,
  },
  {
    name: '专业版',
    price: '¥99',
    period: '每月',
    desc: '适合专业创作者与小团队',
    features: ['无限创作项目', '全部高级模板', 'AI 辅助创作', '100GB 存储空间', '优先客服支持', '数据分析报告'],
    cta: '立即升级',
    highlight: true,
  },
  {
    name: '企业版',
    price: '¥499',
    period: '每月',
    desc: '适合大型团队与企业客户',
    features: ['专属工作空间', '团队协作功能', '自定义品牌', '无限存储空间', '专属客户经理', 'API 接入权限'],
    cta: '联系销售',
    highlight: false,
  },
];

const PlanCard = ({ name, price, period, desc, features, cta, highlight }) => (
  <div
    className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 ${
      highlight
        ? 'bg-gradient-to-br from-purple-700/60 to-violet-700/60 border-2 border-purple-400/60 shadow-xl shadow-purple-600/30'
        : 'bg-purple-900/40 border border-purple-700/40 shadow-lg shadow-purple-950/50'
    }`}
  >
    {highlight && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
        最受欢迎
      </div>
    )}
    <div>
      <div className="text-purple-300 text-sm font-semibold uppercase tracking-wider mb-1">{name}</div>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="text-purple-400 text-sm mb-1">/ {period}</span>
      </div>
      <p className="text-purple-300 text-sm">{desc}</p>
    </div>

    <ul className="flex flex-col gap-3 flex-1">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-purple-200 text-sm">
          <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
          {f}
        </li>
      ))}
    </ul>

    <a
      href="#"
      className={`flex items-center justify-center gap-2 font-semibold py-3 rounded-full transition-all duration-200 hover:scale-105 ${
        highlight
          ? 'bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white shadow-md shadow-purple-600/40'
          : 'border border-purple-500/60 text-purple-200 hover:bg-purple-800/40 hover:text-white'
      }`}
    >
      {cta}
      <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

const CtaSection = () => {
  return (
    <section id="cta" className="bg-purple-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-800/50 border border-purple-600/40 text-purple-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            定价方案
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            选择适合你的
            <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent"> 创作计划</span>
          </h2>
          <p className="text-purple-300 text-base max-w-xl mx-auto">
            无论你是个人创作者还是大型团队，我们都有最适合你的方案。
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <PlanCard key={p.name} {...p} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-purple-400 text-sm mt-10">
          所有方案均支持 14 天免费试用，无需绑定信用卡。
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
