import React from 'react'
import { Shield, Cog, Clock, Award, Wrench, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Precision Engineering',
    description: 'Every machine is built to 0.1mm tolerance standards, ensuring consistent, repeatable results across all operations.',
  },
  {
    icon: Cog,
    title: 'Advanced CNC Control',
    description: 'State-of-the-art CNC systems with intuitive interfaces, enabling complex bending sequences with minimal setup time.',
  },
  {
    icon: Clock,
    title: 'High Productivity',
    description: 'Designed for continuous operation with rapid cycle times, maximizing your production output and ROI.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001 certified manufacturing with rigorous quality control at every stage of production.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible components reduces downtime and simplifies routine maintenance procedures.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide service network with fast response times, spare parts availability, and technical assistance.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Why Choose Us</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Built for <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Decades of engineering expertise go into every machine we build. Here is what sets ARTITECT apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 md:p-8 bg-navy-medium border border-navy-light/30 rounded-lg hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '3,000+', label: 'Machines Delivered' },
            { value: '60+', label: 'Countries Served' },
            { value: '99.5%', label: 'Customer Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-navy-medium/50 border border-navy-light/20 rounded-lg">
              <div className="text-3xl md:text-4xl font-extrabold text-gold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
