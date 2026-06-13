import React from 'react'
import { Shield, Cog, Clock, Award, Wrench, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium-grade steel ensures decades of reliable operation in the toughest environments.',
  },
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Every machine is calibrated to deliver sub-millimeter accuracy, ensuring consistent results across every fold.',
  },
  {
    icon: Clock,
    title: 'High Efficiency',
    description: 'Optimized workflow design reduces setup time and increases throughput, maximizing your production capacity.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'ISO 9001 certified manufacturing processes with CE compliance for international quality assurance.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible components makes routine maintenance simple and minimizes downtime.',
  },
  {
    icon: TrendingUp,
    title: 'Global Support',
    description: 'Comprehensive after-sales service network with technical support, spare parts, and training programs worldwide.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-3 mb-4">
            The ARTITECT Advantage
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base leading-relaxed">
            Decades of engineering excellence and customer-focused innovation set our machines apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-warmwhite rounded-lg p-8 border border-warmborder hover:border-gold/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
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
