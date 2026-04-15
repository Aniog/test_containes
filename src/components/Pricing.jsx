const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for personal projects and trying out AI Site.',
    features: ['1 website', 'AI design generation', 'Basic analytics', '5GB storage', 'Community support'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professionals and growing businesses.',
    features: [
      '10 websites',
      'Advanced AI content generation',
      'Full analytics suite',
      '50GB storage',
      'Custom domain',
      'Priority support',
      'SEO tools',
    ],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For teams and large-scale operations.',
    features: [
      'Unlimited websites',
      'White-label AI tools',
      'Advanced security',
      '500GB storage',
      'Dedicated account manager',
      'API access',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl p-6 flex flex-col gap-5 ${
                highlight
                  ? 'bg-gradient-to-b from-violet-600/20 to-indigo-600/10 border-2 border-violet-500/50 shadow-xl shadow-violet-900/30 relative'
                  : 'bg-gray-800/60 border border-white/10'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div>
                <div className="text-gray-400 text-sm font-medium mb-1">{name}</div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{price}</span>
                  {period && <span className="text-gray-400 text-sm mb-1">{period}</span>}
                </div>
                <p className="text-gray-500 text-sm mt-2">{description}</p>
              </div>

              <ul className="space-y-2 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-4 h-4 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-violet-400" fill="none" viewBox="0 0 10 8">
                        <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  highlight
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-900/40'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
