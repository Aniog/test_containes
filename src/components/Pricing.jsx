import React, { useState } from 'react'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for individuals and small projects",
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        "3 AI-generated websites",
        "Basic templates",
        "Mobile responsive design",
        "SSL certificate included",
        "Basic SEO optimization",
        "Email support"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for businesses and agencies",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Unlimited AI websites",
        "Premium templates",
        "Advanced customization",
        "Custom domain included",
        "Advanced SEO tools",
        "E-commerce integration",
        "Analytics dashboard",
        "Priority support",
        "White-label options"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "For large organizations with custom needs",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Everything in Professional",
        "Custom AI training",
        "API access",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom branding",
        "SLA guarantee",
        "24/7 phone support",
        "Team collaboration tools",
        "Advanced security features"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include our core AI website building features.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">${price}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-500 mt-1">
                      Billed annually (${price * 12}/year)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button 
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            )
          })}
        </div>

        {/* FAQ section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
              <p className="text-gray-600">Yes! All plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What if I need more websites?</h4>
              <p className="text-gray-600">Professional and Enterprise plans include unlimited websites. Starter plan can be upgraded anytime.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee if you're not completely satisfied.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing