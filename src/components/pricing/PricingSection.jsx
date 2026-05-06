import { Check, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for personal projects and exploring AetherAI.',
    cta: 'Start Free',
    ctaVariant: 'outline',
    popular: false,
    features: [
      { label: '3 websites', included: true },
      { label: 'AI generation (10/mo)', included: true },
      { label: 'Custom domain', included: false },
      { label: 'Remove branding', included: false },
      { label: 'Analytics dashboard', included: false },
      { label: 'Priority support', included: false },
      { label: 'Team collaboration', included: false },
      { label: 'API access', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professionals and growing businesses.',
    cta: 'Start Pro Trial',
    ctaVariant: 'default',
    popular: true,
    features: [
      { label: 'Unlimited websites', included: true },
      { label: 'AI generation (unlimited)', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Remove branding', included: true },
      { label: 'Analytics dashboard', included: true },
      { label: 'Priority support', included: true },
      { label: 'Team collaboration', included: false },
      { label: 'API access', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large teams with advanced security and compliance needs.',
    cta: 'Contact Sales',
    ctaVariant: 'outline',
    popular: false,
    features: [
      { label: 'Unlimited websites', included: true },
      { label: 'AI generation (unlimited)', included: true },
      { label: 'Custom domain', included: true },
      { label: 'Remove branding', included: true },
      { label: 'Analytics dashboard', included: true },
      { label: 'Priority support', included: true },
      { label: 'Team collaboration', included: true },
      { label: 'API access', included: true },
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-32 px-6 relative">
      {/* Dashed grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Simple, transparent
            <br />
            <span className="text-white/30">pricing.</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            Start free. Scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? 'border-white/30 bg-white/[0.06]'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-white text-black border-0 font-medium px-3">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Dashed corner */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-dashed border-white/15 rounded-tr" />

              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/40 text-sm ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-white/70 shrink-0" />
                    ) : (
                      <Minus className="w-4 h-4 text-white/20 shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-white/70' : 'text-white/25'}`}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to={plan.name === 'Enterprise' ? '/product#contact' : '/product'}>
                <Button
                  variant={plan.ctaVariant}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-white/25 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
