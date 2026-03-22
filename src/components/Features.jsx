import React from 'react'
import { Zap, Shield, Users, Smartphone, BarChart3, Headphones } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your business online in minutes, not months. Our streamlined process ensures rapid deployment and immediate results."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee. Your business data is protected with industry-leading encryption."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with seasoned professionals who understand your industry. Get personalized guidance every step of the way."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Fully responsive designs that look perfect on any device. Reach your customers wherever they are."
    },
    {
      icon: BarChart3,
      title: "Analytics Driven",
      description: "Make data-driven decisions with comprehensive analytics and reporting. Track your success in real-time."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support from real humans. We're here whenever you need assistance."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to take your business to the next level. 
            From cutting-edge technology to expert support, we've got you covered.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
            <span className="text-gray-700 font-medium">Ready to get started?</span>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features