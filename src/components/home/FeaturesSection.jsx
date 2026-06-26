import React from 'react'
import { Award, Wrench, HeadphonesIcon, Truck, Clock, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'German Engineering',
    description: 'Precision-crafted components and rigorous quality control ensure every machine meets exacting European standards.',
  },
  {
    icon: Wrench,
    title: 'Full Service Support',
    description: 'Comprehensive installation, training, and ongoing maintenance services to keep your production running smoothly.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Technical Support',
    description: 'Dedicated engineers available 24/7 for remote diagnostics, troubleshooting, and on-site assistance when needed.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    description: 'Streamlined shipping and customs handling ensures your machinery arrives safely and on time, anywhere in the world.',
  },
  {
    icon: Clock,
    title: 'Fast Lead Times',
    description: 'Optimized production scheduling and inventory management allow us to deliver most standard machines within 4-6 weeks.',
  },
  {
    icon: ShieldCheck,
    title: '2-Year Warranty',
    description: 'Industry-leading warranty coverage gives you peace of mind with parts and labor included for two full years.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Built for Performance. Backed by Service.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Every machine we sell is backed by decades of expertise, a global support network, and an unwavering commitment to quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-xl p-6 md:p-8 border border-border-subtle transition-all duration-300 hover:shadow-md hover:border-brand-accent/30"
              >
                <div className="w-12 h-12 bg-brand-dark/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-dark/10 transition-colors">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
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