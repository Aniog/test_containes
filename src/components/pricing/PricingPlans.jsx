import { Check, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for personal projects and exploring ArcaneAI.',
    cta: 'Start free',
    ctaLink: '/product#contact',
    highlight: false,
    features: [
      { label: '3 websites', included: true },
      { label: 'AI content generation', included: true },
      { label: 'Basic templates', included: true },
      { label: 'ArcaneAI subdomain', included: true },
      { label: 'Custom domain', included: false },
      { label: 'Analytics dashboard', included: false },
      { label: 'Priority support', included: false },
      { label: 'White-label export', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professionals and growing businesses who need more power.',
    cta: 'Start Pro trial',
    ctaLink: '/product#contact',
    highlight: true,
    badge: 'Most Popular',
    features: [
      { label: 'Unlimited websites', included: true },
      { label: 'AI content generation', included: true },
      { label: 'All templates', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Analytics dashboard', included: true },
      { label: 'Priority support', included: true },
      { label: 'White-label export', included: false },
      { label: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large teams and agencies with advanced requirements.',
    cta: 'Talk to sales',
    ctaLink: '/product#contact',
    highlight: false,
    features: [
      { label: 'Unlimited websites', included: true },
      { label: 'AI content generation', included: true },
      { label: 'All templates', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Analytics dashboard', included: true },
      { label: 'Priority support', included: true },
      { label: 'White-label export', included: true },
      { label: 'Dedicated account manager', included: true },
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            No hidden fees. No surprises. Start free and scale as you grow.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-slate-900 text-white border border-slate-700 shadow-2xl shadow-slate-900/20'
                  : 'bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-slate-900 text-xs font-semibold px-3 py-1 rounded-full border border-dashed border-slate-300 shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-semibold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Dashed divider */}
              <div className={`border-t border-dashed mb-6 ${plan.highlight ? 'border-slate-700' : 'border-slate-200'}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat.label} className="flex items-center gap-3">
                    {feat.included ? (
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-green-400' : 'text-slate-400'}`} />
                    ) : (
                      <Minus className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-slate-700' : 'text-slate-200'}`} />
                    )}
                    <span
                      className={`text-sm ${
                        feat.included
                          ? plan.highlight ? 'text-slate-200' : 'text-slate-700'
                          : plan.highlight ? 'text-slate-600' : 'text-slate-300'
                      }`}
                    >
                      {feat.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.ctaLink}
                className={`block text-center py-3 rounded-xl font-medium text-sm transition-colors ${
                  plan.highlight
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p className="text-center text-sm text-slate-400 mt-10">
          All plans include a 14-day free trial. No credit card required.{' '}
          <Link to="/product#contact" className="text-slate-600 underline underline-offset-4 hover:text-slate-900">
            Questions? Contact us.
          </Link>
        </p>
      </div>
    </section>
  );
}
