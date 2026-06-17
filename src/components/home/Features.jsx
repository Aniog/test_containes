import React from 'react'
import {
  Shield,
  Cog,
  Gauge,
  Wrench,
  HeadphonesIcon,
  Award,
} from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'Every machine is built with tolerances down to 0.01mm, ensuring consistent, repeatable results across all bending operations.',
  },
  {
    icon: Cog,
    title: 'Advanced CNC Technology',
    description: 'State-of-the-art CNC controls with intuitive touch-screen interfaces and programmable bending sequences for complex parts.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty welded steel frames and premium components guarantee decades of reliable service in demanding production environments.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with quick-access panels and standardized parts makes routine maintenance fast and cost-effective.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Global Support',
    description: '24/7 technical support with remote diagnostics, on-site service teams, and comprehensive training programs worldwide.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'ISO 9001 certified manufacturing with CE compliance. Every machine undergoes rigorous quality testing before delivery.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
            The ARTITECT Advantage
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Decades of engineering excellence combined with cutting-edge technology 
            deliver machines that outperform and outlast the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-gold-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
