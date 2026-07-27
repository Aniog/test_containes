import { Check } from 'lucide-react';

const plans = [
  {
    name: '免费版',
    price: '¥0',
    period: '永久免费',
    desc: '适合个人探索与小型项目',
    features: ['5 个项目', '基础模板', '社区支持', '1GB 存储空间'],
    cta: '免费开始',
    highlight: false,
  },
  {
    name: '专业版',
    price: '¥99',
    period: '每月',
    desc: '适合成长中的团队与企业',
    features: ['无限项目', '高级模板', '优先支持', '50GB 存储空间', '自定义域名', '数据分析'],
    cta: '立即升级',
    highlight: true,
  },
  {
    name: '企业版',
    price: '定制',
    period: '联系我们',
    desc: '适合大型企业与特殊需求',
    features: ['无限一切', '专属客户经理', 'SLA 保障', '无限存储', 'SSO 单点登录', 'API 访问'],
    cta: '联系销售',
    highlight: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 px-6 bg-[#0f0520]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">定价方案</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          简单透明的定价
        </h2>
        <p className="text-violet-300 text-lg max-w-xl mx-auto">
          无隐藏费用，按需选择最适合您的方案
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 border transition-all ${
              plan.highlight
                ? 'bg-gradient-to-b from-purple-700/50 to-purple-900/40 border-purple-500 shadow-2xl shadow-purple-900/60 scale-105'
                : 'bg-gradient-to-br from-purple-900/20 to-violet-900/10 border-purple-600/25 hover:border-purple-500/50'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                最受欢迎
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-purple-200 mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-violet-400 text-sm mb-1">/{plan.period}</span>
              </div>
              <p className="text-violet-400 text-sm">{plan.desc}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-purple-100">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`block text-center font-semibold py-3 rounded-xl transition-all ${
                plan.highlight
                  ? 'bg-white text-purple-800 hover:bg-purple-50 shadow-lg'
                  : 'border border-purple-500/60 text-purple-200 hover:bg-purple-900/40'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
