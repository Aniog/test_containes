import { Cog, Shield, Zap, BarChart3, HeadphonesIcon, Globe } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'German Engineering',
    description: 'Every machine is built to stringent German quality standards, ensuring decades of reliable operation.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel frames, hardened tooling, and premium components for maximum longevity.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Servo-electric drives with Eco Mode reduce energy consumption by up to 40% compared to hydraulic systems.',
  },
  {
    icon: BarChart3,
    title: 'Industry 4.0 Ready',
    description: 'All machines feature IoT connectivity for remote monitoring, predictive maintenance, and OEE tracking.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Global service network with remote diagnostics, spare parts, and on-site technicians available around the clock.',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description: 'International logistics network ensures safe delivery and installation at your facility, anywhere in the world.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-4 tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">
            We combine decades of metalworking expertise with cutting-edge technology
            to deliver machinery that exceeds expectations.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 md:p-8 bg-brand-bg border border-brand-border rounded-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-dark rounded-sm flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}