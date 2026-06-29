import React from 'react'
import { Cpu, Wrench, HeadphonesIcon, Clock, BarChart3, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Advanced CNC Control',
    description: 'Intuitive touch-screen interface with programmable bend sequences, material library, and real-time diagnostics for consistent results.',
  },
  {
    icon: Wrench,
    title: 'Tool-Less Changeover',
    description: 'Quick-swap tooling system reduces setup time by up to 80%, keeping your production line moving with minimal downtime.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Dedicated technical support team available around the clock, with remote diagnostics and on-site service options.',
  },
  {
    icon: Clock,
    title: 'Built for Longevity',
    description: 'Heavy-duty steel frames, premium hydraulic components, and corrosion-resistant coatings ensure decades of reliable service.',
  },
  {
    icon: BarChart3,
    title: 'Production Analytics',
    description: 'Built-in monitoring system tracks cycle times, material usage, and maintenance intervals to optimize your workflow.',
  },
  {
    icon: ShieldCheck,
    title: '5-Year Warranty',
    description: 'Industry-leading warranty coverage backed by ISO 9001 certified manufacturing and rigorous quality testing.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">Why Choose Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            Engineered for{' '}
            <span className="text-gold-500">Excellence</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Every machine we build reflects decades of engineering expertise and a deep 
            understanding of what fabricators need to succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-cream-50 border border-stone-200 hover:border-gold-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
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