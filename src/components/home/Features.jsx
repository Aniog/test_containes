import React from 'react'
import { Shield, Cog, Clock, Award, Wrench, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium-grade steel ensures decades of reliable operation in demanding environments.',
  },
  {
    icon: Cog,
    title: 'CNC Precision',
    description: 'Advanced CNC controls deliver repeatable accuracy within 0.1mm, bend after bend, shift after shift.',
  },
  {
    icon: Clock,
    title: 'Fast Setup',
    description: 'Quick-change tooling and intuitive controls reduce setup time by up to 60% compared to conventional folders.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'Every machine is built and tested under ISO 9001 quality management standards for total confidence.',
  },
  {
    icon: Wrench,
    title: 'Global Support',
    description: 'Dedicated technical support team and spare parts network spanning 50+ countries for minimal downtime.',
  },
  {
    icon: Globe,
    title: 'Custom Solutions',
    description: 'Tailored machine configurations and tooling packages designed around your specific production requirements.',
  },
]

const Features = () => (
  <section id="features" className="py-20 md:py-28 bg-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
          Engineering Excellence
        </h2>
        <p className="text-white/60 text-lg">
          Every ARTITECT machine is designed with one goal — to make your metal folding operations faster, more precise, and more profitable.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="group p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Features
