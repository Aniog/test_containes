import { Check, Zap, Building2, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: '免费版',
    price: '¥0',
    period: '/月',
    description: '适合个人开发者探索和学习',
    icon: Zap,
    iconColor: 'text-slate-400',
    iconBg: 'bg-slate-500/10',
    features: [
      '每月 50 次 Agent 任务',
      '基础代码补全',
      '支持 10 种主流语言',
      '单文件上下文分析',
      '社区支持',
    ],
    cta: '免费开始',
    ctaStyle: 'border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50',
    popular: false,
  },
  {
    name: '专业版',
    price: '¥99',
    period: '/月',
    description: '适合专业开发者和小型团队',
    icon: Zap,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    features: [
      '无限 Agent 任务',
      '完整代码库上下文',
      '支持 100+ 语言和框架',
      '自动测试生成',
      'Git 工作流集成',
      '安全漏洞扫描',
      '优先邮件支持',
      '每月 API 调用 100K 次',
    ],
    cta: '开始 14 天免费试用',
    ctaStyle: 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25',
    popular: true,
  },
  {
    name: '企业版',
    price: '定制',
    period: '',
    description: '适合大型团队和企业级需求',
    icon: Building2,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    features: [
      '无限团队成员',
      '私有化部署选项',
      '自定义模型微调',
      'SSO / SAML 集成',
      'SOC 2 合规认证',
      '专属客户成功经理',
      '99.9% SLA 保障',
      '无限 API 调用',
    ],
    cta: '联系销售团队',
    ctaStyle: 'border border-emerald-400 hover:border-emerald-500 text-emerald-600 hover:bg-emerald-50',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-100/60 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-violet-700 text-sm font-medium">定价方案</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            简单透明的定价
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            从免费版开始，随着需求增长随时升级。所有方案均包含核心 AI 功能，无隐藏费用。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border border-violet-300 shadow-xl shadow-violet-100 scale-105'
                    : 'border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      最受欢迎
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div className={`w-10 h-10 rounded-xl ${plan.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${plan.iconColor}`} />
                  </div>
                  <div className="text-gray-900 font-bold text-xl mb-1">{plan.name}</div>
                  <div className="text-gray-400 text-sm">{plan.description}</div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-400 text-sm mb-1.5">{plan.period}</span>
                    )}
                  </div>
                  {plan.popular && (
                    <div className="text-gray-400 text-xs mt-1">按年付费可节省 20%</div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            有疑问？查看{' '}
            <a href="#" className="text-violet-600 hover:text-violet-500 transition-colors">
              常见问题
            </a>
            {' '}或{' '}
            <a href="#" className="text-violet-600 hover:text-violet-500 transition-colors">
              联系我们
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
