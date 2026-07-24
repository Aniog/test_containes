import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$2,900',
    blurb: 'Perfect for a focused landing page or brand refresh.',
    features: ['1-page website', 'Brand color & type kit', '2 revision rounds', 'Launch in 2 weeks'],
    highlighted: false,
  },
  {
    name: 'Studio',
    price: '$7,500',
    blurb: 'Our most popular package for growing teams.',
    features: [
      'Up to 6-page website',
      'Full brand identity',
      'CMS & analytics setup',
      '4 revision rounds',
      '30 days of support',
    ],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    blurb: 'For products and campaigns with ongoing needs.',
    features: ['Dedicated design team', 'Design system', 'Weekly iterations', 'Priority support'],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Simple packages, honest pricing
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
            Pick a package to get started — every engagement begins with a free
            discovery call.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl p-6 md:p-8 border shadow-sm flex flex-col ${
                plan.highlighted
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{plan.price}</p>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.highlighted ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {plan.blurb}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? 'text-indigo-300' : 'text-indigo-600'
                      }`}
                    />
                    <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
