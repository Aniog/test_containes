import React from 'react'
import {
  Target,
  Shield,
  Cog,
  Clock,
  Globe,
  HeadphonesIcon,
} from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description:
      'Every machine is built to tolerances of ±0.1mm, ensuring consistent, repeatable folds across your entire production run.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty steel frames and premium components deliver decades of reliable service even in the most demanding environments.',
  },
  {
    icon: Cog,
    title: 'CNC Automation',
    description:
      'Advanced CNC controls with intuitive interfaces reduce setup time and eliminate operator error for maximum efficiency.',
  },
  {
    icon: Clock,
    title: 'Rapid Production',
    description:
      'High-speed folding cycles and quick-change tooling let you meet tight deadlines without sacrificing quality.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description:
      'With service centers on every continent, expert technical support and spare parts are always within reach.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Lifetime Assistance',
    description:
      'Our dedicated engineering team provides ongoing training, maintenance guidance, and optimization support for the life of your machine.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            The ARTITECT Advantage
          </h2>
          <div className="mt-4 h-1 w-16 bg-gold mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Decades of engineering excellence and customer partnership set us apart.
            Here is what you can expect from every ARTITECT machine.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-xl border border-slate-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
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
