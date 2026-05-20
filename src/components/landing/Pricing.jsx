import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    desc: 'Perfect for getting started and exploring.',
    monthly: 0,
    annual: 0,
    features: ['1 website', 'Strikingly subdomain', '5 GB bandwidth/month', 'Basic templates', 'SSL certificate', 'Mobile-optimized'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    desc: 'For creators and small businesses ready to grow.',
    monthly: 8,
    annual: 4,
    features: ['3 websites', 'Custom domain', 'Unlimited bandwidth', 'All premium templates', 'Remove Strikingly branding', 'Online store (up to 300 products)', 'Priority support', 'Advanced analytics'],
    cta: 'Start Pro Trial',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'VIP',
    desc: 'For power users and growing businesses.',
    monthly: 25,
    annual: 13,
    features: ['Unlimited websites', 'Custom domain', 'Unlimited bandwidth', 'Unlimited store products', 'Dedicated account manager', 'Custom code injection', 'Team collaboration', 'White-label option'],
    cta: 'Go VIP',
    highlight: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-500 text-lg mb-8">Start free, upgrade when you're ready. No hidden fees, no surprises.</p>

          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              Annual
              <span className="bg-violet-600 text-white text-xs px-2 py-0.5 rounded-full">Save 50%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(plan => (
            <div key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${plan.highlight
                ? 'bg-violet-600 text-white shadow-2xl shadow-violet-300 scale-105'
                : 'bg-white border border-gray-200 text-gray-900'}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-violet-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-violet-100">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-violet-200' : 'text-gray-500'}`}>{plan.desc}</p>
              </div>

              <div className="flex items-end gap-1 mb-8">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span className={`text-sm mb-1.5 ${plan.highlight ? 'text-violet-200' : 'text-gray-500'}`}>/mo</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-violet-200' : 'text-violet-600'}`} />
                    <span className={plan.highlight ? 'text-violet-100' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#"
                className={`block text-center font-semibold py-3 rounded-full transition-colors ${plan.highlight
                  ? 'bg-white text-violet-700 hover:bg-violet-50'
                  : 'border border-violet-600 text-violet-600 hover:bg-violet-50'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">All plans include a 14-day free trial. No credit card required.</p>
      </div>
    </section>
  )
}
