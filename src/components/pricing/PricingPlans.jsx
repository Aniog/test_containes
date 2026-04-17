import { Check, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for personal projects and exploring NexusAI.',
    cta: 'Get started free',
    ctaStyle: 'border border-gray-200 text-gray-900 hover:bg-gray-50',
    highlight: false,
    features: [
      { label: '3 AI-generated pages', included: true },
      { label: 'Basic templates', included: true },
      { label: 'NexusAI subdomain', included: true },
      { label: 'Community support', included: true },
      { label: 'Custom domain', included: false },
      { label: 'Analytics dashboard', included: false },
      { label: 'SEO optimization', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professionals and growing businesses.',
    cta: 'Start Pro trial',
    ctaStyle: 'bg-indigo-600 text-white hover:bg-indigo-500',
    highlight: true,
    badge: 'Most popular',
    features: [
      { label: 'Unlimited AI-generated pages', included: true },
      { label: 'All premium templates', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Priority support', included: true },
      { label: 'Analytics dashboard', included: true },
      { label: 'SEO optimization', included: true },
      { label: 'Code export', included: false },
      { label: 'White-label', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For teams and organizations at scale.',
    cta: 'Contact sales',
    ctaStyle: 'border border-gray-200 text-gray-900 hover:bg-gray-50',
    highlight: false,
    features: [
      { label: 'Unlimited AI-generated pages', included: true },
      { label: 'All premium templates', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Dedicated support', included: true },
      { label: 'Advanced analytics', included: true },
      { label: 'SEO optimization', included: true },
      { label: 'Code export', included: true },
      { label: 'White-label', included: true },
    ],
  },
]

export default function PricingPlans() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dashed background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricegrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricegrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Start free. Scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, description, cta, ctaStyle, highlight, badge, features }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-7 border transition-all ${
                highlight
                  ? 'border-indigo-200 shadow-xl shadow-indigo-100/50 bg-white ring-2 ring-indigo-500/20'
                  : 'border-gray-100 bg-white hover:shadow-md'
              }`}
            >
              {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">{price}</span>
                  <span className="text-gray-500 text-sm">/{period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
              </div>

              <Link
                to={name === 'Enterprise' ? '/product#contact' : '/pricing'}
                className={`block w-full text-center text-sm font-medium py-2.5 rounded-xl transition-colors mb-6 ${ctaStyle}`}
              >
                {cta}
              </Link>

              {/* Divider */}
              <div className="border-t border-dashed border-gray-100 mb-5" />

              <ul className="space-y-3">
                {features.map(({ label, included }) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm">
                    {included ? (
                      <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    ) : (
                      <Minus className="w-4 h-4 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={included ? 'text-gray-700' : 'text-gray-400'}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          All plans include a 14-day free trial. No credit card required.{' '}
          <a href="#" className="text-indigo-600 hover:underline">View full feature comparison →</a>
        </p>
      </div>
    </section>
  )
}
