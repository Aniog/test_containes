import React from 'react'
import { Link } from 'react-router-dom'
import { Settings, Shield, Award, Users } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Every machine is built with tight tolerances and calibrated for consistent, accurate folds.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction and premium components ensure years of reliable operation.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All products meet international quality and safety standards for industrial machinery.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical support team available for installation, training, and maintenance.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Why Choose ARTITECT</h2>
          <p className="section-subtitle mx-auto">
            Decades of expertise in metal folding technology, delivering machines that perform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <feature.icon size={24} className="text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold uppercase tracking-wide text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
