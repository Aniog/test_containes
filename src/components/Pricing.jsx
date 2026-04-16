const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small projects.',
    features: ['5,000 AI requests/month', '3 integrations', 'Basic analytics', 'Community support'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing teams that need more power.',
    features: ['100,000 AI requests/month', 'Unlimited integrations', 'Advanced analytics', 'Priority support', 'Custom AI training', 'API access'],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with custom needs.',
    features: ['Unlimited AI requests', 'Dedicated infrastructure', 'SLA guarantee', '24/7 dedicated support', 'Custom model training', 'SSO & compliance'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#07091a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map(({ name, price, period, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                highlight
                  ? 'bg-gradient-to-b from-violet-600/20 to-blue-600/10 border-violet-500/40 shadow-2xl shadow-violet-500/10 scale-105'
                  : 'bg-white/[0.03] border-white/[0.07] hover:border-white/15'
              }`}
            >
              {highlight && (
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-violet-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
              <p className="text-slate-400 text-sm mb-4">{description}</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{price}</span>
                <span className="text-slate-400 text-sm ml-2">/ {period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  highlight
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-lg shadow-violet-500/25'
                    : 'border border-white/10 hover:border-white/20 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
