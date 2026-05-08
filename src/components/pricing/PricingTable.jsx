import { Check, X, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for personal projects and exploring NexusAI.',
    cta: 'Get Started Free',
    ctaStyle: 'border border-slate-200 text-slate-900 hover:bg-slate-50',
    highlight: false,
    features: [
      { label: '3 AI-generated sites', included: true },
      { label: 'NexusAI subdomain', included: true },
      { label: 'Basic AI editor', included: true },
      { label: '5GB storage', included: true },
      { label: 'Custom domain', included: false },
      { label: 'Advanced AI modules', included: false },
      { label: 'Analytics dashboard', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professionals and growing businesses.',
    cta: 'Start Pro Trial',
    ctaStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200',
    highlight: true,
    badge: 'Most Popular',
    features: [
      { label: 'Unlimited AI-generated sites', included: true },
      { label: 'Custom domain included', included: true },
      { label: 'Full AI editor suite', included: true },
      { label: '50GB storage', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Advanced AI modules', included: true },
      { label: 'Analytics dashboard', included: true },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For teams and organizations at scale.',
    cta: 'Contact Sales',
    ctaStyle: 'border border-slate-200 text-slate-900 hover:bg-slate-50',
    highlight: false,
    features: [
      { label: 'Unlimited everything', included: true },
      { label: 'Custom domain included', included: true },
      { label: 'Full AI editor suite', included: true },
      { label: 'Unlimited storage', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Advanced AI modules', included: true },
      { label: 'Analytics dashboard', included: true },
      { label: 'Priority support', included: true },
    ],
  },
]

export default function PricingTable() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            No hidden fees. No surprises. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, description, cta, ctaStyle, highlight, badge, features }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                highlight
                  ? 'bg-slate-950 text-white ring-2 ring-indigo-500 shadow-2xl shadow-indigo-100'
                  : 'bg-white border border-slate-100'
              }`}
            >
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className={`text-lg font-bold mb-1 ${highlight ? 'text-white' : 'text-slate-900'}`}>{name}</h3>
                <p className={`text-sm ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
              </div>

              <div>
                <span className={`text-5xl font-black ${highlight ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                <span className={`text-sm ml-2 ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>/{period}</span>
              </div>

              <Link
                to="/product"
                className={`w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors ${ctaStyle}`}
              >
                {cta}
              </Link>

              <ul className="space-y-3">
                {features.map(({ label, included }) => (
                  <li key={label} className="flex items-center gap-3">
                    {included ? (
                      <Check className={`w-4 h-4 flex-shrink-0 ${highlight ? 'text-indigo-400' : 'text-indigo-500'}`} />
                    ) : (
                      <X className={`w-4 h-4 flex-shrink-0 ${highlight ? 'text-slate-600' : 'text-slate-300'}`} />
                    )}
                    <span className={`text-sm ${
                      included
                        ? highlight ? 'text-slate-200' : 'text-slate-700'
                        : highlight ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
