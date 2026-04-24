import { Check, Zap } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for personal projects and experimentation.',
    features: ['3 AI-generated pages', '10K monthly visitors', 'Basic analytics', 'Community support', 'AI content suggestions'],
    cta: 'Get Started Free',
    highlight: false,
    gradient: 'from-gray-600 to-gray-500',
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: 'For creators and small businesses ready to scale.',
    features: ['Unlimited pages', '500K monthly visitors', 'Advanced analytics', 'Priority support', 'Custom domain', 'AI SEO optimizer', 'Remove branding'],
    cta: 'Start Pro Trial',
    highlight: true,
    gradient: 'from-violet-600 to-cyan-500',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'For teams and organizations with advanced needs.',
    features: ['Everything in Pro', 'Unlimited traffic', 'Dedicated AI model', 'SLA guarantee', 'SSO & team roles', 'API access', 'Custom integrations'],
    cta: 'Contact Sales',
    highlight: false,
    gradient: 'from-fuchsia-600 to-violet-600',
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-[#050816] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fuchsia-400 text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              transparent
            </span>{' '}
            pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            No hidden fees. Cancel anytime. Start free and upgrade when you're ready.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly
              <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">-35%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? 'border-2 border-violet-500 bg-gradient-to-b from-violet-900/30 to-cyan-900/10 shadow-2xl shadow-violet-500/20'
                  : 'border border-white/10 bg-white/5'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Zap className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-white">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 text-sm mb-2">/mo</span>
                </div>
                {yearly && plan.monthlyPrice > 0 && (
                  <p className="text-emerald-400 text-xs mt-1">
                    Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-violet-500/30'
                    : 'border border-white/20 text-white hover:bg-white/10'
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
};

export default Pricing;
