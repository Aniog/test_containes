import { Check, Minus, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for personal projects and exploring NeuralBuild.',
    cta: 'Get started free',
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    highlight: false,
    features: [
      { label: '3 AI-generated sites', included: true },
      { label: 'NeuralBuild subdomain', included: true },
      { label: '1 GB storage', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Custom domain', included: false },
      { label: 'Remove NeuralBuild branding', included: false },
      { label: 'Priority support', included: false },
      { label: 'Team collaboration', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professionals and growing businesses that need more power.',
    cta: 'Start Pro trial',
    ctaStyle: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200',
    highlight: true,
    badge: 'Most popular',
    features: [
      { label: 'Unlimited AI-generated sites', included: true },
      { label: 'Custom domain included', included: true },
      { label: '20 GB storage', included: true },
      { label: 'Advanced analytics', included: true },
      { label: 'Remove NeuralBuild branding', included: true },
      { label: 'Priority email support', included: true },
      { label: 'Team collaboration (3 seats)', included: false },
      { label: 'Dedicated onboarding', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For teams and organizations with advanced needs and SLA requirements.',
    cta: 'Contact sales',
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    highlight: false,
    features: [
      { label: 'Unlimited AI-generated sites', included: true },
      { label: 'Custom domain included', included: true },
      { label: 'Unlimited storage', included: true },
      { label: 'Advanced analytics + exports', included: true },
      { label: 'Remove NeuralBuild branding', included: true },
      { label: '24/7 priority support', included: true },
      { label: 'Team collaboration (unlimited)', included: true },
      { label: 'Dedicated onboarding specialist', included: true },
    ],
  },
]

export default function PricingPlans() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-xs font-semibold mb-4">
            Pricing
          </div>
          <h2 id="pricing-title" className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 border transition-all ${
                plan.highlight
                  ? 'border-indigo-200 bg-indigo-50/30 shadow-xl shadow-indigo-100/50 scale-[1.02]'
                  : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                  <Zap className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              {/* Dashed corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-dashed border-slate-200 rounded-tr-lg pointer-events-none" />

              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-400 text-sm ml-2">{plan.period}</span>
              </div>

              <Link
                to="/product"
                className={`block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold transition-colors mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </Link>

              <div className="border-t border-dashed border-slate-200 pt-6 space-y-3">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3">
                    {feat.included ? (
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    ) : (
                      <Minus className="w-4 h-4 text-slate-300 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feat.included ? 'text-slate-700' : 'text-slate-400'}`}>
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p className="text-center text-sm text-slate-400 mt-10">
          All plans include a 14-day free trial. No credit card required to start.{' '}
          <Link to="/product" className="text-indigo-600 hover:underline font-medium">
            Questions? Contact us →
          </Link>
        </p>
      </div>
    </section>
  )
}
