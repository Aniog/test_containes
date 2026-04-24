import { Check, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for personal projects and early-stage startups.',
    cta: 'Get started free',
    ctaLink: '/product',
    highlight: false,
    features: [
      { label: '1 website', included: true },
      { label: 'AI site generation', included: true },
      { label: '5 AI edits / month', included: true },
      { label: 'Arcis subdomain', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Custom domain', included: false },
      { label: 'Remove Arcis branding', included: false },
      { label: 'Priority support', included: false },
      { label: 'Team collaboration', included: false },
      { label: 'API access', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing businesses that need more power and flexibility.',
    cta: 'Start Pro trial',
    ctaLink: '/product',
    highlight: true,
    badge: 'Most popular',
    features: [
      { label: '5 websites', included: true },
      { label: 'AI site generation', included: true },
      { label: 'Unlimited AI edits', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Advanced analytics', included: true },
      { label: 'Remove Arcis branding', included: true },
      { label: 'Priority support', included: true },
      { label: 'Team collaboration', included: false },
      { label: 'API access', included: false },
      { label: 'White-label exports', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For teams and agencies managing multiple client sites at scale.',
    cta: 'Contact sales',
    ctaLink: '/product#contact',
    highlight: false,
    features: [
      { label: 'Unlimited websites', included: true },
      { label: 'AI site generation', included: true },
      { label: 'Unlimited AI edits', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Enterprise analytics', included: true },
      { label: 'Remove Arcis branding', included: true },
      { label: 'Dedicated support', included: true },
      { label: 'Team collaboration', included: true },
      { label: 'API access', included: true },
      { label: 'White-label exports', included: true },
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Dashed decoration */}
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Start free. Scale when you're ready. No hidden fees, ever.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-gray-900 border-gray-900 shadow-2xl shadow-gray-900/20'
                  : 'bg-white border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(({ label, included }) => (
                  <li key={label} className="flex items-center gap-3">
                    {included ? (
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-indigo-400' : 'text-green-500'}`} />
                    ) : (
                      <Minus className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-gray-700' : 'text-gray-300'}`} />
                    )}
                    <span className={`text-sm ${
                      included
                        ? plan.highlight ? 'text-gray-300' : 'text-gray-700'
                        : plan.highlight ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={plan.ctaLink}
                className={`block text-center text-sm font-semibold px-6 py-3 rounded-xl transition-all ${
                  plan.highlight
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          All plans include SSL, CDN, and automatic backups. Annual billing saves 20%.
        </p>
      </div>
    </section>
  );
}
