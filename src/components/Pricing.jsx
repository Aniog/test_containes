const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small projects.',
    features: ['1,000 AI requests/month', '3 projects', 'Basic analytics', 'Community support'],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing teams that need more power.',
    features: ['100,000 AI requests/month', 'Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom AI training', 'API access'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with custom needs.',
    features: ['Unlimited requests', 'Dedicated infrastructure', 'SLA guarantee', '24/7 dedicated support', 'SSO & SAML', 'Custom integrations'],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Simple,{' '}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-violet-600/20 to-blue-600/10 border-2 border-violet-500/50 shadow-2xl shadow-violet-500/10 scale-105'
                  : 'bg-white/[0.03] border border-white/[0.08] card-glow'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400 text-sm ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-emerald-400 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
