import React from 'react'
import { Shield, Cog, Clock, Award, Wrench, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium-grade steel ensures decades of reliable operation under the most demanding conditions.',
  },
  {
    icon: Cog,
    title: 'CNC Precision',
    description: 'Advanced CNC controls deliver bend accuracy within 0.1mm, ensuring consistent results across every production run.',
  },
  {
    icon: Clock,
    title: 'Rapid Setup',
    description: 'Quick-change tooling and intuitive controls reduce setup time by up to 60%, maximizing your production output.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'All machines meet ISO 9001:2015 quality standards and CE safety requirements for global compliance.',
  },
  {
    icon: Wrench,
    title: 'Full Support',
    description: 'Comprehensive after-sales support including installation, training, and 24/7 technical assistance worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Trusted by manufacturers in over 30 countries, with local service partners across Europe, Asia, and the Americas.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Engineering Excellence
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            Every ARTITECT machine is designed with one goal: to deliver the most precise, reliable, and efficient folding performance in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 hover:shadow-lg hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-sm flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-navy-900 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to upgrade your folding operations?
            </h3>
            <p className="mt-2 text-slate-400 text-lg">
              Get a custom quote tailored to your production needs.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 whitespace-nowrap hover:shadow-lg hover:shadow-gold-500/25"
          >
            Get Your Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Features
