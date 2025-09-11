import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out AI website building",
      features: [
        "1 AI-generated website",
        "Basic templates",
        "Mobile responsive design",
        "SSL certificate included",
        "Community support",
        "AI Site Builder subdomain"
      ],
      cta: "Start Free",
      popular: false,
      ctaStyle: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
    },
    {
      name: "Professional",
      price: "$19",
      period: "per month",
      description: "Ideal for small businesses and entrepreneurs",
      features: [
        "5 AI-generated websites",
        "Premium templates",
        "Custom domain connection",
        "Advanced AI customization",
        "SEO optimization tools",
        "Email support",
        "Analytics dashboard",
        "E-commerce integration"
      ],
      cta: "Start Free Trial",
      popular: true,
      ctaStyle: "bg-indigo-600 text-white hover:bg-indigo-700"
    },
    {
      name: "Business",
      price: "$49",
      period: "per month",
      description: "For growing businesses with advanced needs",
      features: [
        "Unlimited AI websites",
        "White-label solution",
        "Advanced integrations",
        "Priority support",
        "Custom AI training",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: false,
      ctaStyle: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our powerful AI website builder and come with a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-sm border-2 p-8 ${plan.popular ? 'border-indigo-600 scale-105' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-600 ml-2">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.ctaStyle}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600">No setup fees, no hidden costs. You only pay the monthly subscription fee.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What if I'm not satisfied?</h4>
              <p className="text-gray-600">We offer a 30-day money-back guarantee. If you're not happy, we'll refund your payment.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do I own my website?</h4>
              <p className="text-gray-600">Absolutely! You own all content and can export your website at any time.</p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-50 text-green-800 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            30-Day Money-Back Guarantee
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing