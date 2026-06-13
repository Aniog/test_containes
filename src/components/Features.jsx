import { Settings, Shield, Zap, HeadphonesIcon, Globe, Wrench } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'CNC Precision Control',
    description:
      'All our machines feature advanced CNC control systems for repeatable, accurate bends with minimal setup time.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty steel frames, industrial-grade hydraulics, and premium components ensure decades of reliable service.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description:
      'Our servo-electric and hybrid drive systems reduce energy consumption by up to 60% compared to conventional hydraulics.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Dedicated technical support team available around the clock. Spare parts shipped within 24 hours.',
  },
  {
    icon: Globe,
    title: 'Global Service Network',
    description:
      'Authorized service centers across 40+ countries. Installation, training, and maintenance wherever you are.',
  },
  {
    icon: Wrench,
    title: 'Flexible Tooling',
    description:
      'Interchangeable tooling systems that adapt to your workflow. Quick-change setups for maximum productivity.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Why ARTITECT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Engineered for Excellence
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Every machine is designed with the fabricator in mind — combining rugged
            reliability with intelligent control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 md:p-8 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}