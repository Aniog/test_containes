import React from 'react'
import { Link } from 'react-router-dom'
import { Settings, Ruler, Zap, Shield, ArrowRight } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Settings,
      title: 'Precision Engineering',
      description: 'Micrometer-level accuracy in every fold, ensuring consistent results across all production runs.',
    },
    {
      icon: Ruler,
      title: 'Versatile Capabilities',
      description: 'Handle various sheet metal thicknesses and materials with our adaptable folding solutions.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized cycle times and rapid setup changes maximize your production efficiency.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Heavy-duty construction and premium components ensure decades of reliable operation.',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="section-title mt-3">Engineered for Excellence</h2>
          <p className="section-subtitle mt-4">
            Every Artitect machine is built with uncompromising quality and precision, 
            delivering reliable performance for your most demanding applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
